'use client';

import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import clsx from 'clsx';
import {
  MarqueeAnimationProps,
  SlideInAnimationProps,
  TextHighlighterProps,
} from '@/lib/types';
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
}: TextHighlighterProps) => {
  const container = useRef(null);

  useGSAP(
    () => {
      gsap.fromTo(
        container.current,
        { backgroundSize: '0% 100%', color: '#1e1e1e' },
        {
          color: '#ffffff',
          backgroundSize: '100% 100%',
          backgroundImage: 'linear-gradient(#f28482, #f28282)',
          backgroundRepeat: 'no-repeat',
          scrollTrigger: {
            trigger: container.current,
            start: 'top 50%',
            end: 'bottom 50%',
            toggleActions: 'play none none reverse',
            scrub: 1,
          },
        },
      );
    },
    { scope: container },
  );

  return (
    <span ref={container} className={clsx('px-2', className)}>
      {children}
    </span>
  );
};

export const SlideInAnimation = ({
  children,
  direction,
  duration = 1,
  className,
}: SlideInAnimationProps) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const gsapVars: gsap.TweenVars = {
        duration,
        opacity: 0,
        ease: 'power1.in',
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
          end: 'bottom 80%',
          toggleActions: 'play none none reverse',
        },
      };

      if (direction === 'top') gsapVars.y = -100;
      if (direction === 'bottom') gsapVars.y = 100;
      if (direction === 'left') gsapVars.x = -100;
      if (direction === 'right') gsapVars.x = 100;

      gsap.from(container.current, gsapVars);
    },
    { scope: container },
  );

  return (
    <div ref={container} className={clsx('', className)}>
      {children}
    </div>
  );
};

export const SlideInAnimationGroup = ({
  children,
  direction,
  duration = 1,
  className,
}: SlideInAnimationProps) => {
  const container = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const gsapVars: gsap.TweenVars = {
        duration,
        opacity: 0,
        ease: 'power1.in',
        stagger: {
          amount: 0.5,
        },
        scrollTrigger: {
          trigger: container.current,
          start: 'top 80%',
          end: 'bottom 80%',
          toggleActions: 'play none none reverse',
        },
      };

      if (direction === 'top') gsapVars.y = -100;
      if (direction === 'bottom') gsapVars.y = 100;
      if (direction === 'left') gsapVars.x = -100;
      if (direction === 'right') gsapVars.x = 100;

      if (container.current?.children) {
        gsap.from(container.current.children, gsapVars);
      }
    },
    { scope: container },
  );

  return (
    <div ref={container} className={clsx('', className)}>
      {children}
    </div>
  );
};
