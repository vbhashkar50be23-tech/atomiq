"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  Target,
  TriangleAlert,
  BrainCircuit,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Analytics = {
  totalGoals: number;
  completedGoals: number;
  atRiskGoals: number;
  averageProgress: number;
};

export function AnalyticsCards() {
  const [analytics, setAnalytics] =
    useState<Analytics | null>(
      null
    );

  const [loading, setLoading] =
    useState(true);

  async function fetchAnalytics() {
    try {
      const response = await fetch(
        "/api/analytics"
      );

      const data =
        await response.json();

      setAnalytics(
        data.analytics
      );
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchAnalytics();
  }, []);

  if (loading || !analytics) {
    return (
      <p className="text-sm text-muted-foreground">
        Loading analytics...
      </p>
    );
  }

  return (
    <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
      <Card className="rounded-2xl border-none bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-medium text-white/80">
            Avg Progress
          </CardTitle>

          <Target className="h-5 w-5" />
        </CardHeader>

        <CardContent>
          <div className="text-4xl font-black">
            {
              analytics.averageProgress
            }
            %
          </div>

          <p className="mt-2 text-sm text-white/80">
            Organization-wide progress
          </p>
        </CardContent>
      </Card>

      <Card className="rounded-2xl border-none bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-medium text-white/80">
            At-Risk Goals
          </CardTitle>

          <TriangleAlert className="h-5 w-5" />
        </CardHeader>

        <CardContent>
          <div className="text-4xl font-black">
            {
              analytics.atRiskGoals
            }
          </div>

          <p className="mt-2 text-sm text-white/80">
            AI-detected risks
          </p>
        </CardContent>
      </Card>

      <Card className="rounded-2xl border-none bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-medium text-white/80">
            Total Goals
          </CardTitle>

          <BrainCircuit className="h-5 w-5" />
        </CardHeader>

        <CardContent>
          <div className="text-4xl font-black">
            {
              analytics.totalGoals
            }
          </div>

          <p className="mt-2 text-sm text-white/80">
            Active organizational goals
          </p>
        </CardContent>
      </Card>

      <Card className="rounded-2xl border-none bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-xl">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="text-sm font-medium text-white/80">
            Completed
          </CardTitle>

          <Target className="h-5 w-5" />
        </CardHeader>

        <CardContent>
          <div className="text-4xl font-black">
            {
              analytics.completedGoals
            }
          </div>

          <p className="mt-2 text-sm text-white/80">
            High-performing goals
          </p>
        </CardContent>
      </Card>
    </div>
  );
}