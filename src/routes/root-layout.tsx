import SideBar from "@/components/sidebars"
import { Outlet } from "@tanstack/react-router"

export default function RootComponent() {
	return (
		<div
			vaul-drawer-wrapper=""
			className="flex h-screen bg-slate-50 font-sans text-slate-950 subpixel-antialiased"
		>
			<SideBar />
			<Outlet />
		</div>
	)
}
