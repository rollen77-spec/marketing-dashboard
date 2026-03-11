"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  CartesianGrid,
} from "recharts";
import type { TimeSeriesPoint } from "@/lib/sites-data";

interface ChannelChartProps {
  data: TimeSeriesPoint[];
  dataKey?: string;
  color?: string;
}

export default function ChannelChart({
  data,
  dataKey = "value",
  color,
}: ChannelChartProps) {
  const barColor = color ?? "var(--chart-1)";
  return (
    <div className="h-[200px] w-full">
      <ResponsiveContainer width="100%" height="100%">
        <BarChart
          data={data}
          margin={{ top: 8, right: 8, left: 0, bottom: 0 }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="var(--border)" />
          <XAxis
            dataKey="date"
            tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
            axisLine={{ stroke: "var(--border)" }}
          />
          <YAxis
            tick={{ fontSize: 12, fill: "var(--muted-foreground)" }}
            axisLine={false}
            tickLine={false}
          />
          <Tooltip
            contentStyle={{
              borderRadius: "var(--radius)",
              border: "1px solid var(--border)",
              backgroundColor: "var(--card)",
              color: "var(--card-foreground)",
              fontFamily: "var(--font-sans), sans-serif",
            }}
            formatter={(value: number) => [value.toLocaleString(), "Value"]}
          />
          <Bar
            dataKey={dataKey}
            fill={barColor}
            radius={[4, 4, 0, 0]}
            name="Value"
          />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
