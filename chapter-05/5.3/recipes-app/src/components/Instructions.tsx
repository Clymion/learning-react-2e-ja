import React from "react";

export default function Instructions({ title = "untitled", steps = [] }: { title?: string; steps?: string[] }) {
  return (
    <section className="instructions">
      <h2>{title}</h2>
      {steps.map((s, i) => (
        <p key={i}>{s}</p>
      ))}
    </section>
  );
}
