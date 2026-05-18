"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import {
  Badge,
} from "@/components/ui/badge";

type Goal = {
  id: string;
  title: string;
  description: string;
  status: string;
  progress: number;
  department: string;
};

export function GoalsList() {
  const [goals, setGoals] =
    useState<Goal[]>([]);

  const [loading, setLoading] =
    useState(true);

  async function fetchGoals() {
    try {
      const response = await fetch(
        "/api/goals"
      );

      const data =
        await response.json();

      setGoals(data.goals);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchGoals();
  }, []);

  return (
    <Card className="rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
      <CardHeader>
        <CardTitle>
          Organizational Goals
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {loading ? (
          <p className="text-sm text-muted-foreground">
            Loading goals...
          </p>
        ) : goals.length === 0 ? (
          <p className="text-sm text-muted-foreground">
            No goals found.
          </p>
        ) : (
          goals.map((goal) => (
            <div
              key={goal.id}
              className="rounded-2xl border border-white/10 p-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                  {goal.title}
                </h3>

                <Badge>
                  {goal.status}
                </Badge>
              </div>

              <p className="mb-4 text-sm text-muted-foreground">
                {goal.description}
              </p>

              <div className="mb-2 flex items-center justify-between text-sm">
                <span>
                  {goal.department}
                </span>

                <span>
                  {goal.progress}%
                </span>
              </div>

              <div className="h-3 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-blue-500"
                  style={{
                    width: `${goal.progress}%`,
                  }}
                />
              </div>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}