import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

/**
 * Merge Tailwind CSS classes với clsx.
 * Dùng bởi Shadcn UI components.
 */
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

/**
 * Format tiền Việt Nam.
 * Ví dụ: formatVND(8400000) → "8.400.000đ"
 */
export function formatVND(amount: number): string {
  return amount.toLocaleString("vi-VN") + "đ";
}