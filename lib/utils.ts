import { ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatExperienceYears(startYear: number): number {
  const currentYear = new Date().getFullYear();
  return Math.max(1, currentYear - startYear);
}
