import { BlogCard } from "@/components/blog-card";
import { HeroBanner } from "@/components/hero-banner";
import { TopicsCarousel } from "@/components/topics-carousel";
import { YourHost } from "@/components/your-host";
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
        </div>
        <div className="col-span-full lg:col-span-3 order-1 lg:order-2">
          {pageSettings?.your_host && (
            <YourHost data={pageSettings?.your_host} />
          )}
        </div>
      </div>
    </div>
  );
}
