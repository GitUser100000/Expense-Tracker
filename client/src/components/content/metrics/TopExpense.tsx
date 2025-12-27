import ContentCard from "../ContentCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useDataContext } from "@/context/data/DataContext";
import { getExpensePercent, normalisePriceOffCadence } from "@/helpers/costHelper";
import { useAppContext } from "@/context/appsettings/AppContext";
import { categoryEmojis } from "@/helpers/categoryHelper";

export default function TopExpense() {
  const { data: {expenses} } = useDataContext(); 
  const { appSettings: { dateRange } } = useAppContext(); 
  const { cadence } = dateRange;

  const sortedExpenses = [...expenses]
    .map(e => ({ expense: e, percent: getExpensePercent(expenses, e.id, cadence) }))
    .sort((a, b) => b.percent - a.percent)
    .slice(0, 5);

  return (
    <ContentCard title="Top Expenses">
      <ScrollArea className="h-72 px-4 py-2">
        {sortedExpenses.length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <p className="text-muted-foreground">No expenses yet</p>
          </div>
        ) : (
          <div className="space-y-2">
            {sortedExpenses.map(({ expense, percent }, index) => (
              <div 
                key={expense.id} 
                className="flex items-center gap-3 p-3 rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors"
              >
                <span className="text-2xl">{categoryEmojis[expense.category]}</span>
                <div className="flex-1 min-w-0">
                  <p className="font-medium truncate">{expense.name}</p>
                  <p className="text-sm text-muted-foreground">
                    ${normalisePriceOffCadence(expense, cadence).toFixed(2)}
                  </p>
                </div>
                <div className="text-right">
                  <p className="font-semibold">{percent.toFixed(1)}%</p>
                  <p className="text-xs text-muted-foreground">#{index + 1}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </ScrollArea>
    </ContentCard>
  );
}
