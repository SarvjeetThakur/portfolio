import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
export const setLocalStorage = <T>(key: string, storedValue: T): void => {
  localStorage.setItem(key, JSON.stringify(storedValue));
}
export const getLocalStorage = (key: string) => {
  const item = localStorage.getItem(key);
  return item ? JSON.parse(item) : null;
}

export const removeAllLocalStorage = () => {
  localStorage.clear();
}
export const removeOneLocalStorage = (key: string) => {
  localStorage.removeItem(key);
}