export const typeDefs = `#graphql
    input UserId {
        uid: ID
    }

    type User {
        id: ID
        name: String
        email: String
        role: Role
    }

    type Role {
        name: String
    }

    type Query {
        users: [User]
        user(id: UserId!): [User]
    }
`;