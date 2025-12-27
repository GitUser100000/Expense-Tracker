import CategoryBreakdown from "@/components/content/metrics/CategoryBreakdown";
import Timeline from "@/components/content/metrics/Timeline";
import TopExpense from "@/components/content/metrics/TopExpense";
import Total from "@/components/content/metrics/Total";
import Watchlist from "@/components/content/metrics/SmallWatchlist";
import { Card } from "@/components/ui/card";
export default function MetricsPage() {
  return (
    <div>
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
