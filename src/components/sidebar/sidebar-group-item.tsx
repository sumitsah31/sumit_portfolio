import { cn } from "@/lib/utils"
import { Link, useLocation } from "@tanstack/react-router"
import type { SidebarItem } from "./utils"

interface SidebarGroupItemProps {
	child: SidebarItem
}

export default function SidebarGroupItem({ child }: SidebarGroupItemProps) {
	const { pathname } = useLocation()
	const isActive = pathname.split("/").includes(child.href!)

	return (
		<Link
			key={child.label}
			to={`/${child.href}`}
			className={cn(
				"group flex items-center rounded-sm text-lg transition-all duration-200 ease-in-out",
				"justify-between hover:bg-slate-100",
			)}
		>
			<span
				className={cn(
					"flex items-center space-x-3",
					isActive ? "text-teal-400" : "text-slate-600",
				)}
			>
				{/* Icon */}
				{isActive ? child.icon : child.inactiveIcon}

				{/* Label */}
				<span
					className={cn(
						isActive ? "text-teal-400 group-hover:text-blue-800" : "",
					)}
				>
					{child.label}
				</span>
			</span>
		</Link>
	)
}

SidebarGroupItem.displayName = "Sidebar.GroupItem"
