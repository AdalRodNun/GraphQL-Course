import { ApolloServer } from "@apollo/server";
import {startStandaloneServer} from '@apollo/server/standalone'
import { resolvers } from "./resolvers";
import { typeDefs } from "./typeDefs";

// Definir el servidor
const server = new ApolloServer({
    typeDefs,
    resolvers
});

// Arrancar el servidor
const {url} = await startStandaloneServer(server, {
    listen: {
        port: 4000
    }
});

console.log("App listening on:", url);