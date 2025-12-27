import type { DateCadence, Expense } from "@/context/types";
import { CategoryIcon } from "@/components/ui/icons";
import { normalisePriceOffCadence } from "@/helpers/costHelper";

export default function QuickExpense({
  expense,
  index,
  percent,
  cadence
}: {
  expense: Expense;
  index: number;
  percent: number | undefined;
  cadence: DateCadence;
}) {
  const normalizedPrice = normalisePriceOffCadence(expense, cadence);
  return (
    <div className="grid grid-cols-[3fr_2fr] items-center">
      <span className="flex w-[70%] gap-1.5">
        <span>{index}.</span>
        <span className="truncate">{expense.name}</span>
        <span>(${normalizedPrice.toFixed(2)})</span>
      </span>
      <CategoryIcon percent={percent} category={expense.category}/>
    </div>
  );
}
