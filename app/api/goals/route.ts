import { NextResponse } from "next/server";

import { prisma } from "@/lib/prisma";

export async function GET() {
  try {
    const goals =
      await prisma.goal.findMany({
        orderBy: {
          createdAt: "desc",
        },
      });

    return NextResponse.json({
      success: true,
      goals,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error: "Failed to fetch goals",
      },
      {
        status: 500,
      }
    );
  }
}

export async function POST(
  req: Request
) {
  try {
    const body = await req.json();

    const {
      title,
      description,
      status,
      progress,
      department,
    } = body;

    const goal =
      await prisma.goal.create({
        data: {
          title,
          description,
          status,
          progress,
          department,
        },
      });

    return NextResponse.json({
      success: true,
      goal,
    });
  } catch (error) {
    console.log(error);

    return NextResponse.json(
      {
        error: "Failed to create goal",
      },
      {
        status: 500,
      }
    );
  }
}