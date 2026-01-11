import Bounded from '@/components/Bounded';
import HomeServiceSection from '@/sections/homepage/HomeServiceSection';
import HomeProjectSection from '@/sections/homepage/HomeProjectSection';
import HomeHeroSection from '@/sections/homepage/HomeHeroSection';
import HomeReviewSection from '@/sections/homepage/HomeReviewSection';
import HomeBlogSection from '@/sections/homepage/HomeBlogSection';
import FAQ from '@/components/FAQ';
import HomeDesktopServiceSection from '@/sections/homepage/HomeDesktopServiceSection';
import { sanityFetch } from '@/sanity/lib/live';
import { ALL_SERVICES_QUERY } from '@/sanity/lib/queries';

export default async function Home() {
  const { data } = await sanityFetch({
    query: ALL_SERVICES_QUERY,
    params: {
      startIndex: 1,
      endIndex: 5,
    },
  });

  return (
    <Bounded padding={false}>
      <HomeHeroSection />
      <HomeServiceSection
        className="md:hidden"
        services={data.services || {}}
      />
      <HomeDesktopServiceSection className="hidden md:grid" data={data} />
      <HomeProjectSection />
      <HomeReviewSection />
      <HomeBlogSection />
      <FAQ className="px-3 py-4 md:px-5 lg:px-8 lg:py-5" />
    </Bounded>
  );
}
