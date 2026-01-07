import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { MeResolver } from "../../apollo/resolvers";
import { buildSchema } from "type-graphql";

const schema = await buildSchema({
  resolvers: [MeResolver],
});
const apolloServer = new ApolloServer({
  schema,
  plugins: [ApolloServerPluginLandingPageLocalDefault()],
  introspection: true,
});

interface Context {
  req?: Request;
}

const handler = startServerAndCreateNextHandler<Request, Context>(apolloServer, {
  context: async (req) => ({ req }),
});

export async function GET(
  req: Request
) {
  return handler(req);
}

export async function POST(
  req: Request
) {
  return handler(req);
}
