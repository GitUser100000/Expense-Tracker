import { Card } from "@/components/ui/card";
import { TrendingUp } from "lucide-react";
import ContentCard from "../ContentCard";

export default function Total() {
  return (
    <ContentCard title="Total">
      <div className="flex flex-col gap-6 py-6">
        <h1 className="text-3xl text-center pb-5 font-semibold flex-2">$900</h1>
        <Card className="flex-row justify-center items-center primary">
          <span className="w-fit">
            <TrendingUp />
          </span>
          <h3 className="w-fit">15%</h3>
          <span /> {/* spacer */}
        </Card>
        <span className="w-full text-center">Last Year: $800.00</span>
      </div>
    </ContentCard>
  );
}
