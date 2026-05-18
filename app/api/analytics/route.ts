import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const goals =
      await prisma.goal.findMany();

    const totalGoals =
      goals.length;

    const completedGoals =
      goals.filter(
        (goal) =>
          goal.progress >= 80
      ).length;

    const atRiskGoals =
      goals.filter(
        (goal) =>
          goal.progress < 60
      ).length;

    const averageProgress =
      totalGoals > 0
        ? Math.round(
            goals.reduce(
              (acc, goal) =>
                acc + goal.progress,
              0
            ) / totalGoals
          )
        : 0;

    return NextResponse.json({
      success: true,
      analytics: {
        totalGoals,
        completedGoals,
        atRiskGoals,
        averageProgress,
      },
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error:
          "Failed to load analytics",
      },
      {
        status: 500,
      }
    );
  }
}