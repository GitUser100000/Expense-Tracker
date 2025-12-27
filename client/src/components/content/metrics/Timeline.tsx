import { CartesianGrid, Line, LineChart, XAxis, YAxis } from "recharts";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
  type ChartConfig,
} from "@/components/ui/chart";
import { useDataContext } from "@/context/data/DataContext";
import { normalisePriceOffCadence } from "@/helpers/costHelper";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];

const chartConfig = {
  spending: {
    label: "Spending",
    color: "var(--chart-1)",
  },
} satisfies ChartConfig;

export default function Timeline() {
  const { data: { expenses } } = useDataContext();
  const currentYear = new Date().getFullYear();

  const chartData = months.map((month, index) => {
    const monthExpenses = expenses.filter(e => {
      const chargeDate = new Date(e.nextChargeDate);
      return chargeDate.getFullYear() === currentYear && chargeDate.getMonth() <= index;
    });
    
    const spending = monthExpenses.reduce((sum, e) => 
      sum + Number(normalisePriceOffCadence(e, "MONTHLY")), 0
    );
    
    return { month, spending: Number(spending.toFixed(2)) };
  });

  return (
    <Card className="col-span-2 h-full">
      <CardHeader>
        <CardTitle className="ml-0 pl-2 text-2xl font-sem">Timeline</CardTitle>
        <CardDescription className="pl-2">Projected monthly spending - {currentYear}</CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig} className="aspect-21/7 w-full">
          <LineChart
            accessibilityLayer
            data={chartData}
            margin={{
              left: 12,
              right: 12,
            }}
          >
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => value.slice(0, 3)}
            />
            <YAxis 
              tickLine={false}
              axisLine={false}
              tickFormatter={(value) => `$${value}`}
            />
            <ChartTooltip
              cursor={false}
              content={<ChartTooltipContent hideLabel formatter={(value) => `$${value}`} />}
            />
            <Line
              dataKey="spending"
              type="monotone"
              stroke="var(--color-spending)"
              strokeWidth={2}
              dot={true}
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}
