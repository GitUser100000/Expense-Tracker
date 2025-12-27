import { EqualsIcon, TrendingDownIcon, TrendingUpIcon } from "@/components/ui/icons";
import type { Expense } from "@/context/types";

export function getPercentageDiff(current: number, previous: number) {
  return (current / previous ) * 100 - 100;
}

export function formatPercentage(value: number): string {
  return Number.isInteger(value)
    ? value.toString()
    : value.toFixed(2);
}

export function SmallTrendIcon({percent}: {percent: number}) {
  if (percent === 0) return <EqualsIcon size="small"/>
  if (percent > 0) return <TrendingUpIcon size="small"/>
  if (percent < 0) return <TrendingDownIcon size="small"/>
}

export function LargeTrendIcon({percent}: {percent: number}) {
  if (percent === 0) return <EqualsIcon size="large"/>
  if (percent > 0) return <TrendingUpIcon size="large"/>
  if (percent < 0) return <TrendingDownIcon size="large"/>
}

export function getExpensePercent(expenses: Expense[], id: number): number {
  const total = expenses.reduce((sum, e) => sum + Number(e.price), 0);
  if (total === 0) return 0;

  const item = expenses.find(e => e.id === id);
  if (!item) return 0;

  return (Number(item.price) / total) * 100;
}