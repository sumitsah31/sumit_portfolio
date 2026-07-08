import type { ExperienceItem } from "@/data/portfolio-data"
import { supabase } from "@/lib/supabase"
import { Pencil, Plus, Trash2 } from "lucide-react"
import { type FormEvent, useEffect, useState } from "react"

const emptyExp: Omit<ExperienceItem, "id"> = {
	company: "",
	role: "",
	start_date: "",
	end_date: "",
	description: [""],
	tech_stack: [],
	company_url: "",
	sort_order: 0,
}

export default function ExperienceManager() {
	const [items, setItems] = useState<ExperienceItem[]>([])
	const [editing, setEditing] = useState<ExperienceItem | null>(null)
	const [isNew, setIsNew] = useState(false)

	const load = async () => {
		const { data } = await supabase
			.from("experiences")
			.select("*")
			.order("sort_order")
		if (data) setItems(data)
	}

	useEffect(() => {
		load()
	}, [])

	const openNew = () => {
		setEditing({ ...emptyExp, sort_order: items.length } as ExperienceItem)
		setIsNew(true)
	}

	const openEdit = (item: ExperienceItem) => {
		setEditing({ ...item })
		setIsNew(false)
	}

	const handleSave = async (e: FormEvent) => {
		e.preventDefault()
		if (!editing) return

		const { id, ...rest } = editing
		if (isNew) {
			await supabase.from("experiences").insert(rest)
		} else {
			await supabase.from("experiences").update(rest).eq("id", id)
		}
		setEditing(null)
		load()
	}

	const handleDelete = async (id: string) => {
		await supabase.from("experiences").delete().eq("id", id)
		load()
	}

	if (editing) {
		return (
			<form
				onSubmit={handleSave}
				className="flex flex-col gap-4"
			>
				<h2 className="text-lg font-semibold">
					{isNew ? "Add Experience" : "Edit Experience"}
				</h2>
				<input
					value={editing.company}
					onChange={e => setEditing({ ...editing, company: e.target.value })}
					placeholder="Company"
					required
					className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none focus:border-violet-500"
				/>
				<input
					value={editing.role}
					onChange={e => setEditing({ ...editing, role: e.target.value })}
					placeholder="Role"
					required
					className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none focus:border-violet-500"
				/>
				<div className="grid grid-cols-2 gap-4">
					<input
						value={editing.start_date}
						onChange={e =>
							setEditing({ ...editing, start_date: e.target.value })
						}
						placeholder="Start Date (e.g. May 2023)"
						required
						className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none focus:border-violet-500"
					/>
					<input
						value={editing.end_date}
						onChange={e => setEditing({ ...editing, end_date: e.target.value })}
						placeholder="End Date (e.g. Present)"
						required
						className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none focus:border-violet-500"
					/>
				</div>
				<input
					value={editing.company_url || ""}
					onChange={e =>
						setEditing({ ...editing, company_url: e.target.value || null })
					}
					placeholder="Company URL (optional)"
					className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none focus:border-violet-500"
				/>
				<input
					value={editing.tech_stack.join(", ")}
					onChange={e =>
						setEditing({
							...editing,
							tech_stack: e.target.value
								.split(",")
								.map(s => s.trim())
								.filter(Boolean),
						})
					}
					placeholder="Tech Stack (comma separated)"
					className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none focus:border-violet-500"
				/>
				<div className="flex flex-col gap-2">
					<label className="text-sm text-neutral-400">
						Description (one bullet per line)
					</label>
					<textarea
						value={editing.description.join("\n")}
						onChange={e =>
							setEditing({
								...editing,
								description: e.target.value.split("\n"),
							})
						}
						rows={4}
						className="resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none focus:border-violet-500"
					/>
				</div>
				<input
					type="number"
					value={editing.sort_order}
					onChange={e =>
						setEditing({ ...editing, sort_order: Number(e.target.value) })
					}
					placeholder="Sort Order"
					className="w-32 rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none focus:border-violet-500"
				/>
				<div className="flex gap-3">
					<button
						type="submit"
						className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-2.5 text-sm font-semibold text-white"
					>
						Save
					</button>
					<button
						type="button"
						onClick={() => setEditing(null)}
						className="rounded-xl border border-white/10 px-6 py-2.5 text-sm text-neutral-400 hover:bg-white/5"
					>
						Cancel
					</button>
				</div>
			</form>
		)
	}

	return (
		<div>
			<div className="mb-6 flex items-center justify-between">
				<h2 className="text-lg font-semibold">Experiences</h2>
				<button
					onClick={openNew}
					className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500"
				>
					<Plus size={16} />
					Add
				</button>
			</div>

			<div className="flex flex-col gap-4">
				{items.map(item => (
					<div
						key={item.id}
						className="flex items-start justify-between rounded-xl border border-white/10 bg-white/5 p-4"
					>
						<div>
							<p className="font-medium text-white">{item.company}</p>
							<p className="text-sm text-violet-300">{item.role}</p>
							<p className="text-xs text-neutral-500">
								{item.start_date} — {item.end_date}
							</p>
						</div>
						<div className="flex gap-2">
							<button
								onClick={() => openEdit(item)}
								className="rounded-lg p-2 text-neutral-400 hover:bg-white/5 hover:text-white"
							>
								<Pencil size={14} />
							</button>
							<button
								onClick={() => item.id && handleDelete(item.id)}
								className="rounded-lg p-2 text-neutral-400 hover:bg-red-500/10 hover:text-red-400"
							>
								<Trash2 size={14} />
							</button>
						</div>
					</div>
				))}
				{items.length === 0 && (
					<p className="text-sm text-neutral-500">
						No experiences yet. Click Add to create one.
					</p>
				)}
			</div>
		</div>
	)
}
