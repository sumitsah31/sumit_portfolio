import { createLazyFileRoute } from "@tanstack/react-router"

export const Route = createLazyFileRoute("/project")({
	component: () => <div>Hello /project!</div>,
})
