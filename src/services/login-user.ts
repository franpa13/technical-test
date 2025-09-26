import { User } from "@/types/auth-types";
import { users } from "@/mock/fake-users";

export const loginUser = (user: User): User | null => {
    const matchedUser = users.find(
        (existingUser) => existingUser.email === user.email && existingUser.password === user.password
    );

    return matchedUser || null;
};
