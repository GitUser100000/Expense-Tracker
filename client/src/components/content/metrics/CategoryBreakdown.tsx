import ContentCard from "../ContentCard";
import { ScrollArea } from "@/components/ui/scroll-area";
import { useDataContext } from "@/context/data/DataContext";
import { useAppContext } from "@/context/appsettings/AppContext";
import { normalisePriceOffCadence } from "@/helpers/costHelper";
import type { Category } from "@/context/types";

const categoryLabels: Record<Category, string> = {
  ENTERTAINMENT: "Entertainment",
  SUBSCRIPTIONS: "Subscriptions",
  FOOD: "Food",
  TRANSPORT: "Transport",
  RENT: "Rent",
  UTILITIES: "Utilities",
  HEALTH: "Health",
  SHOPPING: "Shopping",
  OTHER: "Other",
};

const categoryColors: Record<Category, string> = {
  ENTERTAINMENT: "bg-rose-500",
  SUBSCRIPTIONS: "bg-blue-500",
  FOOD: "bg-amber-500",
  TRANSPORT: "bg-emerald-500",
  RENT: "bg-purple-500",
  UTILITIES: "bg-cyan-500",
  HEALTH: "bg-pink-500",
  SHOPPING: "bg-orange-500",
  OTHER: "bg-slate-500",
};

export default function CategoryBreakdown() {
  const { data: { expenses } } = useDataContext();
  const { appSettings: { dateRange } } = useAppContext();
  const { cadence } = dateRange;

  const categoryTotals = expenses.reduce((acc, expense) => {
    const normalized = normalisePriceOffCadence(expense, cadence);
    acc[expense.category] = (acc[expense.category] || 0) + normalized;
    return acc;
  }, {} as Record<Category, number>);

  const grandTotal = Object.values(categoryTotals).reduce((sum, val) => sum + val, 0);

  const sortedCategories = Object.entries(categoryTotals)
    .sort(([, a], [, b]) => b - a)
    .map(([category, total]) => ({
      category: category as Category,
      total,
      percent: grandTotal > 0 ? (total / grandTotal) * 100 : 0,
    }));

  return (
    <ContentCard title="Category Breakdown">
      <ScrollArea className="h-72 p-4">
        <div className="space-y-3 pr-4">
          {sortedCategories.map(({ category, total, percent }) => (
            <div key={category} className="space-y-1">
              <div className="flex justify-between text-sm">
                <span className="flex items-center gap-2">
                  <span className={`w-3 h-3 rounded-full ${categoryColors[category]}`} />
                  {categoryLabels[category]}
                </span>
                <span className="text-muted-foreground">
                  ${total.toFixed(2)} ({percent.toFixed(1)}%)
                </span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div 
                  className={`h-full ${categoryColors[category]} transition-all`}
                  style={{ width: `${percent}%` }}
                />
              </div>
            </div>
          ))}
          {sortedCategories.length === 0 && (
            <p className="text-muted-foreground text-center py-8">No expenses yet</p>
          )}
        </div>
      </ScrollArea>
    </ContentCard>
  );
}
