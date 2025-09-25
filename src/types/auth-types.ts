export type Role = "admin" | "user"

export type User = {
    id:string;
    email: string;
    password: string;
    role: Role;
}