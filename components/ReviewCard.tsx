import { ALL_REVIEWS_QUERYResult } from '@/sanity/types';
import React from 'react';
import SanityImage from './SanityImage';
import Image from 'next/image';
import { BsQuote } from 'react-icons/bs';

const ReviewCard = (props: NonNullable<ALL_REVIEWS_QUERYResult[number]>) => {
  const { fullName, role, mainImage, desc, title } = props;
  return (
    <div className="grid grid-cols-[auto_1fr] gap-x-10 md:gap-x-15 p-5 bg-brand-yellow/10">
      <div className="">
        {mainImage?.alt && mainImage?.asset?.url ? (
          <Image
            alt={mainImage.alt || ''}
            src={mainImage.asset.url}
            width={100}
            height={100}
            loading="eager"
            priority
            className="w-20 rounded-full md:w-30 lg:w-40"
          />
        ) : null}
      </div>

      <div className="flex flex-col justify-center gap-y-3">
        <p>
          <BsQuote className="text-fs-800 text-brand-red" />
          <span className="font-medium">{desc}</span>
        </p>
        <div className="text-fs-300">
          <p className="font-medium">{fullName}</p>
          <p className="text-brand-black/60">{role}</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
