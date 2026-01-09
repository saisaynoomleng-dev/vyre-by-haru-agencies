'use client';

import { SubmitButtonProps } from '@/lib/types';
import { Button } from './ui/button';
import clsx from 'clsx';
import { useFormStatus } from 'react-dom';
import LoadingDot from './LoadingDot';

const SubmitButton = ({ children, className, onClick }: SubmitButtonProps) => {
  const { pending } = useFormStatus();

  return (
    <Button onClick={onClick} type="submit" className={clsx('', className)}>
      {pending ? <LoadingDot /> : children}
    </Button>
  );
};

export default SubmitButton;
