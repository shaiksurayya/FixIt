export default function StatCard({ label, value }) {
  return (
    <div className="bg-white border border-line rounded-xl p-5 text-center">
      <div className="font-display font-700 text-2xl text-ink">{value}</div>
      <div className="text-xs text-sub mt-1">{label}</div>
    </div>
  )
}
