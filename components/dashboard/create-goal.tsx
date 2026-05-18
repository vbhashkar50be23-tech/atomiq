"use client";

import {
  useState,
} from "react";

import {
  Plus,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export function CreateGoal() {
  const [title, setTitle] =
    useState("");

  const [
    description,
    setDescription,
  ] = useState("");

  const [department, setDepartment] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleCreateGoal(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "/api/goals",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            title,
            description,
            department,
            status: "In Progress",
            progress: 0,
          }),
        }
      );

      if (!response.ok) {
        alert(
          "Failed to create goal"
        );

        return;
      }

      alert(
        "Goal created successfully"
      );

      window.location.reload();
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <Card className="rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl">
      <CardHeader className="flex flex-row items-center gap-3">
        <Plus className="h-6 w-6 text-primary" />

        <CardTitle>
          Create Organizational Goal
        </CardTitle>
      </CardHeader>

      <CardContent>
        <form
          onSubmit={
            handleCreateGoal
          }
          className="space-y-4"
        >
          <input
            type="text"
            placeholder="Goal title"
            value={title}
            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }
            className="w-full rounded-2xl border border-white/10 bg-background p-4 outline-none"
            required
          />

          <textarea
            placeholder="Goal description"
            value={description}
            onChange={(e) =>
              setDescription(
                e.target.value
              )
            }
            className="min-h-[120px] w-full rounded-2xl border border-white/10 bg-background p-4 outline-none"
            required
          />

          <input
            type="text"
            placeholder="Department"
            value={department}
            onChange={(e) =>
              setDepartment(
                e.target.value
              )
            }
            className="w-full rounded-2xl border border-white/10 bg-background p-4 outline-none"
            required
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-blue-500 p-4 font-semibold text-white transition hover:bg-blue-600"
          >
            {loading
              ? "Creating Goal..."
              : "Create Goal"}
          </button>
        </form>
      </CardContent>
    </Card>
  );
}