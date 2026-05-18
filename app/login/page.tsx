"use client";

import { useState } from "react";

import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();

  const [email, setEmail] =
    useState("");

  const [password, setPassword] =
    useState("");

  const [loading, setLoading] =
    useState(false);

  async function handleLogin(
    e: React.FormEvent
  ) {
    e.preventDefault();

    setLoading(true);

    try {
      const response = await fetch(
        "/api/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type":
              "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data =
        await response.json();

      if (!response.ok) {
        alert(data.error);
        return;
      }

      alert("Login successful");

      router.push("/dashboard");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="flex min-h-screen items-center justify-center bg-black p-6 text-white">
      <div className="w-full max-w-md rounded-3xl border border-white/10 bg-white/5 p-8 backdrop-blur-xl">
        <h1 className="mb-2 text-4xl font-bold">
          Welcome Back
        </h1>

        <p className="mb-8 text-white/60">
          Login to continue to ATOMIQ
        </p>

        <form
          onSubmit={handleLogin}
          className="space-y-5"
        >
          <input
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) =>
              setEmail(e.target.value)
            }
            className="w-full rounded-2xl border border-white/10 bg-black/40 p-4 outline-none"
          />

          <input
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) =>
              setPassword(
                e.target.value
              )
            }
            className="w-full rounded-2xl border border-white/10 bg-black/40 p-4 outline-none"
          />

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-2xl bg-blue-500 p-4 font-semibold transition hover:bg-blue-600"
          >
            {loading
              ? "Authenticating..."
              : "Login"}
          </button>
        </form>
      </div>
    </main>
  );
}