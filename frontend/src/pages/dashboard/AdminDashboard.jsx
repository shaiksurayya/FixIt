import StatCard from '../../components/ui/StatCard.jsx'

const topStats = [
  { label: 'Total Users', value: 120 },
  { label: 'Providers', value: 40 },
  { label: 'Services', value: 85 },
  { label: 'Categories', value: 8 },
]

const bookingStats = [
  { label: 'Bookings', value: 65 },
  { label: 'Completed', value: 40 },
  { label: 'Pending', value: 15 },
  { label: 'Reviews', value: 90 },
]

const statusBreakdown = [
  { status: 'Requested', count: 4, color: 'bg-amber' },
  { status: 'Accepted', count: 7, color: 'bg-primary' },
  { status: 'In Progress', count: 3, color: 'bg-primary' },
  { status: 'Completed', count: 11, color: 'bg-green-500' },
  { status: 'Cancelled', count: 2, color: 'bg-red-400' },
]
const maxCount = Math.max(...statusBreakdown.map((s) => s.count))

const recentBookings = [
  { customer: 'Aman', provider: 'Ravi', service: 'AC Repair', status: 'Completed' },
  { customer: 'Rahul', provider: 'Kiran', service: 'Plumbing', status: 'Requested' },
  { customer: 'Sneha', provider: 'Priya', service: 'Home Cleaning', status: 'Accepted' },
]

const recentReviews = [
  { stars: 5, text: 'Excellent' },
  { stars: 4, text: 'Good Service' },
  { stars: 5, text: 'Fast Work' },
]

const statusBadge = {
  Completed: 'bg-green-100 text-green-700',
  Requested: 'bg-amber/10 text-amber',
  Accepted: 'bg-primary/10 text-primary',
  'In Progress': 'bg-primary/10 text-primary',
  Cancelled: 'bg-red-100 text-red-600',
}

export default function AdminDashboard() {
  return (
    <div className="bg-surface min-h-[calc(100vh-73px)]">
      <div className="max-w-6xl mx-auto px-6 py-10">
        <h1 className="font-display font-700 text-2xl text-ink">Admin Dashboard</h1>
        <p className="text-sm text-sub mt-1 mb-8">Overview of your marketplace.</p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {topStats.map((s) => <StatCard key={s.label} {...s} />)}
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-4">
          {bookingStats.map((s) => <StatCard key={s.label} {...s} />)}
        </div>

        <div className="bg-white border border-line rounded-xl p-6 mt-6">
          <h2 className="font-display font-600 text-base text-ink mb-4">Booking Status</h2>
          <div className="space-y-3">
            {statusBreakdown.map((s) => (
              <div key={s.status} className="flex items-center gap-3">
                <span className="text-xs text-sub w-24 shrink-0">{s.status}</span>
                <div className="flex-1 bg-surface rounded-full h-3">
                  <div
                    className={`h-3 rounded-full ${s.color}`}
                    style={{ width: `${(s.count / maxCount) * 100}%` }}
                  />
                </div>
                <span className="text-xs text-sub w-6 text-right">{s.count}</span>
              </div>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mt-6">
          <div className="bg-white border border-line rounded-xl p-6">
            <h2 className="font-display font-600 text-base text-ink mb-4">Recent Bookings</h2>
            <table className="w-full text-sm">
              <thead>
                <tr className="text-left text-xs text-sub border-b border-line">
                  <th className="pb-2 font-medium">Customer</th>
                  <th className="pb-2 font-medium">Provider</th>
                  <th className="pb-2 font-medium">Service</th>
                  <th className="pb-2 font-medium">Status</th>
                </tr>
              </thead>
              <tbody>
                {recentBookings.map((b, i) => (
                  <tr key={i} className="border-b border-line last:border-0">
                    <td className="py-2.5 text-ink">{b.customer}</td>
                    <td className="py-2.5 text-ink">{b.provider}</td>
                    <td className="py-2.5 text-sub">{b.service}</td>
                    <td className="py-2.5">
                      <span className={`text-xs font-medium px-2 py-0.5 rounded-full ${statusBadge[b.status]}`}>
                        {b.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <div className="bg-white border border-line rounded-xl p-6">
            <h2 className="font-display font-600 text-base text-ink mb-4">Recent Reviews</h2>
            <div className="space-y-3">
              {recentReviews.map((r, i) => (
                <div key={i} className="flex items-center gap-2 text-sm">
                  <span className="text-amber">{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}</span>
                  <span className="text-sub">{r.text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
