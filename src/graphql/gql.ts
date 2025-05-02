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

export const pageSettingsQuery = gql`
  query PageSettingsQuery {
    all_page_settings(limit: 1) {
      items {
        your_host {
          title
          authorConnection {
            edges {
              node {
                ... on Author {
                  title
                  profile_imageConnection {
                    edges {
                      node {
                        url
                        dimension {
                          height
                          width
                        }
                      }
                    }
                  }
                  biography {
                    json
                  }
                  social_links {
                    iconConnection {
                      edges {
                        node {
                          url
                          dimension {
                            height
                            width
                          }
                        }
                      }
                    }
                    link
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
        topics_carousel {
          title
          topicsConnection {
            edges {
              node {
                ... on BlogTopic {
                  title
                  iconConnection {
                    edges {
                      node {
                        url
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
          cta_label
        }
      }
    }
  }
`;
