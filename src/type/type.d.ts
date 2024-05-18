interface RoutesType {
    element: ReactNode;
    path: string;
    isPrivate: boolean;
    icon: ReactNode;
    name:string;
}
type Role = 'ADMIN' | 'VISITOR'
interface AdminRoutes extends RoutesType {
    role: Role
}
