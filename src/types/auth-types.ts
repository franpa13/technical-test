export type Role = "admin" | "user"

export type User = {
    id: string;
    email: string;
    password: string;
    role: Role;
}


export type MocKProfileUser = {
    name: string;
    username: string;
    email: string;
    phone: number;
    bio: string;
    avatar: string;
    cover: string;
    stats: {
        posts: number;
        followers: number;
        following: number;
    },
}