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

export const landingPageQuery = gql`
  query LandingPageQuery {
    all_landing_page(limit: 1) {
      items {
        hero_banner {
          eyebrow
          title {
            json
          }
          description
          imageConnection {
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
        }
      }
    }
  }
`;
