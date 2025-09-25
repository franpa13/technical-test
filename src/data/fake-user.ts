import { User } from "@/types/auth-types";
import { v4 as uuidv4 } from 'uuid';
export const users: User[] = [
    {
        id: uuidv4(),
        email: "user1@gmail.com",
        password: "userdemo1",
        role: "admin"
    },

    {
        id: uuidv4(),
        email: "user2@gmail.com",
        password: "userdemo2",
        role: "user"
    }

] 