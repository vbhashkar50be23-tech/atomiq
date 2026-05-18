"use client";

import {
  useEffect,
  useState,
} from "react";

import {
  AlertTriangle,
  ShieldAlert,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

type Risk = {
  id: string;
  title: string;
  department: string;
  progress: number;
  riskLevel: string;
  prediction: string;
};

export function RiskCenter() {
  const [risks, setRisks] =
    useState<Risk[]>([]);

  const [loading, setLoading] =
    useState(true);

  async function fetchRisks() {
    try {
      const response = await fetch(
        "/api/ai/risk-analysis"
      );

      const data =
        await response.json();

      setRisks(data.risks);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchRisks();
  }, []);

  return (
    <Card className="rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
      <CardHeader className="flex flex-row items-center gap-3">
        <ShieldAlert className="h-6 w-6 text-red-500" />

        <CardTitle>
          AI Risk Center
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {loading ? (
          <p className="text-sm text-muted-foreground">
            Running predictive AI analysis...
          </p>
        ) : (
          risks.map((risk) => (
            <div
              key={risk.id}
              className="rounded-2xl border border-white/10 p-5"
            >
              <div className="mb-3 flex items-center justify-between">
                <div>
                  <h3 className="font-semibold">
                    {risk.title}
                  </h3>

                  <p className="text-xs text-muted-foreground">
                    {
                      risk.department
                    }
                  </p>
                </div>

                <div className="flex items-center gap-2 rounded-full bg-red-500/10 px-3 py-1 text-sm text-red-400">
                  <AlertTriangle className="h-4 w-4" />

                  {risk.riskLevel}
                </div>
              </div>

              <p className="mb-3 text-sm text-muted-foreground">
                {risk.prediction}
              </p>

              <div className="h-3 overflow-hidden rounded-full bg-muted">
                <div
                  className="h-full rounded-full bg-red-500"
                  style={{
                    width: `${risk.progress}%`,
                  }}
                />
              </div>

              <p className="mt-2 text-right text-xs text-muted-foreground">
                Progress:
                {" "}
                {risk.progress}%
              </p>
            </div>
          ))
        )}
      </CardContent>
    </Card>
  );
}