import SectionWrapper from "@/components/layout/section-wrapper"
import PolaroidCard from "@/components/ui/polaroid-card"
import SectionMarker from "@/components/ui/section-marker"
import { isSupabaseConfigured, supabase } from "@/lib/supabase"
import { useEffect, useState } from "react"

interface TravelPhoto {
	id: string
	image_path: string
	location: string
	tags: string[]
	sort_order: number
	taken_at?: string | null
}

// Format taken_at (or fall back to first tag) into "MMM YYYY".
const formatDate = (raw: string | null | undefined, fallback: string) => {
	if (!raw) return fallback
	const d = new Date(raw)
	if (Number.isNaN(d.getTime())) return fallback
	return d.toLocaleDateString("en-US", { month: "short", year: "numeric" })
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
		if (!path) return null
		const { data } = supabase.storage.from("travel-photos").getPublicUrl(path)
		return data.publicUrl
	}

	return (
		<SectionWrapper id="travel">
			<SectionMarker name="travel" />
			<h2 className="mb-12 text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
				Postcards{" "}
				<span className="font-serif font-normal italic">from the road.</span>
			</h2>

			<div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
				{photos.map((photo, i) => (
					<PolaroidCard
						key={photo.id}
						index={i}
						imageSrc={getImageUrl(photo.image_path)}
						imageAlt={photo.location}
						title={photo.location}
						subtitle={formatDate(photo.taken_at, photo.tags?.[0] ?? "—")}
					/>
				))}
			</div>
		</SectionWrapper>
	)
}
