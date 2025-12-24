import TopExpense from "@/components/content/metrics/TopExpense";
import Total from "@/components/content/metrics/Total";
import { Card } from "@/components/ui/card";
export default function MetricsPage() {
  return (
    <div>
      {/* TimeSpan */}
      <div className="text-center pt-10">
        <h1 className="text-3xl">2025</h1>
        <p className="font-light bg-accent w-fit mx-auto px-2 mt-2 rounded-md">
          01/01/2025 - 29/11/2025
        </p>
      </div>
      {/* TimeSpan */}
      <div className="grid grid-cols-3 gap-6 p-16 pt-8">
        <Card className="col-span-1">
          <Total />
        </Card>
        <Card className="col-span-1">
          <TopExpense />
        </Card>
        <Card className="col-span-1"></Card>
        <Card className="col-span-1"></Card>
        <Card className="col-span-2"></Card>
      </div>
    </div>
  );
}
