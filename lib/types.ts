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
