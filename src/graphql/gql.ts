import { gql } from "@apollo/client";

export const headerQuery = gql`
  query HeaderQuery {
    all_header(limit: 1) {
      items {
        logo {
          logo_imageConnection {
            edges {
              node {
                url
                description
                dimension {
                  width
                  height
                }
              }
            }
          }
          logo_link
        }
        navigation_list {
          navigation_itemConnection {
            edges {
              node {
                ... on BlogCategory {
                  title
                  url
                }
              }
            }
          }
        }
        call_to_action {
          title
          href
        }
      }
    }
  }
`;
