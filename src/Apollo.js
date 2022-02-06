import { withApollo } from "next-apollo";
import { ApolloClient, HttpLink, InMemoryCache } from "@apollo/client";
import { awsmobile } from "./aws-exports";

const apolloClient = new ApolloClient({
  ssrMode: typeof window === "undefined",
  link: new HttpLink({
    uri: "https://jaalxvcsgbh2tgepetgy4c7vxa.appsync-api.us-east-1.amazonaws.com/graphql", // Server URL (must be absolute)
    credentials: "same-origin", // Additional fetch() options like `credentials` or `headers`
  }),
  cache: new InMemoryCache(),
});

export default withApollo(apolloClient);
