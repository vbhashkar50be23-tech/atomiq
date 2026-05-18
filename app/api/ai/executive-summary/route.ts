import { NextResponse } from "next/server";

import {
  GoogleGenerativeAI,
} from "@google/generative-ai";

const genAI =
  new GoogleGenerativeAI(
    process.env.GEMINI_API_KEY!
  );

export async function GET() {
  try {
    const model =
      genAI.getGenerativeModel({
        model: "gemini-1.5-flash",
      });

    const result =
      await model.generateContent(`
        Generate a professional executive organizational analysis report.

        Include:
        - operational risks
        - employee wellbeing
        - productivity insights
        - strategic recommendations
        - executive summary

        Keep it concise, professional, and AI-driven.
      `);

    const response =
      await result.response;

    const text =
      response.text();

    return NextResponse.json({
      success: true,
      summary: text,
    });
  } catch (error: any) {
    console.log(error);

    return NextResponse.json(
      {
        error: error.message,
      },
      {
        status: 500,
      }
    );
  }
}