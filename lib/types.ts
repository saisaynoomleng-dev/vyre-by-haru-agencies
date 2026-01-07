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
