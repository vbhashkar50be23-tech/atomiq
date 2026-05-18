import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const goals =
      await prisma.goal.findMany();

    const risks = goals.map(
      (goal) => {
        let riskLevel = "Low";

        let prediction =
          "Goal progression is healthy.";

        if (goal.progress < 40) {
          riskLevel = "Critical";

          prediction =
            "AI predicts high probability of goal failure and operational delay.";
        } else if (
          goal.progress < 60
        ) {
          riskLevel = "Medium";

          prediction =
            "AI detected moderate execution risk requiring managerial attention.";
        }

        return {
          id: goal.id,
          title: goal.title,
          department:
            goal.department,
          progress:
            goal.progress,
          riskLevel,
          prediction,
        };
      }
    );

    return NextResponse.json({
      success: true,
      risks,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error:
          "Failed to generate risk analysis",
      },
      {
        status: 500,
      }
    );
  }
}