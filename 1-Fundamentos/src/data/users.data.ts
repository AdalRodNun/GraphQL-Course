import { v4 as uuid } from "uuid"

export const users = [
    {
        id: uuid(),
        name: 'John',
        email: "john@example.com",
        role: {
            name: "admin"
        }
    },
    {
        id: uuid(),
        email: "juan@example.com",
        role: {
            name: "admin"
        }
    },
    {
        id: uuid(),
        name: 'Kevin',
        email: "kevin@example.com",
        role: {
            name: "user"
        }
    },
];