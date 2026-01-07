import { formatDate } from '@/lib/utils';
import { ALL_AWARDS_QUERYResult } from '@/sanity/types';

const AwardCard = (props: NonNullable<ALL_AWARDS_QUERYResult[0]>) => {
  const { awardedTitle, awardedCategory, awardedDate } = props;
  return (
    <div className="grid grid-cols-2 items-center justify-between border-b pb-4 border-brand-black/20 text-fs-300">
      <div>
        <p className="font-medium">{awardedTitle}</p>
      </div>

      <div className="flex justify-end items-center gap-x-3">
        <p>{awardedCategory}</p>
        {awardedDate && (
          <p className="text-brand-black/60">{formatDate(awardedDate)}</p>
        )}
      </div>
    </div>
  );
};

export default AwardCard;
