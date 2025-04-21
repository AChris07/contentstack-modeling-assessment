import {
  ApolloClient,
  HttpLink,
  InMemoryCache,
  from,
  ServerError,
} from "@apollo/client";
import { onError } from "@apollo/client/link/error";
import { registerApolloClient } from "@apollo/client-integration-nextjs";

interface ContentStackServerError extends ServerError {
  result: {
    error?: {
      message: string;
      code: string;
      hint?: string;
    };
  };
}

const isContentStackError = (
  error: Error
): error is ContentStackServerError => {
  const contentStackError = error as ContentStackServerError;
  return Boolean(contentStackError.result?.error);
};

const apiKey = process.env.CONTENTSTACK_API_KEY;
const environment = process.env.CONTENTSTACK_ENVIRONMENT;
const deliveryToken = process.env.CONTENTSTACK_DELIVERY_TOKEN ?? "";

// Error link to handle unexpected API errors.
const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) {
    const errorMessage = isContentStackError(networkError)
      ? networkError.result.error?.message
      : networkError.message;
    console.error(`[Network error]: ${errorMessage}`);
  }
});

// Link object to connect to ContentStack GraphQL API.
const httpLink = new HttpLink({
  uri: () => {
    return `https://graphql.contentstack.com/stacks/${apiKey}?environment=${environment}`;
  },
  headers: {
    access_token: deliveryToken,
  },
});

// Exports a getClient function to return a single client object per SSR request.
export const { getClient } = registerApolloClient(() => {
  return new ApolloClient({
    cache: new InMemoryCache(),
    link: from([errorLink, httpLink]),
    defaultOptions: {
      query: {
        fetchPolicy: "network-only",
      },
      watchQuery: {
        fetchPolicy: "cache-and-network",
      },
    },
  });
});
