import ContentCard from "../ContentCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import React from "react";
import type { Expense } from "@/context/types";
import QuickExpense from "./QuickExpense";
import { useDataContext } from "@/context/data/DataContext";
import { getExpensePercent } from "@/helpers/costHelper";
import { useAppContext } from "@/context/appsettings/AppContext";

export default function TopExpense() {
  const { data: {expenses} } = useDataContext(); 
  const { appSettings: { dateRange } } = useAppContext(); 
  const { cadence } = dateRange;

  const sortedExpenses = [...expenses]
    .map(e => ({ expense: e, percent: getExpensePercent(expenses, e.id, cadence) }))
    .sort((a, b) => b.percent - a.percent);

  return (
    <div>
      <ContentCard title="Top Expenses">
        <ScrollArea className="h-72 w-[90%] rounded-md border mx-auto mt-5">
          <div className="p-8">
            {sortedExpenses.length === 0 && (
              <p className="text-muted-foreground text-center py-8">No expenses yet</p>
            )}
            {sortedExpenses.map(({ expense, percent }, index) => (
              <React.Fragment key={expense.id}>
                <QuickExpense expense={expense} index={index + 1} percent={percent} cadence={cadence}/>
                <Separator className="my-2" />
              </React.Fragment>
            ))}
          </div>
        </ScrollArea>
      </ContentCard>
    </div>
  );
}
