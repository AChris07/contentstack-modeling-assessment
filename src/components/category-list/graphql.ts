import { gql } from "@apollo/client";

export const categoryListQuery = gql`
  query CategoryListQuery($id: String!) {
    all_category_post: all_blog_post(
      where: { category: { blog_category: { uid: $id } } }
    ) {
      total
    }
  }
`;
