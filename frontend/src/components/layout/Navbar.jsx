import { useNavigate, useLocation } from 'react-router-dom'

const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'Services', path: '/services' },
  { label: 'Bookings', path: '/bookings' },
  { label: 'Dashboard', path: '/dashboard' },
  { label: 'About Us', path: '/about' },
  { label: 'Contact', path: '/contact' },
]

export default function Navbar() {
  const navigate = useNavigate()
  const location = useLocation()

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-line">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
        <button onClick={() => navigate('/')} className="flex items-center gap-2">
          <span className="w-9 h-9 rounded-lg bg-primary text-white flex items-center justify-center font-display font-700">S</span>
          <div className="text-left">
            <div className="font-display font-700 text-lg leading-none text-ink">ServeConnect</div>
            <div className="text-xs text-sub leading-none mt-0.5">Local Service Marketplace</div>
          </div>
        </button>

        <nav className="hidden md:flex items-center gap-6 text-sm text-ink/80">
          {navLinks.map((link) => (
            <button
              key={link.path}
              onClick={() => navigate(link.path)}
              className={location.pathname === link.path ? 'text-primary font-medium' : 'hover:text-primary transition-colors'}
            >
              {link.label}
            </button>
          ))}
        </nav>

        <div className="flex items-center gap-3">
          <button
            onClick={() => navigate('/profile')}
            title="Profile"
            className="w-8 h-8 rounded-full bg-primaryLight text-primary flex items-center justify-center text-sm font-semibold hover:bg-primary hover:text-white transition-colors"
          >
            👤
          </button>
          <button
            onClick={() => navigate('/role-select?intent=login')}
            className="text-sm font-medium text-primary border border-primary rounded-lg px-4 py-2 hover:bg-primaryLight transition-colors"
          >
            Login
          </button>
          <button
            onClick={() => navigate('/role-select?intent=signup')}
            className="text-sm font-medium text-white bg-primary rounded-lg px-4 py-2 hover:bg-primaryDark transition-colors"
          >
            Register
          </button>
        </div>
      </div>
    </header>
  )
}
