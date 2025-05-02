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

  return (
    <div className="px-3 lg:px-10.5">
      {landingPage?.hero_banner && (
        <HeroBanner data={landingPage?.hero_banner} />
      )}
      {landingPage?.topics_carousel && (
        <TopicsCarousel data={landingPage?.topics_carousel} />
      )}

      <div className="grid grid-cols-12 gaps-x-[45px]">
        <div className="col-span-full lg:col-span-9"></div>
        <div className="col-span-full lg:col-span-3">
          {pageSettings?.your_host && (
            <YourHost data={pageSettings?.your_host} />
          )}
        </div>
      </div>
    </div>
  );
}
