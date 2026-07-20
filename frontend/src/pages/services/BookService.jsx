import { useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { services } from '../../data/services.js'

export default function BookService() {
  const { id } = useParams()
  const navigate = useNavigate()
  const service = services.find((s) => s.id === Number(id))

  const [form, setForm] = useState({ date: '', time: '', address: '' })
  const [confirmed, setConfirmed] = useState(false)

  if (!service) {
    return (
      <div className="max-w-md mx-auto px-6 py-16 text-center">
        <p className="text-sm text-sub">Service not found.</p>
        <button onClick={() => navigate('/services')} className="text-sm text-primary font-medium mt-3">
          Back to services
        </button>
      </div>
    )
  }

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: POST to /bookings once backend is ready — matches booking_date, booking_time, service_address, payment_method
    setConfirmed(true)
  }

  if (confirmed) {
    return (
      <div className="bg-surface min-h-[calc(100vh-73px)] flex items-center justify-center px-6">
        <div className="bg-white border border-line rounded-2xl p-8 text-center max-w-sm">
          <div className="text-4xl mb-3">✅</div>
          <h1 className="font-display font-700 text-xl text-ink">Booking confirmed</h1>
          <p className="text-sm text-sub mt-2">
            {service.title} with {service.provider} on {form.date} at {form.time}. Pay on service completion.
          </p>
          <button
            onClick={() => navigate('/bookings')}
            className="mt-6 text-sm font-medium text-white bg-primary rounded-lg px-4 py-2 hover:bg-primaryDark transition-colors"
          >
            View my bookings
          </button>
        </div>
      </div>
    )
  }

  return (
    <div className="bg-surface min-h-[calc(100vh-73px)]">
      <div className="max-w-md mx-auto px-6 py-12">
        <div className="bg-white border border-line rounded-2xl p-6">
          <h1 className="font-display font-700 text-xl text-ink">{service.title}</h1>
          <div className="flex items-center justify-between mt-2 text-sm">
            <span className="text-sub">Provider: <span className="text-ink font-medium">{service.provider}</span></span>
            <span className="text-amber">{'★'.repeat(service.rating)}{'☆'.repeat(5 - service.rating)}</span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4 mt-6">
            <div>
              <label className="text-sm text-sub">Date</label>
              <input
                name="date" type="date" required value={form.date} onChange={handleChange}
                className="mt-1 w-full border border-line rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="text-sm text-sub">Time</label>
              <select
                name="time" required value={form.time} onChange={handleChange}
                className="mt-1 w-full border border-line rounded-lg px-3 py-2 text-sm bg-white focus:outline-none focus:border-primary"
              >
                <option value="">Select a slot</option>
                <option>9:00 AM</option>
                <option>11:00 AM</option>
                <option>2:00 PM</option>
                <option>4:30 PM</option>
              </select>
            </div>
            <div>
              <label className="text-sm text-sub">Address</label>
              <textarea
                name="address" required rows={2} value={form.address} onChange={handleChange}
                placeholder="House no, street, city"
                className="mt-1 w-full border border-line rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary resize-none"
              />
            </div>
            <div>
              <label className="text-sm text-sub">Payment</label>
              <div className="mt-1 border border-line rounded-lg px-3 py-2 text-sm bg-surface text-sub">
                Cash on service (₹{service.price})
              </div>
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white rounded-lg py-2.5 text-sm font-medium hover:bg-primaryDark transition-colors"
            >
              Confirm Booking
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
