import { FaHome } from "react-icons/fa"
import { GiSkills } from "react-icons/gi"
import { GoProjectSymlink } from "react-icons/go"
import {
	PiSquaresFourFill as DashboardActiveIcon,
	PiSquaresFourDuotone as DashboardInactiveIcon,
} from "react-icons/pi"
import type { SidebarItem } from "../sidebar/utils"

export const dashboardLevelSidebarItems: SidebarItem[] = [
	{
		label: "Dashboard",
		children: [
			{
				label: "Home",
				href: "home",
				icon: <FaHome className="size-5 fill-teal-400" />,
				inactiveIcon: <FaHome className="size-5" />,
			},
			{
				label: "About",
				href: "about",
				icon: <DashboardActiveIcon className="size-5 fill-teal-400" />,
				inactiveIcon: <DashboardInactiveIcon className="size-5" />,
			},
			{
				label: "Experience",
				href: "experience",
				icon: <GiSkills className="size-5 fill-teal-400" />,
				inactiveIcon: <GiSkills className="size-5" />,
			},
			{
				label: "Projects",
				href: "project",
				icon: <GoProjectSymlink className="size-5 fill-teal-400" />,
				inactiveIcon: <GoProjectSymlink className="size-5" />,
			},
		],
		// category: "Dashboard",
	},
]
