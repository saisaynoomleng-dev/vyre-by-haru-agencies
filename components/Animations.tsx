'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import { MarqueeAnimationProps, SplitTextLetterProps } from '@/lib/types';
import { GSDevTools } from 'gsap/GSDevTools';
import { SplitText } from 'gsap/SplitText';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(useGSAP, GSDevTools, SplitText, ScrollTrigger);

export const MarqueeAnimation = ({
  direction = 'left',
  duration = 30,
  children,
  className,
}: MarqueeAnimationProps) => {
  const containerRef = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      gsap.set(containerRef.current, {
        xPercent: direction === 'right' ? -200 : 0,
      });

      const gsapVars: gsap.TweenVars = {
        duration,
        ease: 'none',
        repeat: -1,
      };

      if (direction === 'left') gsapVars.xPercent = -100;
      if (direction === 'right') gsapVars.xPercent = 0;

      tl.to(containerRef.current, gsapVars);
    },
    { scope: containerRef },
  );

  return (
    <div ref={containerRef} className={clsx('', className)}>
      {children}
    </div>
  );
};

export const TextHighlighter = ({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) => {};
