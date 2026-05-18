import { NextResponse } from "next/server";

export async function GET() {
  try {
    const insights = [
      {
        title:
          "Engineering Team Burnout Risk",
        severity: "high",
        description:
          "AI detected abnormal workload patterns and deadline pressure across Engineering teams.",
      },

      {
        title:
          "Goal Completion Improvement",
        severity: "medium",
        description:
          "Sales department productivity increased 14% compared to last quarter.",
      },

      {
        title:
          "Attrition Probability Alert",
        severity: "critical",
        description:
          "3 employees show elevated disengagement and resignation indicators.",
      },

      {
        title:
          "Operational Efficiency",
        severity: "low",
        description:
          "Cross-functional collaboration efficiency improved by 11%.",
      },
    ];

    return NextResponse.json({
      success: true,
      insights,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error: "Internal Server Error",
      },
      {
        status: 500,
      }
    );
  }
}