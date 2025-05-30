import clsx from "clsx";
import { BlogCard } from "@/components/blog-card";
import { HeroBanner } from "@/components/hero-banner";
import { TopicsCarousel } from "@/components/topics-carousel";
import { YourHost } from "@/components/your-host";
import { Newsletter } from "@/components/newsletter";
import { TopRated } from "@/components/top-rated";
import { CategoryList } from "@/components/category-list";
import { pageSettingsQuery, landingPageQuery } from "@/graphql/gql";
import { getClient } from "@/services/contentstack";

export default async function LandingPage() {
  const [pageSettingsData, pageData] = (
    await Promise.all([
      getClient().query({
        query: pageSettingsQuery,
      }),
      getClient().query({
        query: landingPageQuery,
      }),
    ])
  ).map((res) => res.data);

  const pageSettings = pageSettingsData.all_page_settings
    .items[0] as Maybe<PageSettings>;
  const landingPage = pageData.all_landing_page.items[0] as Maybe<LandingPage>;
  const featuredPost = landingPage?.featured_postConnection?.edges?.[0]?.node;
  const trendingPosts = pageData.all_blog_post.items as BlogPost[];

  return (
    <div className="px-3 lg:px-10.5">
      {landingPage?.hero_banner && (
        <HeroBanner data={landingPage?.hero_banner} />
      )}
      {landingPage?.topics_carousel && (
        <TopicsCarousel data={landingPage?.topics_carousel} />
      )}

      <div className="grid grid-cols-12 lg:gap-x-[45px] gap-y-6">
        <div className="col-span-full lg:col-span-9 order-2 lg:order-1">
          {featuredPost && (
            <BlogCard data={featuredPost} variant="vertical" isFeatured />
          )}

          <div className="grid grid-cols-12 lg:gap-x-[45px] gap-y-[45px] mt-[45px] lg:mt-[90px]">
            <h2 className="font-primary font-bold text-[32px]/4.5 col-span-full max-lg:hidden">
              Trending
            </h2>
            {trendingPosts.map((post, idx) => {
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
