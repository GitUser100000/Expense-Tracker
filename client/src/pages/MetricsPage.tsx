import CategoryBreakdown from "@/components/content/metrics/CategoryBreakdown";
import Timeline from "@/components/content/metrics/Timeline";
import TopExpense from "@/components/content/metrics/TopExpense";
import Total from "@/components/content/metrics/Total";
import Watchlist from "@/components/content/metrics/Watchlist";
import { Card } from "@/components/ui/card";
export default function MetricsPage() {
  return (
    <div>
      {/* TimeSpan */}
      <div className="text-center pt-10">
        <h1 className="text-3xl">2025</h1>
        <p className="font-light w-fit mx-auto px-2 mt-2 rounded-md">
          01/01/2025 - 29/11/2025
        </p>
      </div>
      {/* TimeSpan */}
      <div className="p-16 pt-8 space-y-6">
        {/* Row 1 */}
        <div className="grid grid-cols-3 gap-6">
          <Card>
            <Total />
          </Card>
          <Card>
            <TopExpense />
          </Card>
          <Card>
            <Watchlist />
          </Card>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-3 gap-6 auto-rows-fr items-stretch">
          <Card className="col-span-1 h-full">
            <CategoryBreakdown />
          </Card>
          <Timeline />
        </div>
      </div>
    </div>
  );
}
