import React from "react";
import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  CardDescription,
} from "../ui/card";

import { Button } from "../ui/button";
import { ArrowUpRight, Link } from "lucide-react";
import LineChart_Goals from "./LineChart_Goals";
import { ChartContainer } from "@/components//ui/chart";
import { Bar, BarChart, LabelList, XAxis, YAxis } from "recharts";

const GoalCard = () => {
  return (
    <>
      <Card className="xl:col-span-2" x-chunk="dashboard-01-chunk-4">
        <CardHeader className="flex flex-row items-center">
          <div className="grid gap-2">
            <CardTitle>Goals</CardTitle>
          </div>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-2">
            <Card className="max-w-xs" x-chunk="charts-01-chunk-6">
              <CardHeader className="p-4 pb-0">
                <CardTitle>Lantana Removal Units</CardTitle>
                <CardDescription>
                  You're burning an average of 754 Lantana per day. Good job!
                </CardDescription>
              </CardHeader>
              <CardContent className="flex flex-row items-baseline gap-4 p-4 pt-2">
                <div className="flex items-baseline gap-2 text-3xl font-bold tabular-nums leading-none">
                  15
                </div>
              </CardContent>
            </Card>
            <Card className="max-w-xs" x-chunk="charts-01-chunk-6">
              <CardHeader className="p-4 pb-0">
                <CardTitle>ManPower</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent className="flex flex-row items-baseline gap-4 p-4 pt-2">
                <div className="flex items-baseline gap-2 text-3xl font-bold tabular-nums leading-none">
                  20,000
                </div>
              </CardContent>
            </Card>
            <Card className="max-w-xs" x-chunk="charts-01-chunk-6">
              <CardHeader className="p-4 pb-0">
                <CardTitle>Lantana Removal</CardTitle>
                <CardDescription></CardDescription>
              </CardHeader>
              <CardContent className="flex flex-col items-baseline gap-4 p-4 pt-2">
                <div className="flex items-baseline gap-2 text-3xl font-bold tabular-nums leading-none">
                  15
                </div>
                <div className="h-[80px]">
                  <LineChart_Goals></LineChart_Goals>
                </div>
              </CardContent>
            </Card>
            <Card className="max-w-xs" x-chunk="charts-01-chunk-2">
              <CardHeader>
                <CardTitle>Progress</CardTitle>
                <CardDescription>
                  Average Lantana removal comparing to previous year
                </CardDescription>
              </CardHeader>
              <CardContent className="grid gap-4">
                <div className="grid auto-rows-min gap-2">
                  <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                    120
                    <span className="text-sm font-normal text-muted-foreground">
                      kg/day
                    </span>
                  </div>
                  <ChartContainer
                    config={{
                      steps: {
                        label: "Steps",
                        color: "#544caf", // Green color
                      },
                    }}
                    className="aspect-auto h-[32px] w-full">
                    <BarChart
                      accessibilityLayer
                      layout="vertical"
                      margin={{
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                      }}
                      data={[
                        {
                          date: "2024",
                          steps: 12400,
                        },
                      ]}>
                      <Bar
                        dataKey="steps"
                        fill="var(--color-steps)"
                        radius={4}
                        barSize={32}>
                        <LabelList
                          position="insideLeft"
                          dataKey="date"
                          offset={8}
                          fontSize={12}
                          fill="white"
                        />
                      </Bar>
                      <YAxis
                        dataKey="date"
                        type="category"
                        tickCount={1}
                        hide
                      />
                      <XAxis dataKey="steps" type="number" hide />
                    </BarChart>
                  </ChartContainer>
                </div>
                <div className="grid auto-rows-min gap-2">
                  <div className="flex items-baseline gap-1 text-2xl font-bold tabular-nums leading-none">
                    101
                    <span className="text-sm font-normal text-muted-foreground">
                      kg/day
                    </span>
                  </div>
                  <ChartContainer
                    config={{
                      steps: {
                        label: "Steps",
                        color: "hsl(var(--muted))",
                      },
                    }}
                    className="aspect-auto h-[32px] w-full">
                    <BarChart
                      accessibilityLayer
                      layout="vertical"
                      margin={{
                        left: 0,
                        top: 0,
                        right: 0,
                        bottom: 0,
                      }}
                      data={[
                        {
                          date: "2023",
                          steps: 101,
                        },
                      ]}>
                      <Bar
                        dataKey="steps"
                        fill="var(--color-steps)"
                        radius={4}
                        barSize={32}>
                        <LabelList
                          position="insideLeft"
                          dataKey="date"
                          offset={8}
                          fontSize={12}
                          fill="hsl(var(--muted-foreground))"
                        />
                      </Bar>
                      <YAxis
                        dataKey="date"
                        type="category"
                        tickCount={1}
                        hide
                      />
                      <XAxis dataKey="steps" type="number" hide />
                    </BarChart>
                  </ChartContainer>
                </div>
              </CardContent>
            </Card>
          </div>
        </CardContent>
      </Card>
    </>
  );
};

export default GoalCard;
