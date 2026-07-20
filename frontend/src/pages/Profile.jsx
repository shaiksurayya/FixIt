import { useNavigate } from 'react-router-dom'

const user = {
  name: 'Aman Verma',
  email: 'aman@example.com',
  phone: '+91 98765 43210',
  role: 'Customer',
  address: 'HSR Layout, Bangalore',
}

export default function Profile() {
  const navigate = useNavigate()

  return (
    <div className="bg-surface min-h-[calc(100vh-73px)]">
      <div className="max-w-md mx-auto px-6 py-12">
        <div className="bg-white border border-line rounded-2xl p-6 text-center">
          <div className="w-20 h-20 mx-auto rounded-full bg-primary text-white flex items-center justify-center text-2xl font-display font-700">
            {user.name.split(' ').map((w) => w[0]).join('')}
          </div>
          <h1 className="font-display font-700 text-xl text-ink mt-4">{user.name}</h1>
          <span className="text-xs font-medium px-2.5 py-0.5 rounded-full bg-primary/10 text-primary inline-block mt-2">
            {user.role}
          </span>

          <div className="text-left mt-6 space-y-3 text-sm">
            <div>
              <div className="text-xs text-sub">Email</div>
              <div className="text-ink">{user.email}</div>
            </div>
            <div>
              <div className="text-xs text-sub">Phone</div>
              <div className="text-ink">{user.phone}</div>
            </div>
            <div>
              <div className="text-xs text-sub">Address</div>
              <div className="text-ink">{user.address}</div>
            </div>
          </div>

          <button className="w-full mt-6 text-sm font-medium text-white bg-primary rounded-lg py-2.5 hover:bg-primaryDark transition-colors">
            Edit Profile
          </button>

          <div className="mt-4 space-y-2">
            <button onClick={() => navigate('/bookings')} className="w-full text-sm text-ink border border-line rounded-lg py-2 hover:border-primary hover:text-primary transition-colors">
              My Bookings
            </button>
            <button onClick={() => navigate('/reviews')} className="w-full text-sm text-ink border border-line rounded-lg py-2 hover:border-primary hover:text-primary transition-colors">
              My Reviews
            </button>
            <button onClick={() => navigate('/')} className="w-full text-sm text-red-600 border border-red-200 rounded-lg py-2 hover:bg-red-50 transition-colors">
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}
