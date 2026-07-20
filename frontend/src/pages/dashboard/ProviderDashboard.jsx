import { useState } from 'react'
import StatCard from '../../components/ui/StatCard.jsx'

const topStats = [
  { label: 'My Services', value: 4 },
  { label: 'Bookings', value: 18 },
  { label: 'Rating', value: '4.8 ★' },
]

const secondStats = [
  { label: 'Pending', value: 3 },
  { label: 'Completed', value: 15 },
  { label: 'Reviews', value: 12 },
]

const initialBookings = [
  { id: 1, time: 'Today, 2:00 PM', service: 'AC Repair', customer: 'Rahul', address: 'Hyderabad' },
  { id: 2, time: 'Tomorrow, 11:00 AM', service: 'Fan Installation', customer: 'Meena', address: 'Secunderabad' },
]

const reviews = [
  { stars: 5, text: 'Great service' },
  { stars: 4, text: 'Nice work' },
]

export default function ProviderDashboard() {
  const [bookings, setBookings] = useState(initialBookings)

  const respond = (id) => setBookings((b) => b.filter((x) => x.id !== id))

  return (
    <div className="bg-surface min-h-[calc(100vh-73px)]">
      <div className="max-w-5xl mx-auto px-6 py-10">
        <h1 className="font-display font-700 text-2xl text-ink">Welcome, Aman 👋</h1>
        <p className="text-sm text-sub mt-1 mb-8">Here's what's happening with your services.</p>

        <div className="grid grid-cols-3 gap-4">
          {topStats.map((s) => <StatCard key={s.label} {...s} />)}
        </div>
        <div className="grid grid-cols-3 gap-4 mt-4">
          {secondStats.map((s) => <StatCard key={s.label} {...s} />)}
        </div>

        <div className="bg-white border border-line rounded-xl p-6 mt-6">
          <h2 className="font-display font-600 text-base text-ink mb-4">Upcoming Bookings</h2>
          {bookings.length === 0 && <p className="text-sm text-sub">No pending requests right now.</p>}
          <div className="space-y-4">
            {bookings.map((b) => (
              <div key={b.id} className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 border border-line rounded-lg p-4">
                <div>
                  <div className="text-xs text-sub">{b.time}</div>
                  <div className="text-sm font-semibold text-ink mt-0.5">{b.service}</div>
                  <div className="text-xs text-sub mt-0.5">Customer: {b.customer} · 📍 {b.address}</div>
                </div>
                <div className="flex gap-2">
                  <button onClick={() => respond(b.id)} className="text-xs font-medium text-white bg-primary rounded-lg px-3 py-1.5 hover:bg-primaryDark transition-colors">
                    Accept
                  </button>
                  <button onClick={() => respond(b.id)} className="text-xs font-medium text-red-600 border border-red-200 rounded-lg px-3 py-1.5 hover:bg-red-50 transition-colors">
                    Reject
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white border border-line rounded-xl p-6 mt-6">
          <h2 className="font-display font-600 text-base text-ink mb-4">My Reviews</h2>
          <div className="space-y-3">
            {reviews.map((r, i) => (
              <div key={i} className="flex items-center gap-2 text-sm">
                <span className="text-amber">{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}</span>
                <span className="text-sub">{r.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
