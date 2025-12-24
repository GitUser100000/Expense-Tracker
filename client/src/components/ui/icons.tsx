import { TrendingUp, TrendingDown, Equal } from "lucide-react";

export const LARGE_ICON_SIZE = "h-10 w-10";

export function TrendingUpIcon({ size }: { size: "small" | "large" }) {
  let style;
  if (size === "large") style = LARGE_ICON_SIZE;
  return <TrendingUp className={`text-green-400 ${style}`} />;
}

export function TrendingDownIcon({ size }: { size: "small" | "large" }) {
  let style;
  if (size === "large") style = LARGE_ICON_SIZE;
  return <TrendingDown className={`text-red-600 ${style}`} />;
}

export function EqualsIcon({ size }: { size: "small" | "large" }) {
  let style;
  if (size === "large") style = LARGE_ICON_SIZE;
  return <Equal className={`text-blue-600 ${style}`} />;
}

export function SmallTrend({ percent }: { percent: number }) {
  return (
    <span className="border flex justify-center rounded gap-0.5 font-bold">
      <TrendingUpIcon size="small" />
      {percent}%
    </span>
  );
}
