import { getClient } from "@/services/contentstack";

import { categoryListQuery } from "./graphql";

export interface CategoryListProps {
  data: PageSettingsCategoryList;
}

export async function CategoryList({ data }: CategoryListProps) {
  const categoryList =
    data.categoriesConnection?.edges
      ?.map((edge) => edge?.node)
      ?.filter((node) => !!node) ?? [];

  // Fetch the blog post total for each category
  const categoryListData = await Promise.all(
    categoryList.map((item) =>
      getClient()
        .query({
          query: categoryListQuery,
          variables: { id: item.system?.uid || "" },
        })
        .then((res) => ({
          ...item,
          ...res.data,
        }))
    )
  );

  return (
    <div className="bg-white rounded-[20px] py-5 px-3 max-lg:hidden">
      <h2 className="font-primary font-bold text-2xl/4 text-primary-color pb-[28px] border-b-1 border-secondary-color">
        Categories
      </h2>
      {categoryListData.map((categoryItem, index) => {
        return (
          <div
            key={index}
            className="flex items-center justify-between py-3 not-last:border-b-1 border-secondary-color"
          >
            <h3 className="font-primary font-bold text-base/3 text-main-color">
              {categoryItem.title}
            </h3>
            <span className="flex items-center justify-center rounded-full bg-highlight-color font-primary font-bold text-2xl leading-none w-5.5 h-5.5">
              {categoryItem.all_category_post.total}
            </span>
          </div>
        );
      })}
    </div>
  );
}
