import jwt from "jsonwebtoken";
import { User } from "./types/User";

export const generateToken = (user: User) => {
    return jwt.sign(
        {
            id: user.id,
            name: user.name,
            email: user.email,
            isAdmin: user.isAdmin,
        },
        process.env.JWT_SECRET || 'somethingsecret',
        {
            expiresIn: "30d",
        }
    );
}