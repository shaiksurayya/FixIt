import { useState } from 'react'

export default function ContactUs() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value })

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: wire up to backend / email service once ready
    console.log('contact form submitted', form)
  }

  return (
    <div className="bg-surface min-h-[calc(100vh-73px)]">
      <div className="max-w-5xl mx-auto px-6 py-14 grid md:grid-cols-2 gap-10">
        <div>
          <h1 className="font-display font-700 text-2xl text-ink">Get in touch</h1>
          <p className="text-sm text-sub mt-2 max-w-sm">
            Questions about a booking, becoming a provider, or anything else —
            we're happy to help.
          </p>

          <div className="mt-8 space-y-4 text-sm">
            <div className="flex items-start gap-3">
              <span className="text-lg">📍</span>
              <div>
                <div className="font-medium text-ink">Office</div>
                <div className="text-sub">Bangalore, Karnataka, India</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-lg">✉️</span>
              <div>
                <div className="font-medium text-ink">Email</div>
                <div className="text-sub">support@serveconnect.com</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-lg">📞</span>
              <div>
                <div className="font-medium text-ink">Phone</div>
                <div className="text-sub">+91 80 1234 5678</div>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <span className="text-lg">🕘</span>
              <div>
                <div className="font-medium text-ink">Support hours</div>
                <div className="text-sub">Mon–Sat, 9 AM – 8 PM</div>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white border border-line rounded-2xl p-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="text-sm text-sub">Your name</label>
              <input
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleChange}
                className="mt-1 w-full border border-line rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="text-sm text-sub">Email</label>
              <input
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleChange}
                className="mt-1 w-full border border-line rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
              />
            </div>
            <div>
              <label className="text-sm text-sub">Message</label>
              <textarea
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleChange}
                placeholder="How can we help?"
                className="mt-1 w-full border border-line rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary resize-none"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-primary text-white rounded-lg py-2.5 text-sm font-medium hover:bg-primaryDark transition-colors"
            >
              Send message
            </button>
          </form>
        </div>
      </div>
    </div>
  )
}
