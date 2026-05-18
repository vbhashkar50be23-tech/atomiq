import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/dashboard/app-sidebar";

import { TopNavbar } from "@/components/dashboard/top-navbar";

import { PerformanceChart } from "@/components/dashboard/performance-chart";

import { AIInsights } from "@/components/dashboard/ai-insights";

import { ActivityFeed } from "@/components/dashboard/activity-feed";

import { ExecutiveSummary } from "@/components/dashboard/executive-summary";

import { GoalsList } from "@/components/dashboard/goals-list";

import { RiskCenter } from "@/components/dashboard/risk-center";

import { AnalyticsCards } from "@/components/dashboard/analytics-cards";

import { CreateGoal } from "@/components/dashboard/create-goal";

export default function DashboardPage() {
  return (
    <SidebarProvider>
      <AppSidebar />

      <SidebarInset>
        <TopNavbar />

        <main className="min-h-screen bg-gradient-to-br from-background via-background to-muted/30 p-6">
          <div className="space-y-8">
            <div className="flex items-center justify-between">
              <div>
                <h1 className="text-4xl font-bold tracking-tight">
                  Executive Dashboard
                </h1>

                <p className="text-muted-foreground">
                  AI-Powered Organizational Intelligence
                </p>
              </div>
            </div>

            <AnalyticsCards />

            <PerformanceChart />

            <div className="grid gap-6 xl:grid-cols-2">
              <AIInsights />

              <ActivityFeed />
            </div>

            <ExecutiveSummary />

            <CreateGoal />

            <GoalsList />

            <RiskCenter />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}