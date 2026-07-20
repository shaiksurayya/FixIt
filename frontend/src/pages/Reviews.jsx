const reviews = [
  { stars: 5, title: 'Excellent Service', by: 'Rahul', date: '12 July' },
  { stars: 4, title: 'Good Work', by: 'Aman', date: '10 July' },
  { stars: 5, title: 'Very professional', by: 'Sneha', date: '8 July' },
  { stars: 3, title: 'Service was late but fine', by: 'Kiran', date: '3 July' },
]

export default function Reviews() {
  return (
    <div className="bg-surface min-h-[calc(100vh-73px)]">
      <div className="max-w-2xl mx-auto px-6 py-12">
        <h1 className="font-display font-700 text-2xl text-ink">Reviews</h1>
        <p className="text-sm text-sub mt-1 mb-8">What customers are saying.</p>

        <div className="space-y-4">
          {reviews.map((r, i) => (
            <div key={i} className="bg-white border border-line rounded-xl p-5">
              <div className="text-amber text-sm">{'★'.repeat(r.stars)}{'☆'.repeat(5 - r.stars)}</div>
              <div className="text-sm font-semibold text-ink mt-1">{r.title}</div>
              <div className="text-xs text-sub mt-1">by {r.by} · {r.date}</div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
