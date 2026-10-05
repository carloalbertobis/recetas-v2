type MetricCardProps = {
  label: string;
  value: string;
  highlight?: boolean;
};

export default function MetricCard({
  label,
  value,
  highlight = false,
}: MetricCardProps) {
  return (
    <div
      className={`rounded-xl border p-5 ${
        highlight
          ? "border-blue-200 bg-blue-50"
          : "border-slate-200 bg-slate-50"
      }`}
    >
      <div className="mb-2 text-xs font-bold uppercase tracking-wider text-slate-500">
        {label}
      </div>

      <div className="text-2xl font-bold text-slate-800">
        {value}
      </div>
    </div>
  );
}