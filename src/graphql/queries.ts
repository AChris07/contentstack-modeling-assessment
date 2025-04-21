import { getClient } from "@/services/contentstack";
import { headerQuery } from "./gql";

interface HeaderQueryResponse {
  all_header: {
    items: Header[];
  };
}

export async function getHeader(): Promise<Header> {
  const { data } = await getClient().query<HeaderQueryResponse>({
    query: headerQuery,
  });

  return data.all_header.items[0];
}
