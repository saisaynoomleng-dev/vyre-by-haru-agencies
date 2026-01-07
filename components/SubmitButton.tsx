'use client';

import { SubmitButtonProps } from '@/lib/types';
import { Button } from './ui/button';
import clsx from 'clsx';
import { useFormStatus } from 'react-dom';
import LoadingDot from './LoadingDot';

const SubmitButton = ({ children, className }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button className={clsx('', className)}>
      {pending ? <LoadingDot /> : children}
    </Button>
  );
};

export default SubmitButton;
