import { EqualsIcon, TrendingDownIcon, TrendingUpIcon } from "@/components/ui/icons";
import type { Cadence, DateCadence, Expense } from "@/context/types";

export function getPercentageDiff(current: number, previous: number) {
  if (previous === 0) return 0;
  return (current / previous) * 100 - 100;
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

export function normalisePriceOffCadence(
  expense: Expense,
  cadence: DateCadence
): number {
  const price = expense.price;

  switch (cadence) {
    case "DAILY": {
      if (expense.occurance === "ONE_TIME") return price;
      if (expense.occurance === "DAILY") return price;
      if (expense.occurance === "WEEKLY") return price / 7;
      if (expense.occurance === "MONTHLY") return price / 30;
      if (expense.occurance === "YEARLY") return price / 365;
      break;
    }

    case "WEEKLY": {
      if (expense.occurance === "ONE_TIME") return price;
      if (expense.occurance === "DAILY") return price * 7;
      if (expense.occurance === "WEEKLY") return price;
      if (expense.occurance === "MONTHLY") return (price / 30) * 7;
      if (expense.occurance === "YEARLY") return (price / 365) * 7;
      break;
    }

    case "MONTHLY": {
      if (expense.occurance === "ONE_TIME") return price;
      if (expense.occurance === "DAILY") return price * 30;
      if (expense.occurance === "WEEKLY") return price * 4.285;
      if (expense.occurance === "MONTHLY") return price;
      if (expense.occurance === "YEARLY") return price / 12;
      break;
    }

    case "YEARLY": {
      if (expense.occurance === "ONE_TIME") return price;
      if (expense.occurance === "DAILY") return price * 365;
      if (expense.occurance === "WEEKLY") return price * 52;
      if (expense.occurance === "MONTHLY") return price * 12;
      if (expense.occurance === "YEARLY") return price;
      break;
    }
  }

  return price;
}

export function getNormalizedTotal(expenses: Expense[], cadence: DateCadence): number {
  return expenses.reduce((sum, e) => sum + Number(normalisePriceOffCadence(e, cadence)), 0);
}

export function getExpensePercent(expenses: Expense[], id: number, cadence: DateCadence): number {
  const total = expenses.reduce((sum, e) => sum + Number(normalisePriceOffCadence(e, cadence)), 0);
  if (total === 0) return 0;

  const item = expenses.find(e => e.id === id);
  if (!item) return 0;

  const itemValue = normalisePriceOffCadence(item, cadence);

  return (Number(itemValue) / total) * 100;
}