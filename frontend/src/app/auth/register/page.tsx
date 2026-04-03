'use client';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import toast from 'react-hot-toast';
import { useState } from 'react';
import { registerPatientApi, registerDoctorApi } from '@/lib/api/auth.api';

const schema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Minimum 6 characters'),
  role: z.enum(['patient', 'doctor']),
});
type FormData = z.infer<typeof schema>;

export default function RegisterPage() {
  const router = useRouter();
  const [showPassword, setShowPassword] = useState(false);

  const { register, handleSubmit, watch, formState: { errors } } = useForm<FormData>({
    resolver: zodResolver(schema),
    defaultValues: { role: 'patient' },
  });

  const selectedRole = watch('role');

  const { mutate, isPending } = useMutation({
    mutationFn: (data: FormData) =>
      data.role === 'doctor'
        ? registerDoctorApi({ email: data.email, password: data.password })
        : registerPatientApi({ email: data.email, password: data.password }),
    onSuccess: () => {
      toast.success('Account created! Please login.');
      router.replace('/auth/login');
    },
    onError: (err: any) => {
      toast.error(err?.response?.data?.message || 'Registration failed');
    },
  });

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
            <Link href="/auth/login" className="text-sm font-semibold text-[#2d6be4] hover:text-blue-800 px-4 py-2 rounded-lg hover:bg-blue-50 transition">
              Login
            </Link>
            <Link href="/auth/register" className="text-sm font-semibold bg-[#2d6be4] text-white px-4 py-2 rounded-lg hover:bg-blue-700 transition">
              Register
            </Link>
          </div>
        </div>
      </nav>

      {/* ── HERO ── */}
      <section className="bg-gradient-to-br from-[#eef3ff] to-[#f8f9ff] py-16">
        <div className="max-w-7xl mx-auto px-6 flex flex-col lg:flex-row items-center gap-12">
          <div className="flex-1 space-y-6">
            <div className="inline-flex items-center gap-2 bg-blue-100 text-[#2d6be4] text-xs font-semibold px-3 py-1.5 rounded-full">
              🏆 India&apos;s Most Trusted Healthcare Platform
            </div>
            <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
              Your Health,<br />
              <span className="text-[#2d6be4]">Our Priority</span>
            </h1>
            <p className="text-gray-500 text-lg max-w-lg">
              Book appointments with verified doctors, consult online, order medicines — all in one place.
            </p>
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
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-[#2d6be4] rounded-full opacity-10 animate-pulse" />
              <img
                src="https://images.unsplash.com/photo-1651008376811-b90baee60c1f?w=500&h=500&fit=crop&crop=face"
                alt="Doctor"
                className="relative z-10 w-80 h-80 object-cover rounded-full border-8 border-white shadow-2xl"
              />
              <div className="absolute top-6 -left-6 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 z-20">
                <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center">
                  <span className="text-green-600 text-sm">✓</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">Free Registration</p>
                  <p className="text-xs text-gray-400">No hidden charges</p>
                </div>
              </div>
              <div className="absolute bottom-6 -right-6 bg-white rounded-2xl shadow-lg px-4 py-3 flex items-center gap-2 z-20">
                <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center">
                  <span className="text-blue-600 text-sm">👥</span>
                </div>
                <div>
                  <p className="text-xs font-bold text-gray-800">500+ Patients</p>
                  <p className="text-xs text-gray-400">Already joined</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── REGISTER MODAL (always open on this page) ── */}
      <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4">
        <div className="bg-white rounded-3xl shadow-2xl w-full max-w-md p-8 relative">
          <Link
            href="/auth/login"
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-xl font-light"
          >
            ✕
          </Link>

          <div className="text-center mb-6">
            <div className="w-12 h-12 bg-[#eef3ff] rounded-2xl flex items-center justify-center mx-auto mb-3">
              <span className="text-2xl">🏥</span>
            </div>
            <h2 className="text-xl font-bold text-gray-900">Create your account</h2>
            <p className="text-gray-400 text-sm mt-1">Join MediCare — it&apos;s free</p>
          </div>

          <form onSubmit={handleSubmit((data) => mutate(data))} className="space-y-4">
            {/* Role selector */}
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-2">I want to</label>
              <div className="grid grid-cols-2 gap-3">
                {[
                  { value: 'patient', icon: '🧑', title: 'Find a Doctor', sub: 'Book appointments' },
                  { value: 'doctor', icon: '🩺', title: 'Join as Doctor', sub: 'Manage practice' },
                ].map((r) => (
                  <label
                    key={r.value}
                    className={`flex flex-col gap-1 p-4 rounded-xl border-2 cursor-pointer transition
                      ${selectedRole === r.value ? 'border-[#2d6be4] bg-blue-50' : 'border-gray-100 bg-gray-50 hover:border-gray-200'}`}
                  >
                    <input {...register('role')} type="radio" value={r.value} className="hidden" />
                    <span className="text-2xl">{r.icon}</span>
                    <span className={`text-sm font-semibold ${selectedRole === r.value ? 'text-[#2d6be4]' : 'text-gray-700'}`}>{r.title}</span>
                    <span className="text-xs text-gray-400">{r.sub}</span>
                  </label>
                ))}
              </div>
            </div>

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
                  placeholder="Create a password"
                  className="w-full border border-gray-200 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#2d6be4] focus:border-transparent transition pr-16"
                />
                <button type="button" onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-[#2d6be4] text-xs font-semibold">
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
                  Creating account...
                </span>
              ) : 'Create Account'}
            </button>

            <p className="text-xs text-gray-400 text-center">
              By registering, you agree to our{' '}
              <span className="text-[#2d6be4] cursor-pointer hover:underline">Terms</span> &{' '}
              <span className="text-[#2d6be4] cursor-pointer hover:underline">Privacy Policy</span>
            </p>
          </form>

          <p className="text-center text-sm text-gray-400 mt-4">
            Already have an account?{' '}
            <Link href="/auth/login" className="text-[#2d6be4] font-semibold hover:underline">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  );
}
