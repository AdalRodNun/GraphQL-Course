import { users } from "../data/users.data"

export const resolvers = {
    Query: {
        users: () => users,
        user: (parent, args, context, info) => {
            const { uid } = args.id

            console.log(uid)

            return users.filter((user) => user.id === uid)
        }
    }
};