import { useNavigate } from 'react-router-dom'

const dashboards = [
  { key: 'admin', icon: '🛡️', title: 'Admin', desc: 'Users, providers, services, bookings overview.', path: '/dashboard/admin' },
  { key: 'provider', icon: '🧰', title: 'Provider', desc: 'Your services, bookings, and reviews.', path: '/dashboard/provider' },
  { key: 'customer', icon: '🙋', title: 'Customer', desc: 'Your bookings and recommended services.', path: '/dashboard/customer' },
]

export default function DashboardSelect() {
  const navigate = useNavigate()

  return (
    <div className="bg-surface min-h-[calc(100vh-73px)] flex items-center justify-center px-6 py-14">
      <div className="w-full max-w-2xl">
        <h1 className="font-display font-700 text-2xl text-ink text-center">View a dashboard</h1>
        <p className="text-sm text-sub text-center mt-1 mb-8">
          Login isn't wired up yet, so pick a role to preview its dashboard.
        </p>
        <div className="grid sm:grid-cols-3 gap-4">
          {dashboards.map((d) => (
            <button
              key={d.key}
              onClick={() => navigate(d.path)}
              className="bg-white text-center border border-line rounded-xl p-5 hover:border-primary hover:shadow-md transition-all"
            >
              <div className="w-12 h-12 mx-auto rounded-full bg-primaryLight flex items-center justify-center text-2xl mb-3">
                {d.icon}
              </div>
              <div className="font-display font-600 text-sm text-ink">{d.title}</div>
              <div className="text-xs text-sub mt-1">{d.desc}</div>
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}
