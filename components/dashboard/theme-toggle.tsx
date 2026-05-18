"use client";

import { useEffect, useState } from "react";

import { Moon, Sun } from "lucide-react";

import { useTheme } from "next-themes";

export function ThemeToggle() {
  const { theme, setTheme } = useTheme();

  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <button
      onClick={() =>
        setTheme(theme === "dark" ? "light" : "dark")
      }
      className="rounded-xl border p-2 hover:bg-accent"
    >
      {theme === "dark" ? (
        <Sun className="h-5 w-5" />
      ) : (
        <Moon className="h-5 w-5" />
      )}
    </button>
  );
}