import clsx from "clsx";
import { BlogCard } from "@/components/blog-card";
import { HeroBanner } from "@/components/hero-banner";
import { TopicsCarousel } from "@/components/topics-carousel";
import { YourHost } from "@/components/your-host";
import { Newsletter } from "@/components/newsletter";
import { TopRated } from "@/components/top-rated";
import { CategoryList } from "@/components/category-list";
import { pageSettingsQuery, blogCategoryQuery } from "@/graphql/gql";
import { getClient } from "@/services/contentstack";

export interface CategoryPageProps {
  params: { slug: string };
}

export default async function CategoryPage({ params }: CategoryPageProps) {
  const { slug } = await params;
  const [pageSettingsData, pageData] = (
    await Promise.all([
      getClient().query({
        query: pageSettingsQuery,
      }),
      getClient().query({
        query: blogCategoryQuery,
        variables: { url: `/category/${slug}` },
      }),
    ])
  ).map((res) => res.data);

  const pageSettings = pageSettingsData.all_page_settings
    .items[0] as Maybe<PageSettings>;
  const blogCategoryPage = pageData.all_blog_category
    .items[0] as Maybe<BlogCategory>;
  const blogPosts = pageData.all_blog_post.items as BlogPost[];

  return (
    <div className="px-3 lg:px-10.5">
      {blogCategoryPage?.hero_banner && (
        <HeroBanner
          data={blogCategoryPage?.hero_banner}
          topics={pageData.total_posts.total}
        />
      )}

      <div className="grid grid-cols-12 lg:gap-x-[45px] gap-y-6">
        <div className="col-span-full lg:col-span-9 order-2 lg:order-1">
          <div className="grid grid-cols-12 lg:gap-x-[45px] gap-y-[45px] mt-[45px] lg:mt-[90px]">
            <h2 className="font-primary font-bold text-[32px]/4.5 col-span-full max-lg:hidden">
              The Latest from{" "}
              <span className="text-highlight-color">
                {blogCategoryPage?.title}
              </span>
            </h2>
            {blogPosts.map((post, idx) => {
              const variant = idx < 2 ? "vertical" : "horizontal";

              return (
                <BlogCard
                  key={post.system?.uid}
                  className={clsx(
                    "col-span-full",
                    variant === "vertical" && "lg:col-span-6"
                  )}
                  data={post}
                  variant={variant}
                />
              );
            })}
          </div>
        </div>
        <div className="col-span-full lg:col-span-3 order-1 lg:order-2 flex flex-col gap-y-3.75">
          {pageSettings?.your_host && (
            <YourHost data={pageSettings?.your_host} />
          )}
          {pageSettings?.newsletter && (
            <Newsletter data={pageSettings?.newsletter} />
          )}
          {pageSettings?.top_rated && (
            <TopRated data={pageSettings?.top_rated} />
          )}
          {pageSettings?.category_list && (
            <CategoryList data={pageSettings?.category_list} />
          )}
        </div>
      </div>
    </div>
  );
}
