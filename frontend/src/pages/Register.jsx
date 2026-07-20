import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'

const roleLabels = {
  customer: 'Customer',
  provider: 'Provider',
  admin: 'Admin',
}

export default function Register() {
  const navigate = useNavigate()
  const { role } = useParams()
  const [form, setForm] = useState({
    role: role || 'customer',
    name: '',
    email: '',
    phone: '',
    password: '',
    address: '',
  })

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // TODO: call authService.register(form) once the backend is ready
    // form matches the USERS table: role, name, email, password, phone, address
    console.log('register submitted', form)
  }

  return (
    <div className="min-h-screen bg-primaryLight flex items-center justify-center px-6 py-10 font-body text-ink">
      <div className="w-full max-w-md bg-white border border-line rounded-2xl p-8">
        <button onClick={() => navigate('/role-select?intent=signup')} className="text-sm text-sub mb-6">
          ← Back to roles
        </button>

        <h1 className="font-display font-700 text-2xl text-ink">Register an account</h1>
        <p className="text-sm text-sub mt-1 mb-6">Signing up as a {roleLabels[form.role] || 'user'}</p>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="text-sm text-sub">I am a</label>
            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="mt-1 w-full border border-line rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary bg-white"
            >
              <option value="customer">Customer</option>
              <option value="provider">Provider</option>
              <option value="admin">Admin</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-sub">Full name</label>
            <input
              name="name"
              type="text"
              required
              value={form.name}
              onChange={handleChange}
              placeholder="e.g. Priya Sharma"
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
              placeholder="you@example.com"
              className="mt-1 w-full border border-line rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="text-sm text-sub">Phone number</label>
            <input
              name="phone"
              type="tel"
              required
              value={form.phone}
              onChange={handleChange}
              placeholder="+91 98765 43210"
              className="mt-1 w-full border border-line rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="text-sm text-sub">Password</label>
            <input
              name="password"
              type="password"
              required
              value={form.password}
              onChange={handleChange}
              placeholder="At least 8 characters"
              className="mt-1 w-full border border-line rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
            />
          </div>

          <div>
            <label className="text-sm text-sub">Address</label>
            <textarea
              name="address"
              required
              value={form.address}
              onChange={handleChange}
              rows={2}
              placeholder="House no, street, city"
              className="mt-1 w-full border border-line rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary resize-none"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-primary text-white rounded-lg py-2.5 text-sm font-medium hover:bg-primaryDark transition-colors"
          >
            Register
          </button>
        </form>

        <p className="text-center text-sm text-sub mt-6">
          Already have an account?{' '}
          <button onClick={() => navigate('/role-select?intent=login')} className="text-primary font-medium">
            Log in
          </button>
        </p>
      </div>
    </div>
  )
}
