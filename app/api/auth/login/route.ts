import { NextResponse } from "next/server";

import bcrypt from "bcryptjs";

import jwt from "jsonwebtoken";

import { prisma } from "@/lib/prisma";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const {
      email,
      password,
    } = body;

    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      return NextResponse.json(
        {
          error: "User not found",
        },
        {
          status: 404,
        }
      );
    }

    const isPasswordValid =
      await bcrypt.compare(
        password,
        user.password
      );

    if (!isPasswordValid) {
      return NextResponse.json(
        {
          error: "Invalid credentials",
        },
        {
          status: 401,
        }
      );
    }

    const token = jwt.sign(
      {
        id: user.id,
        email: user.email,
        role: user.role,
      },
      "ATOMIQ_SECRET_KEY",
      {
        expiresIn: "7d",
      }
    );

    const {
      password: _,
      ...safeUser
    } = user;

    const response =
      NextResponse.json({
        success: true,
        user: safeUser,
      });

    response.cookies.set(
      "token",
      token,
      {
        httpOnly: true,
        secure: false,
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7,
      }
    );

    return response;
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