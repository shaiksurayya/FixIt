import { useNavigate, useSearchParams } from 'react-router-dom'

const roles = [
  {
    key: 'customer',
    icon: '🙋',
    title: 'Customer',
    desc: 'Book mechanics, electricians, tutors and more.',
  },
  {
    key: 'provider',
    icon: '🧰',
    title: 'Provider',
    desc: 'List your services and manage bookings.',
  },
  {
    key: 'admin',
    icon: '🛡️',
    title: 'Admin',
    desc: 'Manage users, disputes and payouts.',
  },
]

export default function RoleSelect() {
  const navigate = useNavigate()
  const [params] = useSearchParams()
  const intent = params.get('intent') || 'login' // 'login' or 'signup'

  const handlePick = (roleKey) => {
    if (intent === 'signup') {
      navigate(`/register/${roleKey}`)
    } else {
      navigate(`/login/${roleKey}`)
    }
  }

  return (
    <div className="min-h-screen bg-primaryLight flex items-center justify-center px-6 font-body text-ink">
      <div className="w-full max-w-2xl">
        <button onClick={() => navigate('/')} className="text-sm text-sub mb-6">
          ← Back to home
        </button>
        <div className="bg-white border border-line rounded-2xl p-8">
          <h1 className="font-display font-700 text-2xl text-ink text-center">
            {intent === 'signup' ? 'Register an account' : 'Log in to ServeConnect'}
          </h1>
          <p className="text-sm text-sub text-center mt-1 mb-8">Continue as...</p>

          <div className="grid sm:grid-cols-3 gap-4">
            {roles.map((r) => (
              <button
                key={r.key}
                onClick={() => handlePick(r.key)}
                className="text-center border border-line rounded-xl p-5 hover:border-primary hover:shadow-md transition-all"
              >
                <div className="w-12 h-12 mx-auto rounded-full bg-primaryLight flex items-center justify-center text-2xl mb-3">
                  {r.icon}
                </div>
                <div className="font-display font-600 text-sm text-ink">{r.title}</div>
                <div className="text-xs text-sub mt-1">{r.desc}</div>
              </button>
            ))}
          </div>

          <p className="text-center text-sm text-sub mt-6">
            {intent === 'signup' ? (
              <>Already have an account?{' '}
                <button onClick={() => navigate('/role-select?intent=login')} className="text-primary font-medium">Log in</button>
              </>
            ) : (
              <>New here?{' '}
                <button onClick={() => navigate('/role-select?intent=signup')} className="text-primary font-medium">Register</button>
              </>
            )}
          </p>
        </div>
      </div>
    </div>
  )
}
