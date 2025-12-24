import { TrendingUp } from "lucide-react";
import type { Expense } from "@/context/types";

export default function QuickExpense({
  expense,
  index,
}: {
  expense: Expense;
  index: number;
}) {
  return (
    <div className="flex items-center">
      <span className="flex w-[70%] gap-1.5">
        <span>{index}.</span>
        <span>{expense.name}</span>
        <span>(${expense.price}) </span>
      </span>
      <span className="border flex w-[30%] justify-center rounded gap-0.5">
        <TrendingUp />
        12%
      </span>
    </div>
  );
}
