import { createClient, type SupabaseClient } from "@supabase/supabase-js"

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || ""
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || ""

export const isSupabaseConfigured =
	(supabaseUrl.startsWith("https://") || supabaseUrl.startsWith("http://")) &&
	supabaseAnonKey.length > 10

// Create a real client if configured, otherwise a dummy that returns empty results
export const supabase: SupabaseClient = isSupabaseConfigured
	? createClient(supabaseUrl, supabaseAnonKey)
	: (new Proxy({} as SupabaseClient, {
			get(_target, prop) {
				if (prop === "auth") {
					return {
						getSession: () => Promise.resolve({ data: { session: null } }),
						onAuthStateChange: () => ({
							data: { subscription: { unsubscribe: () => {} } },
						}),
						signInWithPassword: () =>
							Promise.resolve({ error: { message: "Supabase not configured" } }),
						signOut: () => Promise.resolve({}),
					}
				}
				if (prop === "from") {
					return () => ({
						select: () => ({
							order: () => Promise.resolve({ data: [] }),
						}),
						insert: () => Promise.resolve({ error: null }),
						update: () => ({
							eq: () => Promise.resolve({ error: null }),
						}),
						delete: () => ({
							eq: () => Promise.resolve({ error: null }),
						}),
					})
				}
				if (prop === "storage") {
					return {
						from: () => ({
							getPublicUrl: () => ({ data: { publicUrl: "" } }),
							upload: () => Promise.resolve({ error: { message: "Not configured" } }),
							remove: () => Promise.resolve({ error: null }),
						}),
					}
				}
				return () => {}
			},
		}) as unknown as SupabaseClient)
