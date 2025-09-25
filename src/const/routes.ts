import { Home, User2, MapMinus, LucideProps, LogOut } from "lucide-react"

export type Route = {
    title: string;
    url: string;
    icon: React.ComponentType<LucideProps>
}
export const routes: Route[] = [
    {
        title: "Feed",
        url: "/feed",
        icon: Home,
    },
    {
        title: "Perfil",
        url: "/profile",
        icon: User2,
    },
    {
        title: "Mapa",
        url: "/map",
        icon: MapMinus,
    },
    {
        title: "Cerrar Sesion",
        url: "/login",
        icon: LogOut,
    },
]