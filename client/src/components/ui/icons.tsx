import type { Category } from "@/context/types";
import { TrendingUp, TrendingDown, Equal } from "lucide-react";
import { categoryEmojis } from "@/helpers/categoryHelper";
import { formatPercentage } from "@/helpers/costHelper";

export const LARGE_ICON_SIZE = "h-10 w-10";

export function TrendingUpIcon({ size }: { size: "small" | "large" }) {
  let style;
  if (size === "large") style = LARGE_ICON_SIZE;
  return <TrendingUp className={`text-red-500 ${style}`} />;
}

export function TrendingDownIcon({ size }: { size: "small" | "large" }) {
  let style;
  if (size === "large") style = LARGE_ICON_SIZE;
  return <TrendingDown className={`text-green-500 ${style}`} />;
}

export function EqualsIcon({ size }: { size: "small" | "large" }) {
  let style;
  if (size === "large") style = LARGE_ICON_SIZE;
  return <Equal className={`text-blue-600 ${style}`} />;
}

export function SmallTrend({ percent }: { percent: number }) {
  const Icon = percent > 0 ? TrendingUpIcon : percent < 0 ? TrendingDownIcon : EqualsIcon;
  const color = percent > 0 ? "text-red-500" : percent < 0 ? "text-green-500" : "text-blue-500";
  return (
    <span className={`border flex justify-center rounded gap-0.5 font-bold ${color}`}>
      <Icon size="small" />
      {Math.abs(percent).toFixed(1)}%
    </span>
  );
}

export function CategoryIcon({ percent, category }: { percent: number | undefined, category: Category }) {
  const emoji = categoryEmojis[category]; 
  return (
    <span className="border flex justify-center rounded gap-0.2 font-bold">
      {emoji}
      {formatPercentage(percent ?? 0)}%
    </span>
  );
}
