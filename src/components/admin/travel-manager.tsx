import { supabase } from "@/lib/supabase"
import { MapPin, Plus, Trash2 } from "lucide-react"
import { type FormEvent, useEffect, useRef, useState } from "react"

interface TravelPhoto {
	id: string
	image_path: string
	location: string
	tags: string[]
	sort_order: number
}

export default function TravelManager() {
	const [items, setItems] = useState<TravelPhoto[]>([])
	const [showForm, setShowForm] = useState(false)
	const [location, setLocation] = useState("")
	const [tags, setTags] = useState("")
	const [uploading, setUploading] = useState(false)
	const fileRef = useRef<HTMLInputElement>(null)

	const load = async () => {
		const { data } = await supabase
			.from("travel_photos")
			.select("*")
			.order("sort_order")
		if (data) setItems(data)
	}

	useEffect(() => {
		load()
	}, [])

	const getImageUrl = (path: string) => {
		const { data } = supabase.storage.from("travel-photos").getPublicUrl(path)
		return data.publicUrl
	}

	const handleUpload = async (e: FormEvent) => {
		e.preventDefault()
		const file = fileRef.current?.files?.[0]
		if (!file || !location) return

		setUploading(true)
		const ext = file.name.split(".").pop()
		const fileName = `${Date.now()}-${Math.random().toString(36).slice(2)}.${ext}`

		const { error: uploadError } = await supabase.storage
			.from("travel-photos")
			.upload(fileName, file)

		if (uploadError) {
			alert("Upload failed: " + uploadError.message)
			setUploading(false)
			return
		}

		await supabase.from("travel_photos").insert({
			image_path: fileName,
			location,
			tags: tags
				.split(",")
				.map(s => s.trim())
				.filter(Boolean),
			sort_order: items.length,
		})

		setLocation("")
		setTags("")
		setShowForm(false)
		setUploading(false)
		if (fileRef.current) fileRef.current.value = ""
		load()
	}

	const handleDelete = async (item: TravelPhoto) => {
		await supabase.storage.from("travel-photos").remove([item.image_path])
		await supabase.from("travel_photos").delete().eq("id", item.id)
		load()
	}

	return (
		<div>
			<div className="mb-6 flex items-center justify-between">
				<h2 className="text-lg font-semibold">Travel Photos</h2>
				<button
					onClick={() => setShowForm(true)}
					className="inline-flex items-center gap-2 rounded-xl bg-violet-600 px-4 py-2 text-sm font-medium text-white hover:bg-violet-500"
				>
					<Plus size={16} />
					Upload
				</button>
			</div>

			{showForm && (
				<form
					onSubmit={handleUpload}
					className="mb-8 flex flex-col gap-4 rounded-xl border border-white/10 bg-white/5 p-6"
				>
					<input
						ref={fileRef}
						type="file"
						accept="image/*"
						required
						className="text-sm text-neutral-400 file:mr-4 file:rounded-lg file:border-0 file:bg-violet-600 file:px-4 file:py-2 file:text-sm file:text-white"
					/>
					<input
						value={location}
						onChange={e => setLocation(e.target.value)}
						placeholder="Location (e.g. Goa, India)"
						required
						className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none focus:border-violet-500"
					/>
					<input
						value={tags}
						onChange={e => setTags(e.target.value)}
						placeholder="Tags (comma separated, e.g. beach, sunset)"
						className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none focus:border-violet-500"
					/>
					<div className="flex gap-3">
						<button
							type="submit"
							disabled={uploading}
							className="rounded-xl bg-gradient-to-r from-violet-600 to-indigo-600 px-6 py-2.5 text-sm font-semibold text-white disabled:opacity-50"
						>
							{uploading ? "Uploading..." : "Upload Photo"}
						</button>
						<button
							type="button"
							onClick={() => setShowForm(false)}
							className="rounded-xl border border-white/10 px-6 py-2.5 text-sm text-neutral-400 hover:bg-white/5"
						>
							Cancel
						</button>
					</div>
				</form>
			)}

			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{items.map(item => (
					<div
						key={item.id}
						className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5"
					>
						<img
							src={getImageUrl(item.image_path)}
							alt={item.location}
							className="aspect-[4/3] w-full object-cover"
						/>
						<div className="p-3">
							<div className="flex items-center gap-1.5 text-sm text-white">
								<MapPin
									size={12}
									className="text-violet-400"
								/>
								{item.location}
							</div>
							{item.tags.length > 0 && (
								<div className="mt-1.5 flex flex-wrap gap-1">
									{item.tags.map(tag => (
										<span
											key={tag}
											className="rounded-full bg-violet-500/10 px-2 py-0.5 text-xs text-violet-300"
										>
											{tag}
										</span>
									))}
								</div>
							)}
						</div>
						<button
							onClick={() => handleDelete(item)}
							className="absolute right-2 top-2 rounded-lg bg-black/60 p-1.5 text-neutral-400 opacity-0 transition-opacity hover:text-red-400 group-hover:opacity-100"
						>
							<Trash2 size={14} />
						</button>
					</div>
				))}
				{items.length === 0 && (
					<p className="text-sm text-neutral-500">
						No photos yet. Click Upload to add one.
					</p>
				)}
			</div>
		</div>
	)
}
