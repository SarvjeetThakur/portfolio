import * as React from 'react';
import { Outlet, useNavigate } from 'react-router-dom';
import { allPaths } from './allRouters';
import { getLocalStorage } from '@/lib/utils';

const AuthLayout = () => {
    const navigate = useNavigate();
    const isLogin = React.useMemo(() => getLocalStorage(import.meta.env.VITE_APP_STORE_LOGIN_KEY), []);
    const user = React.useMemo(() => getLocalStorage(import.meta.env.VITE_APP_STORE_USER_KEY), []);
    const ROLE_TYPE: Role = React.useMemo(() => 'ADMIN', []);
    React.useEffect(() => {
        if (isLogin) {
            if (user?.role === ROLE_TYPE) {
                navigate(allPaths.dashboard)
            } else {
                navigate(allPaths.home)
            }
        }
    }, [ROLE_TYPE, isLogin, navigate, user?.role]);

    return (
        <Outlet />
    )

}
export default AuthLayout