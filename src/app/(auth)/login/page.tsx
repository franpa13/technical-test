"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Card, CardHeader, CardTitle, CardDescription, CardContent, CardFooter } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { loginUser } from "@/services/login-user";
import { User } from "@/types/auth-types";

import { Eye, EyeOff, Mail, Lock } from "lucide-react";
import { ButtonLoader } from '../../../components/common/button-loader';
import { Title } from "@/components/common/title";
import { RocketLogo } from '../../../components/common/rocket-logo';
import { SnackbarAlert } from "@/components/common/snackbar-alert";

export default function LoginPage() {
    const router = useRouter();

    const [errorLogin, setErrorLogin] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [showPassword, setShowPassword] = useState(false);


    const [form, setForm] = useState<User>({
        email: "",
        password: "",
        id: "",
        role: "user",
    });



    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setErrorLogin(false);
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsLoading(true);

        // fake promise
        await new Promise((resolve) => setTimeout(resolve, 1000));

        const userLogged: User | null = loginUser(form);
        if (userLogged) {

            router.push("/home");
        } else {
            setErrorLogin(true);
            setIsLoading(false);
        }
    };


    return (
        <div className="min-h-screen  animate-fade-in-down flex items-center justify-center p-5 p-0 relative overflow-hidden bg-background">


            <Card
                className="w-full max-w-md shadow-2xl border-login-card-border backdrop-blur-sm relative z-10 transform transition-all duration-500 hover:shadow-2xl "

            >
                <CardHeader className="text-center pb-4 relative">
                    <RocketLogo />

                    <CardTitle>
                        <Title title="Bienvenido de vuelta"></Title>
                    </CardTitle>
                    <CardDescription className=" text-base text-login-text-muted">
                        Ingresa a tu cuenta para continuar
                    </CardDescription>
                </CardHeader>

                <form onSubmit={handleSubmit}>
                    <CardContent className="flex flex-col gap-6 pb-6">

                        <div className="space-y-3">
                            <Label htmlFor="email" className="text-sm font-medium flex items-center gap-2">
                                <Mail className="h-4 w-4" />
                                Correo electrónico
                            </Label>

                            <div className="relative">
                                <Input
                                    id="email"
                                    name="email"
                                    type="email"
                                    placeholder="tu@email.com"
                                    value={form.email}
                                    onChange={handleChange}
                                    required
                                    disabled={isLoading}
                                    className=" py-3 rounded-xl border-2 focus:border-login-gradient-from transition-colors"
                                />

                            </div>
                        </div>

                        <div className="space-y-3">
                            <Label htmlFor="password" className="text-sm font-medium flex items-center gap-2">
                                <Lock className="h-4 w-4" />
                                Contraseña
                            </Label>
                            <div className="relative">
                                <Input
                                    id="password"
                                    name="password"
                                    type={showPassword ? "text" : "password"}
                                    placeholder="••••••••"
                                    value={form.password}
                                    onChange={handleChange}
                                    required
                                    disabled={isLoading}
                                    className=" py-3 rounded-xl border-2 focus:border-login-gradient-from transition-colors"
                                />

                                <button
                                    type="button"
                                    onClick={() => setShowPassword(!showPassword)}
                                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-muted-foreground hover:text-foreground transition-colors"
                                >
                                    {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                                </button>
                            </div>
                        </div>
                    </CardContent>

                    <CardFooter className="flex flex-col gap-4 mb-2">
                        {errorLogin && (
                            <SnackbarAlert
                                description=""
                                variant="destructive"
                                title="Credenciales incorrectas"
                            />
                        )}
                        <ButtonLoader className="w-full" type="submit" isLoading={isLoading} > Ingresar</ButtonLoader>

                        <div className="text-center pt-4 border-t border-border">
                            <p className="text-login-text-muted text-sm">
                                ¿No tenés cuenta?{" "}
                                <button
                                    type="button"
                                    className="text-login-gradient-from hover:text-login-gradient-to font-semibold underline transition-colors cursor-pointer"
                                    onClick={() => router.push("/register")}
                                    disabled={isLoading}
                                >
                                    Registrate aquí
                                </button>
                            </p>
                        </div>

                    </CardFooter>
                </form>
            </Card>

        </div>
    );
}