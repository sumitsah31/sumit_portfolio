import { supabase } from "@/lib/supabase"
import { useEffect, useState } from "react"
import AdminDashboard from "./admin-dashboard"
import AdminLogin from "./admin-login"

export default function AdminApp() {
	const [authenticated, setAuthenticated] = useState(false)
	const [checking, setChecking] = useState(true)

	useEffect(() => {
		supabase.auth.getSession().then(({ data: { session } }) => {
			setAuthenticated(!!session)
			setChecking(false)
		})

		const {
			data: { subscription },
		} = supabase.auth.onAuthStateChange((_event, session) => {
			setAuthenticated(!!session)
		})

		return () => subscription.unsubscribe()
	}, [])

	if (checking) {
		return (
			<div className="flex min-h-screen items-center justify-center bg-[#0a0a0f]">
				<p className="text-neutral-500">Loading...</p>
			</div>
		)
	}

	if (!authenticated) {
		return <AdminLogin onLogin={() => setAuthenticated(true)} />
	}

	return <AdminDashboard />
}
