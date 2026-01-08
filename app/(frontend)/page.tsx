import Bounded from '@/components/Bounded';
import HeroSection from '@/sections/homepage/hero';

export default async function Home() {
  return (
    <Bounded>
      <HeroSection />
    </Bounded>
  );
}
