import SideBar from "@/components/sidebars"
import { Outlet, useNavigate } from "@tanstack/react-router"
import { useEffect } from "react"

export default function RootComponent() {
	const navigate = useNavigate()
	useEffect(() => {
		navigate({ to: "/home" })
	}, [])
	return (
		<div
			vaul-drawer-wrapper=""
			className="flex h-screen bg-slate-900 font-mono text-white subpixel-antialiased"
		>
			<SideBar />
			<Outlet />
		</div>
	)
}
