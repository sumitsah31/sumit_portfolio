import { Children, type PropsWithChildren } from "react"

export default function SidebarGroup(props: PropsWithChildren) {
	let { children } = props

	const GroupHeading = Children.toArray(children).find(
		(child: any) => child.type.displayName === "Sidebar.GroupHeader",
	) as React.ReactElement

	children = Children.toArray(children).find(
		(child: any) => child.type.displayName !== "Sidebar.GroupHeader",
	)

	return (
		<div className="mt-2 flex flex-col space-y-2">
			{/* Group Header */}
			{typeof GroupHeading !== "undefined" && GroupHeading}

			{/* Group Items */}
			<div className="flex flex-col gap-y-1 tracking-normal">{children}</div>
		</div>
	)
}

SidebarGroup.displayName = "Sidebar.Group"
