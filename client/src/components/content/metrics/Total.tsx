import { Card } from "@/components/ui/card";
import ContentCard from "../ContentCard";
import { TrendingUpIcon } from "@/components/ui/icons";
import { useEffect, useState } from "react";
import { getUserExpensesSum } from "@/api/expenses";
import { useAppContext } from "@/context/appsettings/AppContext";
import { getPreviousDate } from "@/helpers/dateHelper";
import { formatPercentage, getPercentageDiff, LargeTrendIcon } from "@/helpers/costHelper";

export default function Total() {
  const { appSettings: {dateRange} } = useAppContext();
  const { startDate, cadence } = dateRange; 
  const [sum, setSum] = useState<number>(0); 
  const [prevSum, setPrevSum] = useState<number>(0);
  const [differnce, setDifference] = useState<number>(0); 
  useEffect(() => {
    async function fetchTotal() {
      try { 
        const previousDate = getPreviousDate(cadence, startDate);
        const total = Number((await getUserExpensesSum(startDate, cadence))._sum.price ?? 0);
        setSum(total);
        const prevTotal = Number((await getUserExpensesSum(previousDate, cadence))._sum.price ?? 0);
        setPrevSum(prevTotal);
        const diff = Number(getPercentageDiff(total, prevTotal)); 
        setDifference(diff); 
      } catch(err) {
        if (err instanceof Error) console.log(err.message);
        else console.log(err); 
      }
    }
    fetchTotal(); 
  }, [startDate, cadence])
  return (
    <ContentCard title="Total">
      <div className="flex flex-col gap-6 py-6">
        <h1 className="text-3xl text-center pb-5 font-semibold flex-2">${Number(sum).toFixed(2)}</h1>
        <Card className="flex-row justify-center items-center primary">
          <span className="w-fit">
            <LargeTrendIcon percent={differnce}/>
          </span>
          <h3 className="w-fit font-bold text-3xl">{formatPercentage(differnce)}%</h3>
          <span /> {/* spacer */}
        </Card>
        <span className="w-full text-center">Last Year: ${Number(prevSum).toFixed(2)}</span>
      </div>
    </ContentCard>
  );
}
