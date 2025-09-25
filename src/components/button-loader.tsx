"use client";

import { Button } from "@/components/ui/button";
import { Loader2 } from "lucide-react";

interface ButtonLoaderProps {
    isLoading?: boolean;
    children: React.ReactNode;
    loadingText?: string;
    className?: string;
    variant?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icon";
    type?: "button" | "submit" | "reset";
    disabled?: boolean;
    onClick?: () => void;
}

export function ButtonLoader({
    isLoading = false,
    children,
    loadingText = "",
    className = "",
    variant = "default",
    size = "default",
    type = "button",
    disabled = false,
    onClick,
}: ButtonLoaderProps) {
    return (
        <Button
            type={type}
            variant={variant}
            size={size}
            className={`relative  overflow-hidden ${className}`}
            disabled={disabled || isLoading}
            onClick={onClick}
        >

            <span
                className={`flex items-center justify-center transition-all text-accent font-bold duration-200 ${isLoading ? "opacity-0 scale-95" : "opacity-100 scale-100"
                    }`}
            >
                {children}
            </span>


            <span
                className={`absolute inset-0 flex items-center justify-center transition-all duration-200 ${isLoading ? "opacity-100 scale-100" : "opacity-0 scale-95"
                    }`}
            >
                <Loader2 size={64} className=" text-white animate-spin mr-2" />
                {loadingText}
            </span>
        </Button>
    );
}