import SideBar from "@/components/sidebars"
import { Outlet } from "@tanstack/react-router"

export default function RootComponent() {
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
