"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter } from "next/navigation";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const result = await signIn("credentials", {
      email, password, redirect: false,
    });
    if (result?.error) {
      setError("Invalid email or password");
      setLoading(false);
    } else {
      router.push("/admin/dashboard");
    }
  }

  return (
    <div className="min-h-screen flex items-center justify-center bg-novu-warm-50 p-4">
      <div className="w-full max-w-sm">
        <div className="text-center mb-10">
          <h1 className="text-2xl font-semibold tracking-tight text-novu-near-black">
            Lifelect<span className="text-novu-orange">.</span>
          </h1>
          <p className="text-body-sm text-novu-near-black-55 mt-2">Admin Panel</p>
        </div>
        <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-8 shadow-sm border border-novu-warm-100 space-y-5">
          {error && (
            <div className="bg-red-50 text-red-700 text-body-sm px-4 py-3 rounded-xl">{error}</div>
          )}
          <div>
            <label className="block text-label-sm text-novu-near-black-55 mb-2 uppercase tracking-[0.1em]">Email</label>
            <input
              type="email" required value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-novu-warm-200 rounded-xl px-4 py-3 text-body text-novu-near-black focus:outline-none focus:border-novu-orange/50 transition-colors"
              placeholder="admin@lifelect.com"
            />
          </div>
          <div>
            <label className="block text-label-sm text-novu-near-black-55 mb-2 uppercase tracking-[0.1em]">Password</label>
            <input
              type="password" required value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-novu-warm-200 rounded-xl px-4 py-3 text-body text-novu-near-black focus:outline-none focus:border-novu-orange/50 transition-colors"
              placeholder="••••••••"
            />
          </div>
          <button type="submit" disabled={loading} className="btn-primary w-full">
            {loading ? "Signing in..." : "Sign In"}
          </button>
        </form>
      </div>
    </div>
  );
}
