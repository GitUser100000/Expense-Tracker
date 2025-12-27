import type { Expense } from "@/context/types";
import { CategoryIcon, SmallTrend } from "@/components/ui/icons";

export default function QuickExpense({
  expense,
  index,
  percent
}: {
  expense: Expense;
  index: number;
  percent: number | undefined
}) {
  return (
    <div className="grid grid-cols-[3fr_2fr] items-center">
      <span className="flex w-[70%] gap-1.5">
        <span>{index}.</span>
        <span className="truncate">{expense.name}</span>
        <span>(${expense.price}) </span>
      </span>
      <CategoryIcon percent={percent} category={expense.category}/>
    </div>
  );
}
