"use client"

import {
    Sidebar,
    SidebarContent,
    SidebarGroup,
    SidebarGroupContent,
    SidebarGroupLabel,
    SidebarMenu,
    SidebarMenuButton,
    SidebarMenuItem,
} from "@/components/ui/sidebar"
import { routes } from "@/const/routes";
import { SingleLink } from './single-link';
import { RocketLogo } from "./ui/rocket-logo";


export function AppSidebar() {


    return (
        <Sidebar className="border-login-card-border bg-login-card-bg backdrop-blur-sm">
            <SidebarContent>
                <SidebarGroup>
                    <SidebarGroupLabel className="flex items-center gap-3 px-2 my-8">
                        <RocketLogo />
                        <div className="flex flex-col justify-end items-start leading-tight">
                            <span className="text-lg font-extrabold bg-gradient-to-r from-login-gradient-from to-login-gradient-to bg-clip-text text-transparent tracking-wide">
                                Rocket
                            </span>
                            <p className="text-xs text-login-text-muted font-medium">
                                Tu red social de confianza
                            </p>
                        </div>
                    </SidebarGroupLabel>


                    <SidebarGroupContent>
                        <SidebarMenu className="space-y-1 px-2">
                            {routes.map((route) => {

                                return (
                                    <SidebarMenuItem key={route.url}>
                                        <SidebarMenuButton asChild>
                                            <SingleLink route={route} ></SingleLink>
                                        </SidebarMenuButton>
                                    </SidebarMenuItem>
                                );
                            })}
                        </SidebarMenu>
                    </SidebarGroupContent>
                </SidebarGroup>
            </SidebarContent>
            <div className="absolute w-full bottom-4 left-1/2 transform -translate-x-1/2 text-center text-login-text-muted text-xs  ">
                <p>Creado con pasión 💙 y mucho mate 🧉</p>
            </div>
        </Sidebar>
    );
}