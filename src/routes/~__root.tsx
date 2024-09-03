import { createRootRoute } from "@tanstack/react-router"
import RootComponent from "./root-layout"

export const Route = createRootRoute({
	component: () => <RootComponent />,
})
