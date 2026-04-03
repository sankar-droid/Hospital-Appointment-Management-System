'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { jwtDecode } from 'jwt-decode';
import { useState } from 'react';
import { loginApi } from '@/lib/api/auth.api';
import { useAuthStore } from '@/store/auth.store';
import { DecodedToken } from '@/types';

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Minimum 6 characters'),
});
type FormData = z.infer<typeof schema>;

export default function LoginPage() {
  const router = useRouter();
  const { setAuth } = useAuthStore();
  const [showPassword, setShowPassword] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const { register, handleSubmit, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
  });

  const { mutate, isPending } = useMutation({
    mutationFn: loginApi,
    onSuccess: ({ data }) => {
      const decoded = jwtDecode<DecodedToken>(data.access_token);
      const role = decoded.roles[0] as 'admin' | 'doctor' | 'patient';
      setAuth(data.access_token, { id: decoded.sub, email: decoded.email, role });
      toast.success('Login successful!');
      if (role === 'admin') router.replace('/admin');
      else if (role === 'doctor') router.replace('/doctor');
      else router.replace('/patient');
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || 'Login failed');
    },
  });

  const services = [
    { img: '/specializations/cardiology.svg', title: 'Find Doctors', desc: 'Search & book appointments with top doctors near you', bg: 'bg-red-50' },
    { img: '/specializations/dermatology.svg', title: 'Medicines', desc: 'Order medicines online with fast home delivery', bg: 'bg-yellow-50' },
    { img: '/specializations/eye.svg', title: 'Lab Tests', desc: 'Book lab tests at home or at a nearby center', bg: 'bg-blue-50' },
    { img: '/specializations/pulmonology.svg', title: 'Consult Online', desc: 'Video consult with doctors from your home', bg: 'bg-teal-50' },
  ];

  const specializations = [
    { img: 'https://images.unsplash.com/photo-1628348068343-c6a848d2b6dd?w=200&h=200&fit=crop&crop=face', name: 'Cardiologist', color: 'border-red-200 bg-red-50' },
    { img: 'https://images.unsplash.com/photo-1559757175-0eb30cd8c063?w=200&h=200&fit=crop&crop=face', name: 'Neurologist', color: 'border-purple-200 bg-purple-50' },
    { img: 'https://images.unsplash.com/photo-1606811841689-23dfddce3e95?w=200&h=200&fit=crop&crop=face', name: 'Dentist', color: 'border-green-200 bg-green-50' },
    { img: 'https://images.unsplash.com/photo-1576091160550-2173dba999ef?w=200&h=200&fit=crop&crop=face', name: 'Eye Specialist', color: 'border-blue-200 bg-blue-50' },
    { img: 'https://images.unsplash.com/photo-1530026405186-ed1f139313f8?w=200&h=200&fit=crop&crop=face', name: 'Orthopedic', color: 'border-orange-200 bg-orange-50' },
    { img: 'https://images.unsplash.com/photo-1587351021759-3e566b6af7cc?w=200&h=200&fit=crop&crop=face', name: 'Pediatrician', color: 'border-pink-200 bg-pink-50' },
    { img: 'https://images.unsplash.com/photo-1612277795421-9bc7706a4a34?w=200&h=200&fit=crop&crop=face', name: 'Dermatologist', color: 'border-yellow-200 bg-yellow-50' },
    { img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=200&h=200&fit=crop&crop=face', name: 'Pulmonologist', color: 'border-teal-200 bg-teal-50' },
  ];

  const doctors = [
    { name: 'Dr. Priya Sharma', spec: 'Cardiologist', exp: '12 yrs', fee: '₹500', rating: '4.9', reviews: 320, img: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=200&h=200&fit=crop&crop=face' },
    { name: 'Dr. Rahul Mehta', spec: 'Neurologist', exp: '8 yrs', fee: '₹600', rating: '4.8', reviews: 210, img: 'https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=200&h=200&fit=crop&crop=face' },
    { name: 'Dr. Anita Rao', spec: 'Dermatologist', exp: '10 yrs', fee: '₹400', rating: '4.7', reviews: 180, img: 'https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=200&h=200&fit=crop&crop=face' },
  ];

  return (
    <div className="min-h-screen bg-white font-sans">

      {/* ── NAVBAR ── */}
      <nav className="sticky top-0 z-40 bg-white border-b border-gray-100 shadow-sm">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-[#2d6be4] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-sm">M</span>
            </div>
            <span className="text-xl font-bold text-[#2d6be4]">MediCare</span>
          </div>

          <div className="hidden md:flex items-center gap-8 text-sm text-gray-600 font-medium">
            <span className="hover:text-[#2d6be4] cursor-pointer">Find Doctors</span>
            <span className="hover:text-[#2d6be4] cursor-pointer">Video Consult</span>
            <span className="hover:text-[#2d6be4] cursor-pointer">Medicines</span>
            <span className="hover:text-[#2d6be4] cursor-pointer">Lab Tests</span>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={() => setShowModal(true)}
              className="text-sm font-semibold text-[#2d6be4] hover:text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-50 transition"
            >
              Login
            </button>
            <Link
              href="/auth/register"
              className="text-sm font-semibold bg-[#2d6be4] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-[#eef3ff] to-[#f8f9ff] py-16">
        <div className="max-w-7xl mx-auto px-6">
          <div className="flex flex-col lg:flex-row items-center gap-12">
            <div className="flex-1 space-y-6">
              <div className="inline-flex items-center gap-2 bg-blue-100 text-[#2d6be4] text-xs font-semibold px-3 py-1.5 rounded-full">
                🏆 India&apos;s Most Trusted Healthcare Platform
              </div>
              <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
                Your Health,<br />
                <span className="text-[#2d6be4]">Our Priority</span>
              </h1>
              <p className="text-gray-500 text-lg leading-relaxed max-w-lg">
                Book appointments with verified doctors, consult online, order medicines — all in one place.
              </p>

              {/* Search bar like Practo */}
              <div className="flex gap-3 bg-white rounded-2xl shadow-lg p-2 max-w-xl border border-gray-100">
                <div className="flex items-center gap-2 flex-1 px-3">
                  <span className="text-gray-400">🔍</span>
                  <input
                    type="text"
                    placeholder="Search doctors, specializations..."
                    className="flex-1 text-sm outline-none text-gray-700 placeholder:text-gray-400"
                  />
                </div>
                <div className="flex items-center gap-2 px-3 border-l border-gray-100">
                  <span className="text-gray-400">📍</span>
                  <input
                    type="text"
                    placeholder="Location"
                    className="w-24 text-sm outline-none text-gray-700 placeholder:text-gray-400"
                  />
                </div>
                <button className="bg-[#2d6be4] text-white text-sm font-semibold px-5 py-2.5 rounded-xl hover:bg-blue-700 transition">
                  Search
                </button>
              </div>

              {/* Stats */}
              <div className="flex gap-8 pt-2">
                {[
                  { value: '100+', label: 'Verified Doctors' },
                  { value: '500+', label: 'Happy Patients' },
                  { value: '1000+', label: 'Appointments' },
                ].map((s) => (
                  <div key={s.label}>
                    <p className="text-2xl font-bold text-[#2d6be4]">{s.value}</p>
                    <p className="text-xs text-gray-500 mt-0.5">{s.label}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Hero illustration */}
            <div className="flex-1 flex justify-center">
              <div className="relative">
                <div className="absolute inset-0 bg-[#2d6be4] rounded-full opacity-10 animate-pulse" />
                <img
                  src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=500&h=500&fit=crop&crop=face"
                  alt="Doctor"
                  className="relative z-10 w-80 h-80 object-cover rounded-full border-8 border-white shadow-2xl"
                />
                {/* Floating badge 1 */}
                <div className="absolute top-6 -left-6 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 z-20">
                  <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                    <span className="text-green-600 text-sm">✓</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">Verified Doctor</p>
                    <p className="text-xs text-gray-400">100% Trusted</p>
                  </div>
                </div>
                {/* Floating badge 2 */}
                <div className="absolute bottom-6 -right-6 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 z-20">
                  <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                    <span className="text-blue-600 text-sm">📅</span>
                  </div>
                  <div>
                    <p className="text-xs font-bold text-gray-800">Easy Booking</p>
                    <p className="text-xs text-gray-400">In 2 minutes</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Our Services</h2>
          <p className="text-gray-400 text-sm mb-8">Everything you need for your healthcare journey</p>
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-5">
            {services.map((s) => (
              <div key={s.title} className="bg-[#f8faff] hover:bg-[#eef3ff] border border-gray-100 rounded-2xl p-6 cursor-pointer transition group">
                <div className={`w-14 h-14 ${s.bg} rounded-2xl flex items-center justify-center mb-4`}>
                  <img src={s.img} alt={s.title} className="w-10 h-10" />
                </div>
                <h3 className="font-semibold text-gray-800 group-hover:text-[#2d6be4] transition">{s.title}</h3>
                <p className="text-xs text-gray-400 mt-1.5 leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SPECIALIZATIONS ── */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Find by Specialization</h2>
          <p className="text-gray-400 text-sm mb-8">Browse doctors by their area of expertise</p>
          <div className="grid grid-cols-4 lg:grid-cols-8 gap-4">
            {specializations.map((s) => (
              <div key={s.name} className={`flex flex-col items-center gap-3 p-4 bg-white rounded-2xl border-2 ${s.color} hover:shadow-lg cursor-pointer transition group`}>
                <img
                  src={s.img}
                  alt={s.name}
                  className="w-14 h-14 rounded-full object-cover border-2 border-white shadow-md group-hover:scale-105 transition"
                />
                <span className="text-xs text-gray-600 font-semibold text-center group-hover:text-[#2d6be4] transition leading-tight">{s.name}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── TOP DOCTORS ── */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Top Doctors</h2>
          <p className="text-gray-400 text-sm mb-8">Highly rated and verified by our team</p>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {doctors.map((doc) => (
              <div key={doc.name} className="border border-gray-100 rounded-2xl p-6 hover:shadow-lg transition">
                <div className="flex items-center gap-4 mb-4">
                  <img src={doc.img} alt={doc.name} className="w-16 h-16 rounded-full object-cover border-2 border-[#eef3ff]" />
                  <div>
                    <p className="font-semibold text-gray-800">{doc.name}</p>
                    <p className="text-xs text-gray-400">{doc.spec} • {doc.exp} exp</p>
                  </div>
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400 text-sm">★</span>
                    <span className="text-sm font-semibold text-gray-700">{doc.rating}</span>
                    <span className="text-xs text-gray-400">({doc.reviews} reviews)</span>
                  </div>
                  <span className="text-sm font-bold text-[#2d6be4]">{doc.fee}</span>
                </div>
                <button
                  onClick={() => setShowModal(true)}
                  className="w-full mt-4 bg-[#eef3ff] hover:bg-[#2d6be4] text-[#2d6be4] hover:text-white text-sm font-semibold py-2.5 rounded-xl transition"
                >
                  Book Appointment
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FOOTER ── */}
      <footer className="bg-gray-900 text-gray-400 py-10">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center justify-between gap-4">
          <div className="flex items-center gap-2">
            <div className="w-7 h-7 bg-[#2d6be4] rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-xs">M</span>
            </div>
            <span className="text-white font-bold">MediCare</span>
          </div>
          <p className="text-xs">© 2025 MediCare. All rights reserved.</p>
          <div className="flex gap-6 text-xs">
            <span className="hover:text-white cursor-pointer">Privacy Policy</span>
            <span className="hover:text-white cursor-pointer">Terms of Service</span>
            <span className="hover:text-white cursor-pointer">Contact Us</span>
          </div>
        </div>
      </footer>

      {/* ── LOGIN MODAL ── */}
      {showModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
          <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative animate-in fade-in zoom-in duration-200">
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-light"
            >
              ✕
            </button>

            <div className="text-center mb-6">
              <div className="w-12 h-12 bg-[#eef3ff] rounded-2xl flex items-center justify-center mx-auto mb-3">
                <span className="text-2xl">👋</span>
              </div>
              <h2 className="text-xl font-bold text-gray-900">Welcome back</h2>
              <p className="text-gray-400 text-sm mt-1">Sign in to your MediCare account</p>
            </div>

            <form onSubmit={handleSubmit((data) => mutate(data))} className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Email address</label>
                <input
                  {...register('email')}
                  type="email"
                  placeholder="Enter your email"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d6be4] focus:border-transparent transition"
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Password</label>
                <div className="relative">
                  <input
                    {...register('password')}
                    type={showPassword ? 'text' : 'password'}
                    placeholder="Enter your password"
                    className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d6be4] focus:border-transparent transition pr-16"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2d6be4] text-xs font-semibold"
                  >
                    {showPassword ? 'Hide' : 'Show'}
                  </button>
                </div>
                {errors.password && <p className="text-red-500 text-xs mt-1">{errors.password.message}</p>}
              </div>

              <button
                type="submit"
                disabled={isPending}
                className="w-full bg-[#2d6be4] hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition disabled:opacity-60 text-sm shadow-md shadow-blue-200"
              >
                {isPending ? (
                  <span className="flex items-center justify-center gap-2">
                    <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
                      <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                      <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8z" />
                    </svg>
                    Signing in...
                  </span>
                ) : 'Sign In'}
              </button>
            </form>

            <p className="text-center text-sm text-gray-400 mt-5">
              Don&apos;t have an account?{' '}
              <Link href="/auth/register" className="text-[#2d6be4] font-semibold hover:underline">
                Register now
              </Link>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
