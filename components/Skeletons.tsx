import { Skeleton } from './ui/skeleton';

// Blog Card
export const BlogCardSkeleton = () => {
  return (
    <div className="max-w-100 lg:max-h-150 flex flex-col gap-y-2 rounded-2xl shadow-sm shadow-brand-black/10 mx-auto">
      <div>
        <Skeleton className="w-100 h-125" />
      </div>

      <div className="flex flex-col gap-2 p-2">
        <div className="flex justify-between items-center">
          <Skeleton className="w-7.5 h-7.5 rounded-full" />
          <Skeleton className="w-15 h-3" />
        </div>

        <Skeleton className="w-full h-3" />
        <Skeleton className="w-full h-3" />
      </div>
    </div>
  );
};

export const ProjectCardSkeleton = () => {
  return (
    <div className="max-w-100 lg:max-h-150 flex flex-col gap-y-2 rounded-2xl shadow-sm shadow-brand-black/10">
      <div>
        <Skeleton className="w-100 h-100" />
      </div>

      <div className="flex justify-between items-center p-2">
        <Skeleton className="w-20 h-3" />
        <Skeleton className="w-15 h-3" />
      </div>
    </div>
  );
};

export const MemberCardSkeleton = () => {
  return (
    <div className="max-w-50 lg:max-h-75 flex flex-col gap-y-2">
      <div>
        <Skeleton className="w-50 h-50" />
      </div>
      <div className="flex flex-col gap-y-2 p-1">
        <Skeleton className="w-30 h-3" />
        <Skeleton className="w-30 h-3" />
      </div>
    </div>
  );
};

export const AwardCardSkeleton = () => {
  return (
    <div className="grid grid-cols-2 items-center border-b pb-4 border-brand-black/20">
      <Skeleton className="w-50 h-3" />

      <div className="flex justify-end items-center gap-x-5">
        <Skeleton className="w-40 h-3" />
        <Skeleton className="w-20 h-3" />
      </div>
    </div>
  );
};

export const ReviewCardSkeleton = () => {
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-10 md:gap-x-15 p-5 bg-brand-yellow/10">
      <div>
        <Skeleton className="w-20 rounded-full md:w-30 lg:w-40 h-20 md:h-30 lg:h-40" />
      </div>
      <div className="flex flex-col justify-center gap-y-3">
        <Skeleton className="min-w-full h-3" />
        <Skeleton className="min-w-full h-3" />
        <Skeleton className="min-w-full h-3" />
        <div className="flex gap-y-1 flex-col">
          <Skeleton className="w-30 h-3" />
          <Skeleton className="w-30 h-3" />
        </div>
      </div>
    </div>
  );
};
