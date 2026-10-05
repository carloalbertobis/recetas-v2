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
          ? "border-[#E5C28F] bg-[#FDF4E7]"
          : "border-[#E8DCCB] bg-[#FCFAF7]"
      }`}
    >
      <div className="mb-2 text-xs font-bold uppercase tracking-wider text-[#806B53]">
        {label}
      </div>

      <div className="text-2xl font-bold text-[#3F3428]">
        {value}
      </div>
    </div>
  );
}