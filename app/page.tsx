"use client";
import {
  SidebarInset,
  SidebarProvider,
} from "@/components/ui/sidebar";

import { AppSidebar } from "@/components/dashboard/app-sidebar";

import { TopNavbar } from "@/components/dashboard/top-navbar";

import { PerformanceChart } from "@/components/dashboard/performance-chart";

import { AIInsights } from "@/components/dashboard/ai-insights";

import { ActivityFeed } from "@/components/dashboard/activity-feed";

import {
  Target,
  TriangleAlert,
  Users,
  BrainCircuit,
} from "lucide-react";

import { motion } from "framer-motion";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

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

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <Card className="rounded-2xl border-none bg-gradient-to-br from-blue-500 to-cyan-500 text-white shadow-xl">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-sm font-medium text-white/80">
                      Goal Completion
                    </CardTitle>

                    <Target className="h-5 w-5" />
                  </CardHeader>

                  <CardContent>
                    <div className="text-4xl font-black">
                      82%
                    </div>

                    <p className="mt-2 text-sm text-white/80">
                      +12% from last month
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <Card className="rounded-2xl border-none bg-gradient-to-br from-red-500 to-orange-500 text-white shadow-xl">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-sm font-medium text-white/80">
                      At-Risk Goals
                    </CardTitle>

                    <TriangleAlert className="h-5 w-5" />
                  </CardHeader>

                  <CardContent>
                    <div className="text-4xl font-black">
                      14
                    </div>

                    <p className="mt-2 text-sm text-white/80">
                      3 critical alerts
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <Card className="rounded-2xl border-none bg-gradient-to-br from-emerald-500 to-green-600 text-white shadow-xl">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-sm font-medium text-white/80">
                      Employees
                    </CardTitle>

                    <Users className="h-5 w-5" />
                  </CardHeader>

                  <CardContent>
                    <div className="text-4xl font-black">
                      248
                    </div>

                    <p className="mt-2 text-sm text-white/80">
                      +24 new this quarter
                    </p>
                  </CardContent>
                </Card>
              </motion.div>

              <motion.div
                whileHover={{
                  scale: 1.03,
                }}
                transition={{
                  duration: 0.2,
                }}
              >
                <Card className="rounded-2xl border-none bg-gradient-to-br from-violet-500 to-purple-600 text-white shadow-xl">
                  <CardHeader className="flex flex-row items-center justify-between">
                    <CardTitle className="text-sm font-medium text-white/80">
                      AI Alerts
                    </CardTitle>

                    <BrainCircuit className="h-5 w-5" />
                  </CardHeader>

                  <CardContent>
                    <div className="text-4xl font-black">
                      7
                    </div>

                    <p className="mt-2 text-sm text-white/80">
                      AI-generated insights
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </div>

            <PerformanceChart />

            <AIInsights />

            <ActivityFeed />
          </div>
        </main>
      </SidebarInset>
    </SidebarProvider>
  );
}