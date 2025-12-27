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
      <ScrollArea className="h-72 px-4 py-2">
        {sortedCategories.length === 0 ? (
          <div className="h-full flex items-center justify-center">
            <p className="text-muted-foreground">No expenses yet</p>
          </div>
        ) : (
          <div className="space-y-3">
            {sortedCategories.map(({ category, total, percent }) => (
              <div key={category} className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="flex items-center gap-2">
                    <span className={`w-2.5 h-2.5 rounded-full ${categoryColors[category]}`} />
                    <span className="font-medium text-sm">{categoryLabels[category]}</span>
                  </span>
                  <div className="text-right">
                    <span className="font-semibold text-sm">${total.toFixed(2)}</span>
                    <span className="text-xs text-muted-foreground ml-2">{percent.toFixed(0)}%</span>
                  </div>
                </div>
                <div className="h-1.5 bg-muted rounded-full overflow-hidden">
                  <div 
                    className={`h-full ${categoryColors[category]} rounded-full transition-all duration-500`}
                    style={{ width: `${percent}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </ScrollArea>
    </ContentCard>
  );
}
