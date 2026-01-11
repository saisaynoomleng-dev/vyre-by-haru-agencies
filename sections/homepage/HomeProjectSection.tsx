import {
  SlideInAnimation,
  SlideInAnimationGroup,
} from '@/components/Animations';
import ProjectCard from '@/components/ProjectCard';
import SectionTitle from '@/components/SectionTitle';
import { sanityFetch } from '@/sanity/lib/live';
import { ALL_PROJECTS_QUERY } from '@/sanity/lib/queries';

const HomeProjectSection = async () => {
  const { data } = await sanityFetch({
    query: ALL_PROJECTS_QUERY,
    params: {
      startIndex: 1,
      endIndex: 4,
    },
  });

  return (
    <div className="flex flex-col gap-5">
      <SlideInAnimation direction="left">
        <SectionTitle>Latest Projects</SectionTitle>
      </SlideInAnimation>

      <SlideInAnimationGroup
        direction="top"
        className="grid md:grid-cols-3 gap-4"
      >
        {data.projects.map((project) => (
          <ProjectCard
            key={project.slug?.current}
            className="mx-auto"
            {...project}
          />
        ))}
      </SlideInAnimationGroup>
    </div>
  );
};

export default HomeProjectSection;
