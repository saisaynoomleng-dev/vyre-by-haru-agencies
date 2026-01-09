import Bounded from '@/components/Bounded';
import { sanityFetch } from '@/sanity/lib/live';
import { UTILITY_PAGE_QUERY } from '@/sanity/lib/queries';
import { myPortableTextComponent } from '@/sanity/schemaTypes/sanity-components/myPortableText';
import { Metadata } from 'next';
import { PortableText } from 'next-sanity';

const params = {
  slug: 'privacy-policy',
};

const { data: page } = await sanityFetch({ query: UTILITY_PAGE_QUERY, params });

export const metadata: Metadata = {
  title: page?.name,
};

const PrivacyAndPolicyPage = () => {
  return (
    <Bounded>
      {page?.desc && (
        <div className="prose md:prose-lg">
          <PortableText
            value={page.desc}
            components={myPortableTextComponent}
          />
        </div>
      )}
    </Bounded>
  );
};

export default PrivacyAndPolicyPage;
