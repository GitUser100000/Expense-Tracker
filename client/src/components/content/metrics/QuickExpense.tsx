import type { Expense } from "@/context/types";
import { SmallTrend } from "@/components/ui/icons";

export default function QuickExpense({
  expense,
  index,
}: {
  expense: Expense;
  index: number;
}) {
  return (
    <div className="grid grid-cols-[3fr_2fr] items-center">
      <span className="flex w-[70%] gap-1.5">
        <span>{index}.</span>
        <span className="truncate">{expense.name}</span>
        <span>(${expense.price}) </span>
      </span>
      <SmallTrend percent={12} />
    </div>
  );
}
