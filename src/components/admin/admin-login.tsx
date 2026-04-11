import { supabase } from "@/lib/supabase"
import { type FormEvent, useState } from "react"

interface AdminLoginProps {
	onLogin: () => void
}

export default function AdminLogin({ onLogin }: AdminLoginProps) {
	const [email, setEmail] = useState("")
	const [password, setPassword] = useState("")
	const [error, setError] = useState("")
	const [loading, setLoading] = useState(false)

	const handleSubmit = async (e: FormEvent) => {
		e.preventDefault()
		setLoading(true)
		setError("")

		const { error } = await supabase.auth.signInWithPassword({
			email,
			password,
		})

		if (error) {
			setError(error.message)
			setLoading(false)
		} else {
			onLogin()
		}
	}

	return (
		<div className="flex min-h-screen items-center justify-center bg-[#0a0a0f] px-4">
			<div className="w-full max-w-sm">
				<h1 className="mb-8 text-center text-2xl font-bold text-white">
					Admin Login
				</h1>

				<form
					onSubmit={handleSubmit}
					className="flex flex-col gap-4"
				>
					<input
						type="email"
						value={email}
						onChange={e => setEmail(e.target.value)}
						placeholder="Email"
						required
						className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none focus:border-violet-500"
					/>
					<input
						type="password"
						value={password}
						onChange={e => setPassword(e.target.value)}
						placeholder="Password"
						required
						className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none focus:border-violet-500"
					/>
					{error && <p className="text-sm text-red-400">{error}</p>}
					<button
						type="submit"
						disabled={loading}
						className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 py-3 text-sm font-semibold text-white transition-all hover:from-violet-500 hover:to-indigo-500 disabled:opacity-50"
					>
						{loading ? "Signing in..." : "Sign In"}
					</button>
				</form>
			</div>
		</div>
	)
}
