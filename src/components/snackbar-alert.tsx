import { ReactNode } from "react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { Info } from "lucide-react";

interface SnackbarAlertProps {
    title: string;
    description: string;
    variant?: "default" | "destructive";
    icon?: ReactNode;
}

export default function SnackbarAlert({
    title,
    description,
    variant = "default",
    icon = <Info />,
}: SnackbarAlertProps) {
    return (
        <Alert variant={variant} className="flex justify-start items-start ">
            {icon}
            <div className="flex flex-col">
                <AlertTitle>{title}</AlertTitle>
                <AlertDescription>{description}</AlertDescription>
            </div>
        </Alert>
    );
}
