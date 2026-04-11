import { supabase } from "@/lib/supabase"
import { useState } from "react"
import ExperienceManager from "./experience-manager"
import ProjectManager from "./project-manager"
import TravelManager from "./travel-manager"

const tabs = ["Experiences", "Projects", "Travel Photos"] as const
type Tab = (typeof tabs)[number]

export default function AdminDashboard() {
	const [activeTab, setActiveTab] = useState<Tab>("Experiences")

	const handleLogout = async () => {
		await supabase.auth.signOut()
	}

	return (
		<div className="min-h-screen bg-[#0a0a0f] font-sans text-white">
			{/* Header */}
			<header className="border-b border-white/10 px-6 py-4">
				<div className="mx-auto flex max-w-5xl items-center justify-between">
					<h1 className="text-lg font-bold">
						<span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
							Admin
						</span>{" "}
						Dashboard
					</h1>
					<button
						onClick={handleLogout}
						className="rounded-lg border border-white/10 px-4 py-2 text-sm text-neutral-400 transition-colors hover:bg-white/5 hover:text-white"
					>
						Logout
					</button>
				</div>
			</header>

			{/* Tabs */}
			<div className="border-b border-white/10 px-6">
				<div className="mx-auto flex max-w-5xl gap-1">
					{tabs.map(tab => (
						<button
							key={tab}
							onClick={() => setActiveTab(tab)}
							className={`border-b-2 px-4 py-3 text-sm font-medium transition-colors ${
								activeTab === tab
									? "border-violet-500 text-white"
									: "border-transparent text-neutral-400 hover:text-white"
							}`}
						>
							{tab}
						</button>
					))}
				</div>
			</div>

			{/* Content */}
			<div className="mx-auto max-w-5xl px-6 py-8">
				{activeTab === "Experiences" && <ExperienceManager />}
				{activeTab === "Projects" && <ProjectManager />}
				{activeTab === "Travel Photos" && <TravelManager />}
			</div>
		</div>
	)
}
