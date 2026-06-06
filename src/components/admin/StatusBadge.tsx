const statusColors: Record<string, string> = {
  new: "bg-blue-100 text-blue-800",
  contacted: "bg-yellow-100 text-yellow-800",
  quoted: "bg-purple-100 text-purple-800",
  negotiating: "bg-orange-100 text-orange-800",
  "closed-won": "bg-green-100 text-green-800",
  "closed-lost": "bg-red-100 text-red-800",
  spam: "bg-novu-warm-100 text-novu-near-black-60",
};

export default function StatusBadge({ status }: { status: string }) {
  return (
    <span className={`inline-flex text-label-sm px-2.5 py-0.5 rounded-full font-medium ${statusColors[status] || "bg-novu-warm-100 text-novu-near-black-60"}`}>
      {status.replace("-", " ").replace(/\b\w/g, (c) => c.toUpperCase())}
    </span>
  );
}
