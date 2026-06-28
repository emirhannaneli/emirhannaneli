export function AmbientBg() {
  const base = "emn-blob absolute rounded-full";
  return (
    <div aria-hidden className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
      <div className={base} style={{ top: "-12%", left: "-8%", width: "55vw", height: "55vw", background: "radial-gradient(circle,var(--blob-a),transparent 68%)", filter: "blur(20px)", animation: "emnFloatA 22s ease-in-out infinite" }} />
      <div className={base} style={{ bottom: "-18%", right: "-10%", width: "50vw", height: "50vw", background: "radial-gradient(circle,var(--blob-c),transparent 68%)", filter: "blur(20px)", animation: "emnFloatB 26s ease-in-out infinite" }} />
      <div className={base} style={{ top: "35%", right: "18%", width: "34vw", height: "34vw", background: "radial-gradient(circle,var(--blob-b),transparent 70%)", filter: "blur(20px)", animation: "emnFloatC 30s ease-in-out infinite" }} />
    </div>
  );
}
