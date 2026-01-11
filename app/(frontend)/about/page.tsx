import Bounded from '@/components/Bounded';
import FAQ from '@/components/FAQ';
import PageHero from '@/components/PageHero';
import { sanityFetch } from '@/sanity/lib/live';
import { ALL_AWARDS_QUERY, ALL_TEAM_MEMBERS_QUERY } from '@/sanity/lib/queries';
import AboutAwardsSection from '@/sections/aboutpage/AboutAwardsSection';
import AboutDesktopMemberSection from '@/sections/aboutpage/AboutDesktopMemberSection';
import AboutMemberSection from '@/sections/aboutpage/AboutMemberSection';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'About Vyre',
};

const AboutPage = async () => {
  const { data: members } = await sanityFetch({
    query: ALL_TEAM_MEMBERS_QUERY,
  });

  const { data: awards } = await sanityFetch({
    query: ALL_AWARDS_QUERY,
  });

  return (
    <Bounded>
      <div className="flex flex-col gap-y-5 md:gap-y-8">
        <PageHero
          title="About Vyre"
          subtitle="A quiet studio focused on clarity, systems, and modern digital craft."
        />
        <div className="flex flex-col gap-y-3 md:flex-row md:justify-between md:gap-x-10">
          <p className="text-fs-300 text-brand-black/80">
            <span className="font-semibold">VYRE&reg; BY HARU AGENCIES</span> is
            a UI/UX design and modern development studio built on intention
            rather than noise. We design digital products that feel simple,
            usable, and enduring—by thinking deeply about structure, flow, and
            human behavior.
          </p>
          <p className="text-fs-300 text-brand-black/80">
            Our work values restraint, precision, and long-term clarity. Every
            interface is shaped to reduce friction, support understanding, and
            scale without losing its integrity.
          </p>
        </div>
      </div>

      <div className="divider"></div>

      <AboutMemberSection className="md:hidden" members={members} />

      <AboutDesktopMemberSection className="hidden md:grid" members={members} />

      <div className="divider"></div>

      <AboutAwardsSection className="" awards={awards} />

      <FAQ />
    </Bounded>
  );
};

export default AboutPage;
