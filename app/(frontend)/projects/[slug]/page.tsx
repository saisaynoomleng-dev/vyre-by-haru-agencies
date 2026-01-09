import BackToPage from '@/components/BackToPage';
import Bounded from '@/components/Bounded';
import ProjectCard from '@/components/ProjectCard';
import SanityImage from '@/components/SanityImage';
import SectionTitle from '@/components/SectionTitle';
import { ProjectCardSkeleton } from '@/components/Skeletons';
import { capitalizeText, formatDate, replaceDash } from '@/lib/utils';
import { sanityFetch } from '@/sanity/lib/live';
import { PROJECT_QUERY } from '@/sanity/lib/queries';
import { myPortableTextComponent } from '@/sanity/schemaTypes/sanity-components/myPortableText';
import { Metadata } from 'next';
import { PortableText } from 'next-sanity';
import { notFound } from 'next/navigation';
import { Suspense } from 'react';

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

const ProjectDetailPage = async ({
  params,
}: {
  params: Promise<{ slug: string }>;
}) => {
  const { data: project } = await sanityFetch({
    query: PROJECT_QUERY,
    params: await params,
  });

  if (!project) notFound();

  const { name, finishedAt, scope, timeline, desc, mainImage } = project;

  return (
    <Bounded className="grid md:grid-cols-2 md:gap-x-8 lg:gap-x-10">
      <div className="col-span-full">
        <BackToPage url="/projects">Back to all Projects</BackToPage>
      </div>
      <div className="flex flex-col gap-y-3 md:gap-y-5">
        <SectionTitle>{name}</SectionTitle>

        <div className="overflow-hidden">
          {mainImage?.alt && mainImage.asset ? (
            <SanityImage
              alt={mainImage.alt}
              url={mainImage.asset.url as string}
            />
          ) : null}
        </div>

        <div className="flex justify-between border-b border-brand-black/20 text-fs-300">
          <p>Year</p>
          {finishedAt && <p>{formatDate(finishedAt)}</p>}
        </div>

        <div className="flex justify-between border-b border-brand-black/20 text-fs-300">
          <p>Scope</p>
          {scope && <p>{scope}</p>}
        </div>

        <div className="flex justify-between border-b border-brand-black/20 text-fs-300">
          <p>Timeline</p>
          {timeline && <p>{timeline}</p>}
        </div>
      </div>

      <div className="min-w-full prose md:prose-lg">
        {desc && (
          <PortableText value={desc} components={myPortableTextComponent} />
        )}
      </div>

      <div className="divider col-span-full"></div>

      <div className="flex flex-col gap-y-5 col-span-full max-w-[95dvw]">
        <SectionTitle>Other Projects</SectionTitle>

        <div className="flex gap-x-5 overflow-x-auto">
          {project.otherProjects.map((project) => (
            <Suspense
              key={project.slug?.current}
              fallback={<ProjectCardSkeleton />}
            >
              <ProjectCard className="min-w-50" {...project} />
            </Suspense>
          ))}
        </div>
      </div>
    </Bounded>
  );
};

export default ProjectDetailPage;
