"use client";

import {
  Line,
  LineChart,
  CartesianGrid,
  XAxis,
} from "recharts";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { month: "Jan", performance: 62 },
  { month: "Feb", performance: 71 },
  { month: "Mar", performance: 68 },
  { month: "Apr", performance: 80 },
  { month: "May", performance: 86 },
  { month: "Jun", performance: 91 },
];

export function PerformanceChart() {
  return (
    <Card className="rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl dark:bg-white/5">
      <CardHeader>
        <CardTitle>
          Organizational Performance
        </CardTitle>
      </CardHeader>

      <CardContent>
        <ChartContainer
          config={{
            performance: {
              label: "Performance",
              color: "#000000",
            },
          }}
          className="h-[300px] w-full"
        >
          <LineChart data={chartData}>
            <CartesianGrid vertical={false} />

            <XAxis
              dataKey="month"
              tickLine={false}
              axisLine={false}
            />

            <ChartTooltip
              content={<ChartTooltipContent />}
            />

            <Line
              type="monotone"
              dataKey="performance"
              stroke="black"
              strokeWidth={3}
              dot
            />
          </LineChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
}