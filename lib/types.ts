import {
  ALL_BLOGS_QUERYResult,
  ALL_PROJECTS_QUERYResult,
  ALL_SERVICES_QUERYResult,
} from '@/sanity/types';

// Bounded Props
export type BoundedProps = {
  children: React.ReactNode;
  as?: React.ElementType;
  className?: string;
};

// Sanity Image Props
export type SanityImageProps = {
  alt: string;
  url: string;
  className?: string;
};

// Submit Button Props
export type SubmitButtonProps = {
  className?: string;
  children?: React.ReactNode;
  onClick?: React.ComponentProps<'button'>['onClick'];
};

// Previous form state
export type PreviousFormStateProps = {
  status: string;
  message: string;
  field?: string;
};

// Section Title
export type SectionTitleProps = {
  as?: React.ElementType;
  className?: string;
  children: React.ReactNode;
};

// Back to Page Button
export type BackToPageProps = {
  url: string;
  className?: string;
  children: React.ReactNode;
};

// Blog Card Props
export type BlogCardProps = NonNullable<
  ALL_BLOGS_QUERYResult['blogs'][number]
> & {
  className?: string;
};

// Project Card Props
export type ProjectCardProps = NonNullable<
  ALL_PROJECTS_QUERYResult['projects'][number]
> & { className?: string };

// PageHero Props
export type PageHeroProps = {
  title: string;
  subtitle: string;
};

// Service Card Props
export type ServiceCardProps = NonNullable<
  ALL_SERVICES_QUERYResult['services'][number]
> & {
  className?: string;
};
/** Animations */
// Marquee Animation Props
export type MarqueeAnimationProps = {
  direction?: 'left' | 'right';
  duration?: number;
  children: React.ReactNode;
  className?: string;
};

// SplitText Letter Props
export type SplitTextLetterProps = {
  direction?: 'top' | 'bottom' | 'left' | 'right';
  duration?: number;
  children: React.ReactNode;
  className?: string;
};
