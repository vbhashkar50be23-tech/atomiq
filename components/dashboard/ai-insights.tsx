"use client";

import {
  BrainCircuit,
  TriangleAlert,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  useEffect,
  useState,
} from "react";

type Insight = {
  title: string;
  severity: string;
  description: string;
};

export function AIInsights() {
  const [insights, setInsights] =
    useState<Insight[]>([]);

  const [loading, setLoading] =
    useState(true);

  useEffect(() => {
    async function fetchInsights() {
      try {
        const response = await fetch(
          "/api/ai/insights"
        );

        const data =
          await response.json();

        setInsights(data.insights);
      } catch (error) {
        console.log(error);
      } finally {
        setLoading(false);
      }
    }

    fetchInsights();
  }, []);

  return (
    <Card className="rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl dark:bg-white/5">
      <CardHeader className="flex flex-row items-center justify-between">
        <div className="flex items-center gap-3">
          <BrainCircuit className="h-6 w-6 text-primary" />

          <CardTitle>
            AI Insights Engine
          </CardTitle>
        </div>

        <span className="rounded-full bg-blue-500/20 px-3 py-1 text-xs text-blue-400">
          Live AI
        </span>
      </CardHeader>

      <CardContent className="space-y-4">
        {loading ? (
          <p className="text-sm text-muted-foreground">
            Loading AI insights...
          </p>
        ) : (
          insights.map((insight) => (
            <div
              key={insight.title}
              className="rounded-xl border p-4"
            >
              <div className="mb-2 flex items-center justify-between">
                <h3 className="font-semibold">
                  {insight.title}
                </h3>

                <div className="flex items-center gap-2 text-sm text-yellow-500">
                  <TriangleAlert className="h-4 w-4" />

                  {insight.severity}
                </div>
              </div>

              <p className="text-sm text-muted-foreground">
                {insight.description}
              </p>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}