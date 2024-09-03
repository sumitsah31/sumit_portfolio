import {
	Tooltip,
	TooltipContent,
	TooltipProvider,
	TooltipTrigger,
} from "@/components/ui/tooltip"

export default function SidebarHeader() {
	return (
		<div className="relative h-20 w-full px-6 py-2">
			{/* Apxor Logo */}
			<div className="flex h-full items-center justify-start gap-x-3">
				{/* <ApxorLogo className="size-10 rounded-md border-blue-50 bg-slate-100" /> */}
				<span className="text-2xl font-normal tracking-wider text-slate-950">
					Apxor
				</span>
			</div>

			{/* Collapse Button */}
			<TooltipProvider>
				<Tooltip>
					<TooltipContent>Collapse Menu</TooltipContent>
					<TooltipTrigger asChild>
						{/* <Button
						size="icon"
						variant="unstyled"
						onClick={toggleSidebar}
						className={cn(
							"absolute -right-4 top-1/2 z-20 size-8 -translate-y-1/2 transform rounded-full bg-slate-200 ring-4 ring-slate-50 transition-all duration-200 ease-in-out",
							"group hover:ring-slate-100",
						)}
					>
						<TbChevronsLeft className="size-4 stroke-slate-950 transition-colors duration-200 ease-in-out group-hover:stroke-blue-800" />
					</Button> */}
					</TooltipTrigger>
				</Tooltip>
			</TooltipProvider>
		</div>
	)
}

SidebarHeader.displayName = "Sidebar.Header"
