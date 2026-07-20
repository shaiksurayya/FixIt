const stats = [
  { value: '10,000+', label: 'Bookings completed' },
  { value: '1,200+', label: 'Verified professionals' },
  { value: '15', label: 'Service categories' },
  { value: '4.8★', label: 'Average rating' },
]

const values = [
  { icon: '✅', title: 'Verified professionals', desc: 'Every provider is background-checked before they can list a service.' },
  { icon: '💳', title: 'Pay after the job', desc: 'No prepayment — you pay only once the work is done to your satisfaction.' },
  { icon: '⭐', title: 'Real reviews', desc: 'Ratings come only from customers who completed a booking.' },
]

export default function AboutUs() {
  return (
    <div>
      <section className="bg-primaryLight">
        <div className="max-w-5xl mx-auto px-6 py-16 text-center">
          <h1 className="font-display font-700 text-3xl md:text-4xl text-ink">
            Connecting you with local professionals you can trust
          </h1>
          <p className="mt-4 text-sub max-w-xl mx-auto">
            ServeConnect makes it simple to find, book, and pay verified electricians,
            plumbers, mechanics, tutors, and beauticians near you.
          </p>
        </div>
      </section>

      <section className="max-w-5xl mx-auto px-6 py-14">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="font-display font-700 text-2xl md:text-3xl text-primary">{s.value}</div>
              <div className="text-xs text-sub mt-1">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <section className="bg-surface">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <h2 className="font-display font-700 text-xl text-ink text-center mb-10">What we stand for</h2>
          <div className="grid sm:grid-cols-3 gap-6">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-line rounded-xl p-6 text-center">
                <div className="text-3xl mb-3">{v.icon}</div>
                <div className="font-display font-600 text-sm text-ink">{v.title}</div>
                <div className="text-xs text-sub mt-2">{v.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="max-w-3xl mx-auto px-6 py-14 text-center">
        <h2 className="font-display font-700 text-xl text-ink mb-3">Our story</h2>
        <p className="text-sm text-sub leading-relaxed">
          We started ServeConnect because booking a reliable mechanic or electrician
          nearby was harder than it should be — endless calls, no way to check
          credentials, and no guarantee of quality. So we built one place to search,
          compare, and book local professionals, with verified profiles and honest
          reviews from real customers.
        </p>
      </section>
    </div>
  )
}
