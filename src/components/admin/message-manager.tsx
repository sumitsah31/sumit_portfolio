import { supabase } from "@/lib/supabase"
import { Mail, Trash2 } from "lucide-react"
import { useEffect, useState } from "react"

type ContactMessage = {
	id: string
	name: string
	email: string
	message: string
	created_at: string
}

export default function MessageManager() {
	const [items, setItems] = useState<ContactMessage[]>([])

	const load = async () => {
		const { data } = await supabase
			.from("contact_messages")
			.select("*")
			.order("created_at", { ascending: false })
		if (data) setItems(data as ContactMessage[])
	}

	useEffect(() => {
		load()
	}, [])

	const handleDelete = async (id: string) => {
		await supabase.from("contact_messages").delete().eq("id", id)
		load()
	}

	return (
		<div>
			<div className="mb-6 flex items-center justify-between">
				<h2 className="text-lg font-semibold">Messages</h2>
			</div>

			<div className="flex flex-col gap-4">
				{items.map(item => (
					<div
						key={item.id}
						className="flex items-start justify-between gap-4 rounded-xl border border-white/10 bg-white/5 p-4"
					>
						<div className="min-w-0">
							<div className="flex flex-wrap items-center gap-2">
								<p className="font-medium text-white">{item.name}</p>
								<a
									href={`mailto:${item.email}`}
									className="inline-flex items-center gap-1 text-xs text-violet-300 hover:text-violet-200"
								>
									<Mail size={12} />
									{item.email}
								</a>
							</div>
							<p className="mt-2 whitespace-pre-wrap break-words text-sm text-neutral-300">
								{item.message}
							</p>
							<p className="mt-2 text-xs text-neutral-500">
								{new Date(item.created_at).toLocaleString()}
							</p>
						</div>
						<button
							onClick={() => handleDelete(item.id)}
							className="shrink-0 rounded-lg p-2 text-neutral-400 hover:bg-red-500/10 hover:text-red-400"
						>
							<Trash2 size={14} />
						</button>
					</div>
				))}
				{items.length === 0 && (
					<p className="text-sm text-neutral-500">No messages yet.</p>
				)}
			</div>
		</div>
	)
}
