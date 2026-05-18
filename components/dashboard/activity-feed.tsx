import {
  Clock3,
  CheckCircle2,
  AlertTriangle,
} from "lucide-react";

import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const activities = [
  {
    title: "Q2 Revenue Goals Updated",
    time: "2 min ago",
    icon: CheckCircle2,
  },
  {
    title: "AI detected burnout risk",
    time: "12 min ago",
    icon: AlertTriangle,
  },
  {
    title: "Sprint velocity improved by 18%",
    time: "1 hour ago",
    icon: Clock3,
  },
];

export function ActivityFeed() {
  return (
    <Card className="rounded-3xl border border-white/10 bg-white/5 shadow-2xl backdrop-blur-xl dark:bg-white/5">
      <CardHeader>
        <CardTitle>
          Live Activity Feed
        </CardTitle>
      </CardHeader>

      <CardContent className="space-y-4">
        {activities.map((activity) => (
          <div
            key={activity.title}
            className="flex items-center justify-between rounded-xl border p-4"
          >
            <div className="flex items-center gap-3">
              <activity.icon className="h-5 w-5 text-primary" />

              <p className="font-medium">
                {activity.title}
              </p>
            </div>

            <span className="text-sm text-muted-foreground">
              {activity.time}
            </span>
          </div>
        ))}
      </CardContent>
    </Card>
  );
}