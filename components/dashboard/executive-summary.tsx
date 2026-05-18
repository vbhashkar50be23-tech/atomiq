"use client";

import { useEffect, useState } from "react";

import {
  BrainCircuit,
  Sparkles,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function ExecutiveSummary() {
  const [summary, setSummary] =
    useState("");

  const [loading, setLoading] =
    useState(true);

  async function fetchSummary() {
    try {
      const response = await fetch(
        "/api/ai/executive-summary"
      );

      const data =
        await response.json();

      setSummary(data.summary);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchSummary();
  }, []);

  return (
    <Card className="rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
      <CardHeader className="flex flex-row items-center gap-3">
        <BrainCircuit className="h-6 w-6 text-primary" />

        <CardTitle>
          Executive AI Summary
        </CardTitle>
      </CardHeader>

      <CardContent>
        {loading ? (
          <div className="flex items-center gap-2 text-muted-foreground">
            <Sparkles className="h-4 w-4 animate-pulse" />

            Generating executive insights...
          </div>
        ) : (
          <div className="whitespace-pre-line text-sm leading-7 text-muted-foreground">
            {summary}
          </div>
        )}
      </CardContent>
    </Card>
  );
}