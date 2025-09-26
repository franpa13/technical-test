import { Card, CardHeader, CardTitle, CardDescription, CardContent } from "@/components/ui/card";
import { Mail, Phone } from "lucide-react";

interface Props {
    email: string;
    phone: number;
    location: string;
}

export const ProfileInfoCard = ({ email, phone, location }: Props) => {
    return (
        <Card>
            <CardHeader>
                <CardTitle>Información</CardTitle>
                <CardDescription>Datos públicos del perfil</CardDescription>
            </CardHeader>
            <CardContent>
                <div className="space-y-3">
                    <div className="flex items-center gap-3">
                        <Mail size={16} />
                        <div>
                            <div className="text-sm font-medium">Email</div>
                            <div className="text-sm text-muted-foreground">{email}</div>
                        </div>
                    </div>

                    <div className="flex items-center gap-3">
                        <Phone size={16} />
                        <div>
                            <div className="text-sm font-medium">Teléfono</div>
                            <div className="text-sm text-muted-foreground">{phone}</div>
                        </div>
                    </div>

                    <div>
                        <div className="text-sm font-medium">Ubicación</div>
                        <div className="text-sm text-muted-foreground">{location}</div>
                    </div>
                </div>
            </CardContent>
        </Card>
    );
}
