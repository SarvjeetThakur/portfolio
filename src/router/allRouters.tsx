import { Dashboard } from "@/admin/page";
import { Login } from "@/auth";
import { ContactUs, Home, } from "@/page";
import { HomeIcon, LayoutDashboard, LogIn } from "lucide-react";

const allPaths = {
    dashboard: '/dashboard',
    home: '/',
    contactUs: '/contact-us',
    skill: '/skill',
    login: '/auth/login',
}

const adminRoutes: AdminRoutes[] = [
    {
        element: <Dashboard />,
        path: allPaths.dashboard,
        isPrivate: true,
        icon: <LayoutDashboard />,
        role: 'ADMIN',
        name: 'Dashboard'
    }
]

const publicRoutes: RoutesType[] = [
    {
        element: <Home />,
        path: allPaths.home,
        isPrivate: false,
        icon: <HomeIcon />,
        name: 'Home',
    },
    {
        element: <ContactUs />,
        path: allPaths.contactUs,
        isPrivate: false,
        icon: <HomeIcon />,
        name: 'Contact-us',
    },
];

const authRoutes: RoutesType[] = [
    {
        element: <Login />,
        path: allPaths.login,
        isPrivate: false,
        icon: <LogIn />,
        name: 'Login'
    }
];

export {
    publicRoutes,
    adminRoutes,
    authRoutes,
    allPaths
}