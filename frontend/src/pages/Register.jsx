// import { useNavigate, useParams } from 'react-router-dom'
// import { useState } from 'react'

// const roleLabels = {
//   CUSTOMER: 'Customer',
//   PROVIDER: 'Provider',
// }

// export default function Register() {
//   const navigate = useNavigate()
//   const { role } = useParams()
//   const [form, setForm] = useState({
//     role: role?.toUpperCase() || 'CUSTOMER',
//     name: '',
//     email: '',
//     phone: '',
//     password: '',
//     address: '',
//   })

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value })
//   }

//   const handleSubmit = (e) => {
//     e.preventDefault()
//     // TODO: call authService.register(form) once the backend is ready
//     // form matches the USERS table: role, name, email, password, phone, address
//     console.log('register submitted', form)
//   }

//   return (
//     <div className="min-h-screen bg-primaryLight flex items-center justify-center px-6 py-10 font-body text-ink">
//       <div className="w-full max-w-md bg-white border border-line rounded-2xl p-8">
//         <button onClick={() => navigate('/role-select?intent=signup')} className="text-sm text-sub mb-6">
//           ← Back to roles
//         </button>

//         <h1 className="font-display font-700 text-2xl text-ink">Register an account</h1>
//         <p className="text-sm text-sub mt-1 mb-6">Signing up as a {roleLabels[form.role] || 'user'}</p>

//         <form onSubmit={handleSubmit} className="space-y-4">
//           <div>
//             <label className="text-sm text-sub">I am a</label>
//             <select
//               name="role"
//               value={form.role}
//               onChange={handleChange}
//               className="mt-1 w-full border border-line rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary bg-white"
//             >
//               <option value="CUSTOMER">Customer</option>
// <option value="PROVIDER">Provider</option>
//             </select>
//           </div>

//           <div>
//             <label className="text-sm text-sub">Full name</label>
//             <input
//               name="name"
//               type="text"
//               required
//               value={form.name}
//               onChange={handleChange}
//               placeholder="e.g. Priya Sharma"
//               className="mt-1 w-full border border-line rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
//             />
//           </div>

//           <div>
//             <label className="text-sm text-sub">Email</label>
//             <input
//               name="email"
//               type="email"
//               required
//               value={form.email}
//               onChange={handleChange}
//               placeholder="you@example.com"
//               className="mt-1 w-full border border-line rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
//             />
//           </div>

//           <div>
//             <label className="text-sm text-sub">Phone number</label>
//             <input
//               name="phone"
//               type="tel"
//               required
//               value={form.phone}
//               onChange={handleChange}
//               placeholder="+91 98765 43210"
//               className="mt-1 w-full border border-line rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
//             />
//           </div>

//           <div>
//             <label className="text-sm text-sub">Password</label>
//             <input
//               name="password"
//               type="password"
//               required
//               value={form.password}
//               onChange={handleChange}
//               placeholder="At least 8 characters"
//               className="mt-1 w-full border border-line rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary"
//             />
//           </div>

//           <div>
//             <label className="text-sm text-sub">Address</label>
//             <textarea
//               name="address"
//               required
//               value={form.address}
//               onChange={handleChange}
//               rows={2}
//               placeholder="House no, street, city"
//               className="mt-1 w-full border border-line rounded-lg px-3 py-2 text-sm focus:outline-none focus:border-primary resize-none"
//             />
//           </div>

//           <button
//             type="submit"
//             className="w-full bg-primary text-white rounded-lg py-2.5 text-sm font-medium hover:bg-primaryDark transition-colors"
//           >
//             Register
//           </button>
//         </form>

//         <p className="text-center text-sm text-sub mt-6">
//           Already have an account?{' '}
//           <button onClick={() => navigate('/role-select?intent=login')} className="text-primary font-medium">
//             Log in
//           </button>
//         </p>
//       </div>
//     </div>
//   )
// }


import { useNavigate, useParams } from 'react-router-dom'
import { useState } from 'react'
import axios from 'axios'

const roleLabels = {
  CUSTOMER: 'Customer',
  PROVIDER: 'Provider',
}

