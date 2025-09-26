"use client";

import { Route } from "@/const/routes";
import { useLocation } from "@/hooks/use-location";
import Link from "next/link";
import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";

interface PropsLink {
    route: Route;
}

export const SingleLink = ({ route }: PropsLink) => {
    const { determineLocation } = useLocation();
    const router = useRouter()
    const isActive = determineLocation(route.url);

    const [open, setOpen] = useState(false);

    const handleClick = (e: React.MouseEvent) => {
        if (route.url === "/login") {
            e.preventDefault();
            setOpen(true);
        }
    };

    const handleLogout = () => {
        setOpen(false);
        router.push("/login")
    };

    return (
        <>
            <Link
                href={route.url}
                onClick={handleClick}
                className={`relative flex items-center gap-3 px-4 py-1 rounded-lg transition-all duration-300 group overflow-hidden border ${isActive
                    ? "bg-gradient-to-r from-login-gradient-from/10 to-login-gradient-to/10 border-login-gradient-from/30 shadow-sm"
                    : "border-transparent hover:bg-sidebar-accent/30 hover:border-sidebar-border"
                    }`}
            >
                {/* Active indicator bar */}
                <div
                    className={` absolute left-0 w-1 h-6 bg-gradient-to-b from-login-gradient-from to-login-gradient-to rounded-r transition-all duration-300 ${isActive
                        ? "translate-x-0 opacity-100"
                        : "-translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-60"
                        } `}
                />

                {/* Icon container */}
                <div
                    className={` relative z-10 p-2 rounded-md transition-all duration-300 ${isActive ? "bg-login-icon-bg" : "bg-login-toggle-bg group-hover:bg-login-toggle-bg/80"
                        }`}
                >
                    <route.icon
                        className={` w-4 h-4 transition-colors duration-300 ${isActive ? "dark:text-white text-login-text-muted" : "text-login-text-muted group-hover:text-login-toggle-text"
                            }`}
                    />
                </div>

                {/* Text */}
                <span
                    className={`relative z-10 font-medium transition-all duration-300 ${isActive ? "text-login-gradient-from font-semibold" : "text-login-toggle-text/80 group-hover:text-login-toggle-text"
                        }`}
                >
                    {route.title}
                </span>

                {/* Hover */}
                <div
                    className={` absolute inset-0 bg-gradient-to-r from-login-gradient-from/5 to-transparent  opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-lg  ${isActive ? "opacity-100" : ""
                        }`}
                />
            </Link>

            {/* Modal Logout */}
            <Dialog open={open} onOpenChange={setOpen}>
                <DialogContent className="z-[999]">
                    <DialogHeader>
                        <DialogTitle>¿Cerrar sesión?</DialogTitle>
                        <DialogDescription>
                            ¿ Estas seguro de que quieres cerrar sesion ?
                        </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>

                        <Button onClick={handleLogout}>

                            Cerrar sesión
                        </Button>
                    </DialogFooter>
                </DialogContent>
            </Dialog>
        </>
    );
};
