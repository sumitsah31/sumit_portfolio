import Sidebar from "../sidebar"
import { dashboardLevelSidebarItems } from "./data"

export default function SideBar() {
	return (
		<Sidebar.Root
			key={"1"}
			items={dashboardLevelSidebarItems}
			level={"dashboard"}
		>
			<Sidebar.Content>
				{({ groups }) => (
					<>
						{groups.map(group => (
							<Sidebar.Group key={group.label}>
								<Sidebar.GroupItemsList>
									{group?.children?.map(child => (
										<Sidebar.GroupItem
											key={child.label}
											child={child}
										/>
									))}
								</Sidebar.GroupItemsList>
							</Sidebar.Group>
						))}
					</>
				)}
			</Sidebar.Content>
		</Sidebar.Root>
	)
}
