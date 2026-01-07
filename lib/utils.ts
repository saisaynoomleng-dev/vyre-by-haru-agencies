import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export const capitalizeText = (text: string) => {
  return `${text.slice(0, 1).toUpperCase()}${text.slice(1)}`;
};

export const formatDate = (date: string) => {
  return new Date(date).toLocaleDateString('en-US', {
    month: 'short',
    year: 'numeric',
    day: '2-digit',
  });
};

export const formatCurrency = (currency: number) => {
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(currency);
};

export const replaceUnderscore = (text: string) => {
  return text.replace(/_/g, ' ');
};
