import SectionWrapper from "@/components/layout/section-wrapper"
import { isSupabaseConfigured, supabase } from "@/lib/supabase"
import { motion } from "framer-motion"
import { MapPin } from "lucide-react"
import { useEffect, useState } from "react"

interface TravelPhoto {
	id: string
	image_path: string
	location: string
	tags: string[]
	sort_order: number
}

export default function Travel() {
	const [photos, setPhotos] = useState<TravelPhoto[]>([])
	const [loading, setLoading] = useState(true)

	useEffect(() => {
		if (!isSupabaseConfigured) {
			setLoading(false)
			return
		}
		supabase
			.from("travel_photos")
			.select("*")
			.order("sort_order")
			.then(({ data }) => {
				if (data) setPhotos(data)
				setLoading(false)
			})
	}, [])

	// Hide section if no photos
	if (!loading && photos.length === 0) return null

	const getImageUrl = (path: string) => {
		const { data } = supabase.storage
			.from("travel-photos")
			.getPublicUrl(path)
		return data.publicUrl
	}

	return (
		<SectionWrapper id="travel">
			<h2 className="mb-12 text-3xl font-bold sm:text-4xl lg:text-5xl">
				Places I've{" "}
				<span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
					Explored
				</span>
			</h2>

			<div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
				{photos.map((photo, i) => (
					<motion.div
						key={photo.id}
						initial={{ opacity: 0, y: 20 }}
						whileInView={{ opacity: 1, y: 0 }}
						transition={{ delay: i * 0.05 }}
						viewport={{ once: true }}
						className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/5"
					>
						<div className="aspect-[4/3] overflow-hidden">
							<img
								src={getImageUrl(photo.image_path)}
								alt={photo.location}
								className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-110"
								loading="lazy"
							/>
						</div>

						{/* Overlay on hover */}
						<div className="absolute inset-0 flex flex-col justify-end bg-gradient-to-t from-black/80 via-black/20 to-transparent p-4 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
							<div className="flex items-center gap-1.5 text-sm font-medium text-white">
								<MapPin size={14} className="text-violet-400" />
								{photo.location}
							</div>
							{photo.tags.length > 0 && (
								<div className="mt-2 flex flex-wrap gap-1.5">
									{photo.tags.map(tag => (
										<span
											key={tag}
											className="rounded-full bg-white/20 px-2 py-0.5 text-xs text-white/80"
										>
											{tag}
										</span>
									))}
								</div>
							)}
						</div>

						{/* Always visible location label */}
						<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-3 transition-opacity duration-300 group-hover:opacity-0">
							<div className="flex items-center gap-1.5 text-xs text-white/80">
								<MapPin size={12} className="text-violet-400" />
								{photo.location}
							</div>
						</div>
					</motion.div>
				))}
			</div>
		</SectionWrapper>
	)
}
