import "reflect-metadata";

import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { ApolloServerPluginLandingPageLocalDefault } from "@apollo/server/plugin/landingPage/default";
import { ApolloServerPluginUsageReportingDisabled } from "@apollo/server/plugin/disabled";
import { MeResolver } from "../../apollo/resolvers";
import { buildSchema } from "type-graphql";

const schema = await buildSchema({
  resolvers: [MeResolver],
});
const isDev = process.env.NODE_ENV !== "production";
const apolloServer = new ApolloServer({
  schema,
  // Usage reporting stays off (no APOLLO_KEY); disabling it explicitly keeps the
  // vulnerable @apollo/protobufjs decode path unreachable.
  plugins: isDev
    ? [
        ApolloServerPluginLandingPageLocalDefault(),
        ApolloServerPluginUsageReportingDisabled(),
      ]
    : [ApolloServerPluginUsageReportingDisabled()],
  introspection: isDev,
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
