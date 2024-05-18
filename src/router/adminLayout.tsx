import * as React from 'react'
import { Outlet, useNavigate } from 'react-router-dom'
import { allPaths } from './allRouters';
import { getLocalStorage } from '@/lib/utils';

const AdminLayout = () => {
    const navigate = useNavigate();
    const isLogin = getLocalStorage(import.meta.env.VITE_APP_STORE_LOGIN_KEY);
    const user = React.useMemo(() => getLocalStorage(import.meta.env.VITE_APP_STORE_USER_KEY), []);
    const ROLE_TYPE: Role = React.useMemo(() => 'VISITOR', []);
    React.useEffect(() => {
        if (!isLogin) {
            navigate(allPaths.login);
        }
        if (user?.role === ROLE_TYPE) {
            navigate(allPaths.home);
        }
    }, [isLogin, navigate, ROLE_TYPE, user?.role]);

    return (
        <Outlet />
    )

}
export default AdminLayout;