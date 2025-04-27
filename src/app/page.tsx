import { HeroBanner } from "@/components/hero-banner";
import { TopicsCarousel } from "@/components/topics-carousel";
import { landingPageQuery } from "@/graphql/gql";
import { getClient } from "@/services/contentstack";

export default async function LandingPage() {
  const { data } = await getClient().query({
    query: landingPageQuery,
  });
  const landingPageData = data.all_landing_page.items[0] as Maybe<LandingPage>;

  const heroBannerData = landingPageData?.hero_banner;
  const topicsCarouselData = landingPageData?.topics_carousel;

  return (
    <div className="px-3 lg:px-10.5">
      {heroBannerData && <HeroBanner data={heroBannerData} />}
      {topicsCarouselData && <TopicsCarousel data={topicsCarouselData} />}
    </div>
  );
}
