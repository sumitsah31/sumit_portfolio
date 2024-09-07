import { createLazyFileRoute } from "@tanstack/react-router"
import Experience from "./experience"

export const Route = createLazyFileRoute("/experience")({
	component: () => <Experience />,
})
