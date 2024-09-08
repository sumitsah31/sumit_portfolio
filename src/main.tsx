import { RouterProvider, createRouter } from "@tanstack/react-router"
import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import { routeTree } from "./routeTree.gen.ts"
import NotFound from "./routes/not-found.tsx"
const router = createRouter({ routeTree, defaultNotFoundComponent: NotFound })
declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router
	}
}
ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<div>
			<RouterProvider router={router} />
		</div>
	</React.StrictMode>,
)