export default function Register() {
  const navigate = useNavigate()
  const { role } = useParams()

  const [form, setForm] = useState({
    role: role?.toUpperCase() || 'CUSTOMER',
    name: '',
    email: '',
    phone: '',
    password: '',
    address: '',
  })

  const [loading, setLoading] = useState(false)

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    })
  }


  const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const response = await fetch("http://localhost:8080/api/auth/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
    });

    const data = await response.json();

    console.log(data);

    // if (response.ok) {
    //   alert("Registration Successful");
    //   navigate("/login");
    // } else {
    //   alert(data.message || "Registration Failed");
    // }
    if (response.ok) {
  localStorage.setItem("token", data.token);

  localStorage.setItem(
    "user",
    JSON.stringify({
      id: data.userId,
      name: data.name,
      email: data.email,
      role: data.role,
    })
  );

  alert("Registration Successful");

  navigate("/login/customer");
}
  } catch (error) {
    console.error(error);
    alert("Server Error");
  }
};
  
// const handleSubmit = async (e) => {
//   e.preventDefault();

//   console.log("Sending:", form);

//   try {
//     const response = await fetch("http://localhost:8080/api/auth/register", {
//       method: "POST",
//       headers: {
//         "Content-Type": "application/json",
//       },
//       body: JSON.stringify(form),
//     });

//     console.log("Status:", response.status);

//     const text = await response.text();

//     console.log("Response:", text);

//   } catch (err) {
//     console.error("ERROR:", err);
//   }
// };
  return (
    <div className="min-h-screen bg-primaryLight flex items-center justify-center px-6 py-10 font-body text-ink">
      <div className="w-full max-w-md bg-white border border-line rounded-2xl p-8">

        <button
          onClick={() => navigate('/role-select?intent=signup')}
          className="text-sm text-sub mb-6"
        >
          ← Back to roles
        </button>

        <h1 className="font-display font-700 text-2xl text-ink">
          Register an account
        </h1>

        <p className="text-sm text-sub mt-1 mb-6">
          Signing up as a {roleLabels[form.role]}
        </p>

        <form onSubmit={handleSubmit} className="space-y-4">

          <div>
            <label className="text-sm text-sub">I am a</label>

            <select
              name="role"
              value={form.role}
              onChange={handleChange}
              className="mt-1 w-full border border-line rounded-lg px-3 py-2 text-sm bg-white"
            >
              <option value="CUSTOMER">Customer</option>
              <option value="PROVIDER">Provider</option>
            </select>
          </div>

          <div>
            <label className="text-sm text-sub">Full Name</label>

            <input
              type="text"
              name="name"
              value={form.name}
              onChange={handleChange}
              required
              placeholder="Enter your name"
              className="mt-1 w-full border border-line rounded-lg px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm text-sub">Email</label>

            <input
              type="email"
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Enter your email"
              className="mt-1 w-full border border-line rounded-lg px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm text-sub">Phone</label>

            <input
              type="text"
              name="phone"
              value={form.phone}
              onChange={handleChange}
              required
              placeholder="9876543210"
              className="mt-1 w-full border border-line rounded-lg px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm text-sub">Password</label>

            <input
              type="password"
              name="password"
              value={form.password}
              onChange={handleChange}
              required
              placeholder="********"
              className="mt-1 w-full border border-line rounded-lg px-3 py-2 text-sm"
            />
          </div>

          <div>
            <label className="text-sm text-sub">Address</label>

            <textarea
              name="address"
              value={form.address}
              onChange={handleChange}
              required
              rows="2"
              placeholder="Enter address"
              className="mt-1 w-full border border-line rounded-lg px-3 py-2 text-sm"
            />
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full bg-primary text-white rounded-lg py-2.5 text-sm font-medium hover:bg-primaryDark transition-colors"
          >
            {loading ? 'Registering...' : 'Register'}
          </button>

        </form>

        <p className="text-center text-sm text-sub mt-6">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="text-primary font-medium"
          >
            Login
          </button>
        </p>

      </div>
    </div>
  )
}