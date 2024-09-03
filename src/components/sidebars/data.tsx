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
				label: "home",
				href: "/",
				icon: <DashboardActiveIcon className="size-5 fill-blue-800" />,
				inactiveIcon: <DashboardInactiveIcon className="size-5" />,
			},
			{
				label: "about",
				href: "about",
				icon: <DashboardActiveIcon className="size-5 fill-blue-800" />,
				inactiveIcon: <DashboardInactiveIcon className="size-5" />,
			},
		],
		// category: "Dashboard",
	},
]
