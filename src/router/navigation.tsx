import { Route, Routes } from "react-router-dom"
import AuthLayout from "./authLayout"
import { adminRoutes, authRoutes, publicRoutes } from "./allRouters"
import AdminLayout from "./adminLayout"
import PublicLayout from "./publicLayout"


const Navigation = () => {

    return (
        <>
            <Routes>
                {/* Public routes */}
                <Route path="/" element={<PublicLayout />}>
                    {
                        publicRoutes.map((item: RoutesType, index) => (
                            <Route key={`.${index}`} path={item.path} element={item.element} />
                        ))
                    }
                </Route>

                {/* Admin routes */}
                <Route path="/dashboard" element={<AdminLayout />} >
                    {
                        adminRoutes.map((item: AdminRoutes, index) => (
                            <Route key={`.${index}`} path={item.path} element={item.element} />
                        ))
                    }
                </Route>
                
                {/* Auth routes */}
                <Route path="/auth" element={<AuthLayout />} >
                    {
                        authRoutes.map((item: RoutesType, index) => (
                            <Route key={`.${index}`} path={item.path} element={item.element} />
                        ))
                    }
                </Route>
            </Routes>
        </>
    )
}

export default Navigation