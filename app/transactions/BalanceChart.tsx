"use client";

import { useMemo } from "react";
import { TrendingUp } from "lucide-react";
import { Bar, BarChart, CartesianGrid, XAxis, YAxis, Cell } from "recharts";
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

interface Transaction {
  id: number;
  date: string;
  description: string;
  category: string;
  amount: number;
  type: "debit" | "credit";
}

interface BalanceChartProps {
  transactions: Transaction[];
  startingBalance: number;
}

const chartConfig = {
  balance: {
    label: "Balance",
    color: "hsl(var(--chart-1))",
  },
  negative: {
    label: "Negative Balance",
    color: "hsl(0 84.2% 60.2%)", // Red color for negative
  },
} satisfies ChartConfig;

export default function BalanceChart({
  transactions,
  startingBalance,
}: BalanceChartProps) {
  const dailyData = useMemo(() => {
    // Sort transactions by date (oldest first)
    const sortedTransactions = [...transactions].sort(
      (a, b) => new Date(a.date).getTime() - new Date(b.date).getTime()
    );

    if (sortedTransactions.length === 0) {
      return [];
    }

    // Group transactions by day
    const dayMap = new Map<
      string,
      { balance: number; date: string; fullDate: string }
    >();
    let runningBalance = startingBalance;

    sortedTransactions.forEach((transaction) => {
      // Apply transaction to running balance
      if (transaction.type === "credit") {
        runningBalance += transaction.amount;
      } else {
        runningBalance -= transaction.amount;
      }

      // Format date for display
      const date = new Date(transaction.date);
      const dateKey = transaction.date;
      const dateLabel = `${date.getDate()} ${date.toLocaleString("default", {
        month: "short",
      })}`;
      const fullDateLabel = date.toLocaleDateString("en-GB", {
        day: "2-digit",
        month: "long",
        year: "numeric",
      });

      // Update or set the day's ending balance
      dayMap.set(dateKey, {
        balance: Math.round(runningBalance * 100) / 100,
        date: dateLabel,
        fullDate: fullDateLabel,
      });
    });

    // Convert to array and sort by date
    return Array.from(dayMap.entries())
      .sort(([a], [b]) => a.localeCompare(b))
      .map(([_, data]) => data);
  }, [transactions, startingBalance]);

  // Calculate trend
  const firstBalance = dailyData[0]?.balance || startingBalance;
  const lastBalance =
    dailyData[dailyData.length - 1]?.balance || startingBalance;
  const trend =
    firstBalance !== 0
      ? (((lastBalance - firstBalance) / firstBalance) * 100).toFixed(1)
      : "0.0";
  const trendDirection = parseFloat(trend) >= 0 ? "up" : "down";

  if (dailyData.length === 0) {
    return null;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Balance Overview</CardTitle>
        <CardDescription>
          Daily balance snapshot over the last {dailyData.length} days
        </CardDescription>
      </CardHeader>
      <CardContent>
        <ChartContainer config={chartConfig}>
          <BarChart accessibilityLayer data={dailyData}>
            <CartesianGrid vertical={false} />
            <XAxis
              dataKey="date"
              tickLine={false}
              tickMargin={10}
              axisLine={false}
              tickFormatter={(value) => {
                // Show fewer labels on mobile/small screens
                return value;
              }}
            />
            <YAxis
              tickLine={false}
              axisLine={false}
              tickMargin={8}
              tickFormatter={(value) => `£${value}`}
            />
            <ChartTooltip
              cursor={false}
              content={
                <ChartTooltipContent
                  labelFormatter={(_, payload) => {
                    if (payload && payload[0]) {
                      return payload[0].payload.fullDate;
                    }
                    return "";
                  }}
                  formatter={(value) => [
                    `£${Number(value).toFixed(2)}`,
                    "Balance",
                  ]}
                />
              }
            />
            <Bar dataKey="balance" radius={8}>
              {dailyData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={
                    entry.balance < 0
                      ? "hsl(0 84.2% 60.2%)"
                      : "var(--color-balance)"
                  }
                />
              ))}
            </Bar>
          </BarChart>
        </ChartContainer>
      </CardContent>
      <CardFooter className="flex-col items-start gap-2 text-sm">
        <div className="flex gap-2 font-medium leading-none">
          {trendDirection === "up" ? "Trending up" : "Trending down"} by{" "}
          {Math.abs(parseFloat(trend))}% over the period{" "}
          <TrendingUp className="h-4 w-4" />
        </div>
        <div className="leading-none text-muted-foreground">
          Starting balance: £{firstBalance.toFixed(2)} → Current balance: £
          {lastBalance.toFixed(2)}
        </div>
      </CardFooter>
    </Card>
  );
}
