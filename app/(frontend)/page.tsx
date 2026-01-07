import AwardCard from '@/components/AwardCard';
import BlogCard from '@/components/BlogCard';
import FAQ from '@/components/FAQ';
import MemberCard from '@/components/MemberCard';
import ProjectCard from '@/components/ProjectCard';
import ReviewCard from '@/components/ReviewCard';
import {
  AwardCardSkeleton,
  BlogCardSkeleton,
  MemberCardSkeleton,
  ProjectCardSkeleton,
  ReviewCardSkeleton,
} from '@/components/Skeletons';
import SubmitButton from '@/components/SubmitButton';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { sanityFetch } from '@/sanity/lib/live';
import {
  ALL_AWARDS_QUERY,
  ALL_BLOGS_QUERY,
  ALL_PROJECTS_QUERY,
  ALL_REVIEWS_QUERY,
  ALL_TEAM_MEMBERS_QUERY,
} from '@/sanity/lib/queries';

export default async function Home() {
  const { data: blogs } = await sanityFetch({ query: ALL_REVIEWS_QUERY });
  return (
    <div>
      <Button>Click me</Button>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam ipsam
        libero laudantium qui eum quas. Tenetur ut dolor non porro.
      </p>

      {/* <div className="grid gap-5">
        {blogs.map((blog, i) => (
          <ReviewCardSkeleton key={i} {...blog} />
        ))}
      </div> */}

      <FAQ />
    </div>
  );
}
