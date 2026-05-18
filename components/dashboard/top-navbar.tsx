"use client";

import {
  Bell,
  Search,
} from "lucide-react";

import { useRouter } from "next/navigation";

import { Input } from "@/components/ui/input";

import {
  Avatar,
  AvatarFallback,
} from "@/components/ui/avatar";

import { ThemeToggle } from "@/components/dashboard/theme-toggle";

export function TopNavbar() {
  const router = useRouter();

  async function handleLogout() {
    await fetch(
      "/api/auth/logout",
      {
        method: "POST",
      }
    );

    router.push("/login");
  }

  return (
    <header className="flex items-center justify-between border-b bg-background px-6 py-4">
      <div className="flex items-center gap-4">
        <div className="relative w-[320px]">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />

          <Input
            placeholder="Search goals, teams, analytics..."
            className="pl-10"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="rounded-xl border p-2 hover:bg-accent">
          <Bell className="h-5 w-5" />
        </button>

        <ThemeToggle />

        <button
          onClick={handleLogout}
          className="rounded-xl bg-red-500 px-4 py-2 text-sm font-semibold text-white transition hover:bg-red-600"
        >
          Logout
        </button>

        <Avatar>
          <AvatarFallback>
            VK
          </AvatarFallback>
        </Avatar>
      </div>
    </header>
  );
}