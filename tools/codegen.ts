import type { CodegenConfig } from "@graphql-codegen/cli";

const apiKey = process.env.CONTENTSTACK_API_KEY;
const environment = process.env.CONTENTSTACK_ENVIRONMENT;
const deliveryToken = process.env.CONTENTSTACK_DELIVERY_TOKEN ?? "";

const url = `https://graphql.contentstack.com/stacks/${apiKey}?environment=${environment}`;

const config: CodegenConfig = {
  schema: [
    {
      [url]: {
        headers: {
          access_token: deliveryToken,
        },
      },
    },
  ],
  generates: {
    "./src/types/contentstack.d.ts": {
      documents: [
        "./src/**",
        "!./src/**/*.test.{ts,tsx}",
        "!./src/**/*.spec.{ts,tsx}",
      ],
      plugins: ["typescript", "typescript-operations"],
      config: {
        noExport: true,
        skipTypeName: true,
      },
    },
  },
};

export default config;
