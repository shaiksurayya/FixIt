const statusStyles = {
  REQUESTED: 'bg-amber/10 text-amber',
  ACCEPTED: 'bg-primary/10 text-primary',
  IN_PROGRESS: 'bg-primary/10 text-primary',
  COMPLETED: 'bg-green-100 text-green-700',
  CANCELLED: 'bg-red-100 text-red-600',
}

const bookings = [
  {
    id: 'BK-1042',
    service: 'Electrical wiring check',
    provider: 'Ramesh Kumar',
    date: '22 Jul 2026',
    time: '11:00 AM',
    address: 'HSR Layout, Bangalore',
    status: 'ACCEPTED',
    payment: 'PENDING',
    amount: '₹299',
  },
  {
    id: 'BK-1039',
    service: 'Bathroom leak fix',
    provider: 'Suresh Yadav',
    date: '18 Jul 2026',
    time: '4:30 PM',
    address: 'Koramangala, Bangalore',
    status: 'COMPLETED',
    payment: 'PAID',
    amount: '₹450',
  },
  {
    id: 'BK-1031',
    service: 'Bridal makeup trial',
    provider: 'Priya Sharma',
    date: '10 Jul 2026',
    time: '9:00 AM',
    address: 'Indiranagar, Bangalore',
    status: 'CANCELLED',
    payment: 'PENDING',
    amount: '₹1,200',
  },
]

export default function Bookings() {
  return (
    <div className="bg-surface min-h-[calc(100vh-73px)]">
      <div className="max-w-5xl mx-auto px-6 py-12">
        <h1 className="font-display font-700 text-2xl text-ink">My Bookings</h1>
        <p className="text-sm text-sub mt-1 mb-8">Track and manage your service requests.</p>

        <div className="space-y-4">
          {bookings.map((b) => (
            <div key={b.id} className="bg-white border border-line rounded-xl p-5 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
              <div>
                <div className="flex items-center gap-3">
                  <span className="text-sm font-semibold text-ink">{b.service}</span>
                  <span className={`text-xs font-medium px-2.5 py-0.5 rounded-full ${statusStyles[b.status]}`}>
                    {b.status.replace('_', ' ')}
                  </span>
                </div>
                <div className="text-xs text-sub mt-1">
                  with {b.provider} · {b.date}, {b.time}
                </div>
                <div className="text-xs text-sub mt-0.5">📍 {b.address}</div>
              </div>

              <div className="flex items-center gap-6 sm:text-right">
                <div>
                  <div className="text-sm font-semibold text-ink">{b.amount}</div>
                  <div className="text-xs text-sub">{b.payment === 'PAID' ? 'Paid' : 'Pay on service'}</div>
                </div>
                <button className="text-xs font-medium text-primary border border-primary rounded-lg px-3 py-1.5 hover:bg-primaryLight transition-colors whitespace-nowrap">
                  View details
                </button>
              </div>
            </div>
          ))}
        </div>

        <p className="text-xs text-sub text-center mt-8">
          This is sample data — bookings will load from your account once login is connected.
        </p>
      </div>
    </div>
  )
}
