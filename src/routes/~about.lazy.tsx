import { createLazyFileRoute } from "@tanstack/react-router"
import About from "./about"

export const Route = createLazyFileRoute("/about")({
	component: () => <About />,
})
