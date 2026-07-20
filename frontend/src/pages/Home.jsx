import { useNavigate } from 'react-router-dom'

const services = [
  { name: 'Electrician', icon: '⚡', price: 'Starting at ₹299' },
  { name: 'Plumber', icon: '🔧', price: 'Starting at ₹299' },
  { name: 'Beautician', icon: '💇', price: 'Starting at ₹499' },
  { name: 'Mechanic', icon: '🚗', price: 'Starting at ₹499' },
  { name: 'Tutor', icon: '📘', price: 'Starting at ₹299' },
  { name: 'Carpenter', icon: '🪚', price: 'Starting at ₹399' },
  { name: 'Cleaner', icon: '🧹', price: 'Starting at ₹299' },
  { name: 'More', icon: '➕', price: 'Browse all' },
]

const pros = [
  { name: 'Ramesh Kumar', role: 'Electrician', rating: 4.9, reviews: 120, exp: '5+ Years Experience', price: '₹299' },
  { name: 'Suresh Yadav', role: 'Plumber', rating: 4.8, reviews: 98, exp: '7+ Years Experience', price: '₹299' },
  { name: 'Priya Sharma', role: 'Beautician', rating: 4.9, reviews: 80, exp: '6+ Years Experience', price: '₹499' },
  { name: 'Amit Verma', role: 'Mechanic', rating: 4.7, reviews: 110, exp: '8+ Years Experience', price: '₹499' },
]

const steps = [
  { n: '1', title: 'Search', desc: 'Find the service you need' },
  { n: '2', title: 'Book', desc: 'Choose a pro and a time slot' },
  { n: '3', title: 'Track', desc: 'Watch your provider arrive' },
  { n: '4', title: 'Pay', desc: 'Pay securely after the job' },
  { n: '5', title: 'Review', desc: 'Rate and review the service' },
]

function initials(name) {
  return name.split(' ').map((w) => w[0]).join('')
}

export default function Home() {
  const navigate = useNavigate()

  return (
    <>
      {/* Hero */}
      <section className="bg-primaryLight">
        <div className="max-w-7xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10 items-center">
          <div>
            <h1 className="font-display font-700 text-4xl md:text-5xl leading-tight text-ink">
              Find Trusted<br />Local Professionals
            </h1>
            <p className="mt-4 text-sub text-base max-w-md">
              Book reliable services from verified professionals at your doorstep.
            </p>

            <div className="mt-6 bg-white rounded-xl border border-line flex items-center p-2 shadow-sm max-w-lg">
              <input
                type="text"
                placeholder="Search for a service..."
                className="flex-1 px-3 py-2 text-sm outline-none"
              />
              <span className="hidden sm:flex items-center gap-1 text-sm text-sub px-2 border-l border-line">📍 Bangalore</span>
              <button onClick={() => navigate('/services')} className="bg-primary text-white text-sm font-medium rounded-lg px-5 py-2 ml-2 hover:bg-primaryDark transition-colors">
                Search
              </button>
            </div>

            <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-sub">
              <span>🛡️ Verified Professionals</span>
              <span>🔒 Secure Payments</span>
              <span>⏱️ On-time Service</span>
              <span>🎧 24/7 Support</span>
            </div>
          </div>

          <div className="relative flex justify-center">
            <div className="w-72 h-72 rounded-full bg-white/60 border border-primary/10 flex items-center justify-center relative">
              <span className="text-8xl">🧰</span>
              <span className="absolute -top-2 left-4 w-11 h-11 rounded-full bg-white shadow flex items-center justify-center text-xl">🔧</span>
              <span className="absolute top-6 -right-2 w-11 h-11 rounded-full bg-white shadow flex items-center justify-center text-xl">🚰</span>
              <span className="absolute bottom-2 -left-4 w-11 h-11 rounded-full bg-white shadow flex items-center justify-center text-xl">👨‍🔧</span>
            </div>
          </div>
        </div>
      </section>

      {/* Popular services */}
      <section id="services" className="max-w-7xl mx-auto px-6 py-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display font-700 text-xl text-ink">Popular Services</h2>
          <button onClick={() => navigate('/services')} className="text-sm text-primary font-medium">View all services →</button>
        </div>
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-4">
          {services.map((s) => (
            <div key={s.name} onClick={() => navigate('/services')} className="border border-line rounded-xl p-4 text-center hover:border-primary hover:shadow-sm transition-all cursor-pointer">
              <div className="w-12 h-12 mx-auto rounded-full bg-primaryLight flex items-center justify-center text-2xl mb-2">
                {s.icon}
              </div>
              <div className="text-sm font-medium text-ink">{s.name}</div>
              <div className="text-xs text-sub mt-0.5">{s.price}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Top rated professionals */}
      <section className="max-w-7xl mx-auto px-6 py-6 pb-14">
        <div className="flex items-center justify-between mb-6">
          <h2 className="font-display font-700 text-xl text-ink">Top Rated Professionals</h2>
          <button className="text-sm text-primary font-medium">View all →</button>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pros.map((p) => (
            <div key={p.name} className="border border-line rounded-xl p-5">
              <div className="flex items-center gap-3">
                <div className="w-11 h-11 rounded-full bg-primary text-white flex items-center justify-center text-sm font-semibold">
                  {initials(p.name)}
                </div>
                <div>
                  <div className="text-sm font-semibold text-ink">{p.name}</div>
                  <div className="text-xs text-sub">{p.role}</div>
                </div>
              </div>
              <div className="mt-3 text-sm text-amber font-medium">★ {p.rating} <span className="text-sub font-normal">({p.reviews})</span></div>
              <div className="text-xs text-sub mt-1">{p.exp}</div>
              <div className="flex items-center justify-between mt-4">
                <span className="text-sm font-semibold text-ink">{p.price} <span className="text-xs font-normal text-sub">Onwards</span></span>
                <button
                  onClick={() => navigate('/role-select?intent=login')}
                  className="text-xs font-medium text-white bg-primary rounded-lg px-3 py-1.5 hover:bg-primaryDark transition-colors"
                >
                  Book Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* How it works */}
      <section className="bg-surface">
        <div className="max-w-7xl mx-auto px-6 py-14">
          <h2 className="font-display font-700 text-xl text-ink text-center mb-10">How It Works</h2>
          <div className="grid sm:grid-cols-5 gap-8">
            {steps.map((s) => (
              <div key={s.n} className="text-center">
                <div className="w-12 h-12 mx-auto rounded-full border-2 border-primary text-primary flex items-center justify-center font-display font-700 mb-3">
                  {s.n}
                </div>
                <div className="text-sm font-semibold text-ink">{s.title}</div>
                <div className="text-xs text-sub mt-1">{s.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
