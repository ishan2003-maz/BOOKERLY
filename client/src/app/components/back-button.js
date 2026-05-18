"use client";

import { useRouter } from "next/navigation";

export default function BackButton({ fallbackHref = "/components/events", top = "24px" }) {
  const router = useRouter();

  const handleBack = () => {
    if (typeof window !== "undefined" && window.history.length > 1) {
      router.back();
      return;
    }

    router.push(fallbackHref);
  };

  return (
    <button
      type="button"
      onClick={handleBack}
      aria-label="Go back to the previous page"
      style={{
        position: "fixed",
        top,
        left: "24px",
        zIndex: 120,
        border: "none",
        borderRadius: "999px",
        padding: "0.8rem 1.15rem",
        background: "linear-gradient(135deg, #1c003f, #3a1ea5)",
        color: "#fff",
        fontSize: "0.95rem",
        fontWeight: 700,
        letterSpacing: "0.01em",
        cursor: "pointer",
        boxShadow: "0 12px 24px rgba(28, 0, 63, 0.22)"
      }}
    >
      ← Back
    </button>
  );
}
