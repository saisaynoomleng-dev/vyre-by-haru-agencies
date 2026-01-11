import { SlideInAnimationGroup } from '@/components/Animations';
import ReviewCard from '@/components/ReviewCard';
import SectionTitle from '@/components/SectionTitle';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import { sanityFetch } from '@/sanity/lib/live';
import { ALL_REVIEWS_QUERY } from '@/sanity/lib/queries';

const HomeReviewSection = async () => {
  const { data: reviews } = await sanityFetch({ query: ALL_REVIEWS_QUERY });

  return (
    <div className="flex flex-col gap-5">
      <SlideInAnimationGroup
        direction="top"
        className="flex flex-col text-center gap-y-3"
      >
        <p className="font-chivo-mono uppercase text-fs-300 text-brand-black/60">
          (testimonials)
        </p>
        <SectionTitle className="text-fs-400! md:text-fs-500! max-w-[70%] md:max-w-[60%] mx-auto">
          Trusted by brands who aren&apos;t afraid to stand out .
        </SectionTitle>
      </SlideInAnimationGroup>

      <div>
        <Carousel className="w-[70%] md:w-[90%] mx-auto">
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem key={review.title}>
                <div className="p-1">
                  <ReviewCard {...review} />
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default HomeReviewSection;
