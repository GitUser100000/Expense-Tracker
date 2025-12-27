import { Card } from "@/components/ui/card";
import ContentCard from "../ContentCard";
import { useEffect, useState } from "react";
import { getUserExpensesSum } from "@/api/expenses";
import { useAppContext } from "@/context/appsettings/AppContext";
import { useDataContext } from "@/context/data/DataContext";
import { formatPercentage, getPercentageDiff, getNormalizedTotal, LargeTrendIcon } from "@/helpers/costHelper";
import { getPreviousDate } from "@/helpers/dateHelper";

export default function Total() {
  const { appSettings: { dateRange } } = useAppContext();
  const { startDate, cadence } = dateRange;
  const { data: { expenses } } = useDataContext();
  
  const [currentPeriod, setCurrentPeriod] = useState<number>(0);
  const [previousPeriod, setPreviousPeriod] = useState<number>(0);

  const total = getNormalizedTotal(expenses, cadence);
  const diff = getPercentageDiff(currentPeriod, previousPeriod);

  useEffect(() => {
    async function fetchPeriodTotals() {
      try {
        const previousDate = getPreviousDate(cadence, startDate);
        const current = await getUserExpensesSum(startDate, cadence);
        const previous = await getUserExpensesSum(previousDate, cadence);
        setCurrentPeriod(Number(current));
        setPreviousPeriod(Number(previous));
      } catch (err) {
        console.error("Error fetching period totals:", err);
      }
    }
    fetchPeriodTotals();
  }, [startDate, cadence]);

  const cadenceLabel: Record<string, string> = {
    DAILY: "day",
    WEEKLY: "week", 
    MONTHLY: "month",
    YEARLY: "year",
  };

  return (
    <ContentCard title="Total">
      <div className="flex flex-col gap-6 py-6">
        <h1 className="text-3xl text-center pb-5 font-semibold flex-2">
          ${total.toFixed(2)}
          <span className="text-lg font-normal text-muted-foreground">
            /{cadenceLabel[cadence]}
          </span>
        </h1>
        <Card className="flex-row justify-center items-center primary">
          <span className="w-fit">
            <LargeTrendIcon percent={diff}/>
          </span>
          <h3 className="w-fit font-bold text-3xl">{formatPercentage(diff)}%</h3>
          <span />
        </Card>
        <span className="w-full text-center">
          Last {cadenceLabel[cadence]}: ${previousPeriod.toFixed(2)}
        </span>
      </div>
    </ContentCard>
  );
}
