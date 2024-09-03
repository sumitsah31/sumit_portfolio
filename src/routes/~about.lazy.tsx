import Home from "@/components/myComponents/home"
import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/about")({
	component: () => <Home />,
})
