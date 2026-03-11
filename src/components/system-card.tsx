import type { ReactNode } from "react";

type SystemCardProps = {
  title: string;
  summary: string;
  accent: string;
  children?: ReactNode;
};

export function SystemCard({ title, summary, accent, children }: SystemCardProps) {
  return (
    <section
      style={{
        border: "1px solid rgba(255,255,255,0.08)",
        borderRadius: 20,
        padding: 20,
        background: "linear-gradient(180deg, rgba(20,26,36,0.96), rgba(12,15,20,0.96))",
        boxShadow: `0 20px 48px -24px ${accent}`,
      }}
    >
      <div style={{ fontSize: 12, letterSpacing: "0.12em", textTransform: "uppercase", color: "#8ba1b8" }}>
        System
      </div>
      <h3 style={{ margin: "10px 0 8px", fontSize: 20, color: "#edf2f7" }}>{title}</h3>
      <p style={{ margin: 0, color: "#9eb0c2", lineHeight: 1.5 }}>{summary}</p>
      {children ? <div style={{ marginTop: 16 }}>{children}</div> : null}
    </section>
  );
}
