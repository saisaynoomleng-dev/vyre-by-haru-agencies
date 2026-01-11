import BackToPage from '@/components/BackToPage';
import Bounded from '@/components/Bounded';
import SanityImage from '@/components/SanityImage';
import TextTable from '@/components/TextTable';
import { capitalizeText, replaceDash } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/live';
import { TEAM_MEMBER_QUERY } from '@/sanity/lib/queries';
import { Metadata } from 'next';
import { notFound } from 'next/navigation';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const slugFormatted = replaceDash(slug);

  return {
    title: capitalizeText(slugFormatted),
  };
}

const MemberDetail = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { data: member } = await sanityFetch({
    query: TEAM_MEMBER_QUERY,
    params: await params,
  });

  if (!member) notFound();

  const imageURL = member?.mainImage?.asset?.url;
  const imageALT = member?.mainImage?.alt;

  return (
    <Bounded className="grid md:grid-cols-2 md:gap-x-10 gap-y-5">
      <BackToPage url={'/about'} className="col-span-full">
        Back
      </BackToPage>

      <div className="flex flex-col gap-y-5">
        <div className="overflow-hidden">
          {imageALT && imageURL && (
            <SanityImage
              className="w-full mx-auto"
              alt={imageALT}
              url={imageURL}
            />
          )}
        </div>

        <TextTable text="Name">{member.fullName}</TextTable>
        <TextTable text="Role">{member.role}</TextTable>
      </div>

      <p>{member.bio}</p>
    </Bounded>
  );
};

export default MemberDetail;
