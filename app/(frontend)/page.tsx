import Bounded from '@/components/Bounded';
import HomeServiceSection from '@/sections/homepage/HomeServiceSection';
import HomeProjectSection from '@/sections/homepage/HomeProjectSection';
import HomeHeroSection from '@/sections/homepage/HomeHeroSection';
import HomeReviewSection from '@/sections/homepage/HomeReviewSection';
import HomeBlogSection from '@/sections/homepage/HomeBlogSection';
import FAQ from '@/components/FAQ';

export default async function Home() {
  return (
    <Bounded>
      <HomeHeroSection />
      <HomeServiceSection />
      <HomeProjectSection />
      <HomeReviewSection />
      <HomeBlogSection />
      <FAQ />
    </Bounded>
  );
}
