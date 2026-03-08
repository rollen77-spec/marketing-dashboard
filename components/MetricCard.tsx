"use client";

import { TrendingUp, TrendingDown, Minus } from "lucide-react";
import type { MetricSummary } from "@/lib/sites-data";

interface MetricCardProps {
  metric: MetricSummary;
}

export default function MetricCard({ metric }: MetricCardProps) {
  const { label, value, change, trend, subtitle } = metric;
  const showChange = change !== undefined && trend !== undefined;

  return (
    <div className="rounded-xl border border-gray-100 bg-white p-4 shadow-sm transition-shadow hover:shadow-md">
      <p className="text-sm font-medium text-gray-500">{label}</p>
      <p className="mt-1 font-heading text-2xl font-semibold text-brand-charcoal">
        {value}
      </p>
      {subtitle && (
        <p className="mt-0.5 text-xs text-gray-400">{subtitle}</p>
      )}
      {showChange && (
        <div className="mt-2 flex items-center gap-1">
          {trend === "up" && (
            <TrendingUp className="h-4 w-4 text-emerald-500" aria-hidden />
          )}
          {trend === "down" && (
            <TrendingDown className="h-4 w-4 text-rose-500" aria-hidden />
          )}
          {trend === "neutral" && (
            <Minus className="h-4 w-4 text-gray-400" aria-hidden />
          )}
          <span
            className={`text-sm font-medium ${
              trend === "up"
                ? "text-emerald-600"
                : trend === "down"
                  ? "text-rose-600"
                  : "text-gray-500"
            }`}
          >
            {change > 0 ? "+" : ""}
            {change}%
          </span>
          <span className="text-xs text-gray-400">vs prior period</span>
        </div>
      )}
    </div>
  );
}
