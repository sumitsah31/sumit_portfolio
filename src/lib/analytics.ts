import { track } from "@vercel/analytics"

// Centralized, typed custom events so names stay consistent across the app.
// `track` is a no-op in dev and only sends from the production Vercel deploy.
export const analytics = {
	viewWork: () => track("view_work"),
	downloadCV: (location: "hero" | "nav" | "mobile") =>
		track("download_cv", { location }),
	projectClick: (name: string, source: string) =>
		track("project_click", { project: name, source: source || "none" }),
	contactSubmit: (method: "supabase" | "mailto") =>
		track("contact_submit", { method }),
}
