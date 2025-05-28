import { gql } from "@apollo/client";

const imageFragment = gql`
  fragment ImageFragment on SysAsset {
    url
    description
    dimension {
      width
      height
    }
  }
`;

const blogCardFragment = gql`
  fragment BlogCardFragment on BlogPost {
    system {
      uid
    }
    title
    url
    imageConnection {
      edges {
        node {
          ... on SysAsset {
            ...ImageFragment
          }
        }
      }
    }
    categoryConnection {
      edges {
        node {
          ... on BlogTopic {
            title
          }
          ... on BlogCategory {
            title
          }
        }
      }
    }
    authorConnection {
      edges {
        node {
          ... on Author {
            title
            profile_imageConnection {
              edges {
                node {
                  ...ImageFragment
                }
              }
            }
          }
        }
      }
    }
    published_date
    summary
  }
`;

export const heroBannerFragment = gql`
  fragment HeroBannerFragment on HeroBanner {
    eyebrow
    title {
      json
    }
    description
    imageConnection {
      edges {
        node {
          ...ImageFragment
        }
      }
    }
  }
`;

export const headerQuery = gql`
  query HeaderQuery {
    all_header(limit: 1) {
      items {
        logo {
          logo_imageConnection {
            edges {
              node {
                ...ImageFragment
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

  ${imageFragment}
`;

export const footerQuery = gql`
  query FooterQuery {
    all_footer(limit: 1) {
      items {
        logo {
          logo_imageConnection {
            edges {
              node {
                ...ImageFragment
              }
            }
          }
          logo_link
        }
        subtitle
        social_links {
          iconConnection {
            edges {
              node {
                ...ImageFragment
              }
            }
          }
          link
        }
        copyright
      }
    }
  }

  ${imageFragment}
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
                        ...ImageFragment
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
                          ...ImageFragment
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
        newsletter {
          title
          subtitle
          email_placeholder
          cta_label
          description
        }
        top_rated {
          title
          postsConnection {
            edges {
              node {
                ...BlogCardFragment
              }
            }
          }
        }
        category_list {
          title
          categoriesConnection {
            edges {
              node {
                ... on BlogCategory {
                  system {
                    uid
                  }
                  title
                  url
                }
              }
            }
          }
        }
      }
    }
  }

  ${imageFragment}
  ${blogCardFragment}
`;

export const landingPageQuery = gql`
  query LandingPageQuery {
    all_landing_page(limit: 1) {
      items {
        hero_banner {
          ...HeroBannerFragment
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
                        ...ImageFragment
                      }
                    }
                  }
                }
              }
            }
          }
          cta_label
        }
        featured_postConnection {
          edges {
            node {
              ...BlogCardFragment
            }
          }
        }
      }
    }

    all_blog_post(where: { trending: true }, order_by: created_at_DESC) {
      items {
        ...BlogCardFragment
      }
    }
  }

  ${imageFragment}
  ${heroBannerFragment}
  ${blogCardFragment}
`;

export const blogCategoryQuery = gql`
  query BlogCategoryQuery($url: String!) {
    all_blog_category(limit: 1, where: { url: $url }) {
      total
      items {
        title
        hero_banner {
          ...HeroBannerFragment
        }
      }
    }

    total_posts: all_blog_post(
      where: { category: { blog_category: { url: $url } } }
    ) {
      total
    }

    all_blog_post(
      where: { category: { blog_category: { url: $url } } }
      limit: 6
      order_by: created_at_DESC
    ) {
      items {
        ...BlogCardFragment
      }
    }
  }

  ${imageFragment}
  ${heroBannerFragment}
  ${blogCardFragment}
`;
