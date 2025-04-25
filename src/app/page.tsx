import { HeroBanner } from "@/components/hero-banner";
import { landingPageQuery } from "@/graphql/gql";
import { getClient } from "@/services/contentstack";

export default async function LandingPage() {
  const { data } = await getClient().query({
    query: landingPageQuery,
  });
  const landingPageData = data.all_landing_page.items[0] as Maybe<LandingPage>;

  const heroBannerData = landingPageData?.hero_banner;

  return (
    <div className="px-3 lg:px-10.5">
      {heroBannerData && <HeroBanner data={heroBannerData} />}
    </div>
  );
}
