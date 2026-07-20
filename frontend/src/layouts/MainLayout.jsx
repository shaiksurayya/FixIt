import { Outlet } from 'react-router-dom'
import Navbar from '../components/layout/Navbar.jsx'

export default function MainLayout() {
  return (
    <div className="min-h-screen bg-white font-body text-ink">
      <Navbar />
      <Outlet />
    </div>
  )
}
