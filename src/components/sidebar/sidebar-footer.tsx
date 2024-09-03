import { cn } from "@/lib/utils"
import { Link } from "@tanstack/react-router"
import { MdLogout } from "react-icons/md"

import { PiAddressBookDuotone } from "react-icons/pi"

export default function SidebarFooter() {
	return (
		<>
			<div className={cn("border-neat flex flex-col gap-1 border-t px-4 py-1")}>
				<a
					target="_blank"
					rel="noopener noreferrer"
					href="https://guides.apxor.com/"
					className="rounded-md p-3 hover:bg-slate-100"
				>
					<span className="flex items-center gap-x-3 text-left">
						<PiAddressBookDuotone className="size-5 text-slate-600" />
						<span className="text-slate-600">User Guide</span>
					</span>
				</a>
				<Link
					to="/about"
					onClick={() => {}}
					className="rounded-md p-3 hover:bg-slate-100"
				>
					<span className="flex items-center gap-x-3 text-left">
						<MdLogout className="size-5 text-slate-600" />
						<span className="text-slate-600">Logout</span>
					</span>
				</Link>
			</div>
		</>
	)
}

SidebarFooter.displayName = "Sidebar.Footer"
