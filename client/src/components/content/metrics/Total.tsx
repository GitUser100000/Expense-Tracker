import ContentCard from "../ContentCard";
import { useAppContext } from "@/context/appsettings/AppContext";
import { useDataContext } from "@/context/data/DataContext";
import { getNormalizedTotal, normalisePriceOffCadence } from "@/helpers/costHelper";

export default function Total() {
  const { appSettings: { dateRange } } = useAppContext();
  const { cadence } = dateRange;
  const { data: { expenses } } = useDataContext();
  
  const total = getNormalizedTotal(expenses, cadence);
  
  const sortedByPrice = [...expenses].sort(
    (a, b) => normalisePriceOffCadence(b, cadence) - normalisePriceOffCadence(a, cadence)
  );
  const biggest = sortedByPrice[0];

  const cadenceLabel: Record<string, string> = {
    DAILY: "day",
    WEEKLY: "week", 
    MONTHLY: "month",
    YEARLY: "year",
  };

  return (
    <ContentCard title="Total">
      <div className="flex flex-col justify-center items-center h-72">
        <div className="mb-8">
          <span className="text-5xl font-bold tracking-tight">${total.toFixed(2)}</span>
          <span className="text-xl font-medium text-muted-foreground ml-1">
            /{cadenceLabel[cadence]}
          </span>
        </div>

        <div className="flex gap-3 text-sm">
          <div className="bg-muted/50 rounded-full px-4 py-1.5">
            <span className="font-medium">{expenses.length}</span>
            <span className="text-muted-foreground ml-1">expense{expenses.length !== 1 ? 's' : ''}</span>
          </div>
          {biggest && (
            <div className="bg-muted/50 rounded-full px-4 py-1.5">
              <span className="text-muted-foreground">Top: </span>
              <span className="font-medium">{biggest.name}</span>
            </div>
          )}
        </div>
      </div>
    </ContentCard>
  );
}
