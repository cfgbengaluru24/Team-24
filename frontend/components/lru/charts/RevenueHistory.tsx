"use client";
import { useQuery } from "@tanstack/react-query";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Tooltip,
  Label,
  CartesianGrid,
  AreaChart,
  Area,
  Line,
} from "recharts";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

import { toast } from "sonner";
import { fetchRevHistory } from "@/lib/data"

interface Data {
  month: string;
  year: number;
  count: number;
}

export default function RevHistStats() {
  const { isPending, error, data } = useQuery<Data[]>({
    queryKey: ["rev_history_stats"],
    queryFn: async () => {
        const data= await fetchRevHistory();
        return (data as Data).labourers;
    }
  });

  if (isPending) {
    // toast.info("Loading...");
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Revenue Timeline</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="w-full h-">
          <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={data} width={600} height={400}>
              <defs>
                <linearGradient id="valueColour" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#ef4444" stopOpacity={0.8} />
                  <stop offset="95%" stopColor="#ef4444" stopOpacity={0} />
                </linearGradient>
              </defs>
              {/* <CartesianGrid /> */}
              <XAxis dataKey="month" name="month" />
              <YAxis dataKey="count" name="count" />
              <Tooltip />
              <Area
                dataKey={"count"}
                stroke="#ef4444"
                name="revenue"
                fillOpacity={1}
                fill="url(#valueColour)"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>
      </CardContent>
    </Card>
  );
}