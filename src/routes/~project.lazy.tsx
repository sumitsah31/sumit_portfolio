import { createLazyFileRoute } from "@tanstack/react-router"
import Project from "./project"

export const Route = createLazyFileRoute("/project")({
	component: () => <Project />,
})
