"use client";

import { TrendingUp } from "lucide-react";
import { PolarAngleAxis, PolarGrid, Radar, RadarChart } from "recharts";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  ChartConfig,
  ChartContainer,
  ChartTooltip,
  ChartTooltipContent,
} from "@/components/ui/chart";

const chartData = [
  { revenue: "Biomass", desktop: 186 },
  { revenue: "Elephants", desktop: 305 },
  { revenue: "Artifacts", desktop: 237 },
];

const chartConfig = {
  desktop: {
    label: "Desktop",
    color: "#c1c1c170",
  },
} satisfies ChartConfig;

const MarketplaceChart = () => {
  return (
    <Card className="mt-5">
      <CardHeader className="items-center">
        <CardTitle>Monthly Insights</CardTitle>
        <CardDescription>Revenue Collected</CardDescription>
      </CardHeader>
      <CardContent className="pb-0">
        <ChartContainer
          config={chartConfig}
          className="mx-auto aspect-square max-h-[500px] w-96">
          <RadarChart data={chartData}>
            <ChartTooltip cursor={false} content={<ChartTooltipContent />} />
            <PolarAngleAxis dataKey="revenue" />
            <PolarGrid />
            <Radar
              dataKey="desktop"
              fill="var(--color-desktop)"
              fillOpacity={0.6}
              dot={{
                r: 4,
                fillOpacity: 1,
              }}
            />
          </RadarChart>
        </ChartContainer>
      </CardContent>
    </Card>
  );
};

export default MarketplaceChart;
