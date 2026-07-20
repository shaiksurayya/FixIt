import { useNavigate } from 'react-router-dom'
import StatCard from '../../components/ui/StatCard.jsx'

const stats = [
  { label: 'Bookings', value: 10 },
  { label: 'Completed', value: 8 },
  { label: 'Reviews', value: 6 },
]

const recentBookings = [
  { service: 'AC Repair', status: 'Completed' },
]

const recommended = ['AC Repair', 'Cleaning', 'Painting', 'Plumbing']

export default function CustomerDashboard() {
  const navigate = useNavigate()

  return (
    <div className="bg-surface min-h-[calc(100vh-73px)]">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="font-display font-700 text-2xl text-ink">Hello Aman 👋</h1>
        <p className="text-sm text-sub mt-1 mb-8">Here's a look at your bookings.</p>

        <div className="grid grid-cols-3 gap-4">
          {stats.map((s) => <StatCard key={s.label} {...s} />)}
        </div>

        <div className="bg-white border border-line rounded-xl p-6 mt-6">
          <h2 className="font-display font-600 text-base text-ink mb-4">Upcoming Booking</h2>
          <div className="flex items-center justify-between">
            <div>
              <div className="text-xs text-sub">Tomorrow</div>
              <div className="text-sm font-semibold text-ink mt-0.5">Electrician</div>
            </div>
            <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary">Accepted</span>
          </div>
        </div>

        <div className="bg-white border border-line rounded-xl p-6 mt-6">
          <h2 className="font-display font-600 text-base text-ink mb-4">Recent Bookings</h2>
          {recentBookings.map((b, i) => (
            <div key={i} className="flex items-center justify-between">
              <div>
                <div className="text-sm font-semibold text-ink">{b.service}</div>
                <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-green-100 text-green-700 inline-block mt-1">
                  {b.status}
                </span>
              </div>
              <button onClick={() => navigate('/bookings')} className="text-xs font-medium text-primary">
                View details →
              </button>
            </div>
          ))}
        </div>

        <div className="bg-white border border-line rounded-xl p-6 mt-6">
          <h2 className="font-display font-600 text-base text-ink mb-4">Recommended Services</h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
            {recommended.map((s) => (
              <button
                key={s}
                onClick={() => navigate('/services')}
                className="border border-line rounded-lg py-3 text-sm text-ink hover:border-primary hover:text-primary transition-colors"
              >
                {s}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
