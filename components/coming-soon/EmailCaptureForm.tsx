"use client";

import { useState, useEffect } from "react";

type ToastState = {
  message: string;
  variant: "success" | "destructive";
} | null;

export default function EmailCaptureForm() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [toast, setToast] = useState<ToastState>(null);
  const [loading, setLoading] = useState(false);

  // Auto-dismiss toast after 3 seconds
  useEffect(() => {
    if (!toast) return;
    const timer = setTimeout(() => setToast(null), 3000);
    return () => clearTimeout(timer);
  }, [toast]);

  function validate(): boolean {
    if (!email.trim()) {
      setError("Please enter your email address.");
      return false;
    }
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      setError("Please enter a valid email address.");
      return false;
    }
    setError("");
    return true;
  }

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (!validate()) return;

    setLoading(true);
    try {
      const res = await fetch("/api/subscribe", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      if (!res.ok) throw new Error("Subscription failed");

      setEmail("");
      setToast({ message: "You're on the list!", variant: "success" });
    } catch {
      setToast({
        message: "Something went wrong. Please try again.",
        variant: "destructive",
      });
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="w-full max-w-2xl px-8">
      <form
        onSubmit={handleSubmit}
        noValidate
        aria-label="Email notification sign-up"
        className="flex flex-col gap-2 sm:flex-row"
      >
        <div className="flex flex-col gap-1 flex-1">
          <input
            type="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              if (error) setError("");
            }}
            placeholder="Enter your email address"
            aria-label="Email address"
            aria-describedby={error ? "email-error" : undefined}
            aria-invalid={!!error}
            className="h-14 rounded-lg border border-border bg-card px-4 text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary w-full"
          />
          {error && (
            <p id="email-error" role="alert" className="text-destructive text-sm">
              {error}
            </p>
          )}
        </div>

        <button
          type="submit"
          disabled={loading}
          className="btn-hero shrink-0 disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {loading ? "Submitting…" : "Notify Me"}
        </button>
      </form>

      {/* Toast notification */}
      {toast && (
        <div
          role="status"
          aria-live="polite"
          className={`fixed bottom-6 left-1/2 -translate-x-1/2 z-50 px-6 py-3 rounded-lg shadow-elegant text-white text-sm font-medium transition-opacity duration-300 ${
            toast.variant === "destructive"
              ? "bg-destructive"
              : "bg-gradient-primary"
          }`}
        >
          {toast.message}
        </div>
      )}
    </div>
  );
}
