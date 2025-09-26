import { ReactNode } from "react";

interface PropsTitle {
    title: string;
    subtitle?: string;
    icon?: ReactNode;
}

export const Title = ({ title, subtitle, icon }: PropsTitle) => {
    return (
        <div className="flex flex-col justify-center items-center gap-1">
            <div className="flex items-center gap-2">

                <h1
                    className="text-xl lg:text-2xl font-bold bg-clip-text text-transparent"
                    style={{
                        backgroundImage:
                            "linear-gradient(to right, var(--login-gradient-from), var(--login-gradient-to))",
                    }}
                >
                    {title}
                </h1>
                {icon && <span className="text-primary">{icon}</span>}
            </div>
            {subtitle && (
                <p className="text-sm  text-muted-foreground">{subtitle}</p>
            )}
        </div>
    );
};
