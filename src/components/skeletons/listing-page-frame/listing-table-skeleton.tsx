import Background from "@/components/ui/background"
import { Skeleton } from "@/components/ui/skeleton"

export default function ListingTableSkeleton() {
	return (
		<Background
			className="flex w-full flex-col gap-6 px-4 py-6"
			style={{ height: "calc(100dvh - 14rem" }}
		>
			{/* Table Header Actions */}
			<div className="flex h-12 w-full items-center justify-between">
				<Skeleton className="h-8 w-4/12" />

				<div className="flex flex-1 items-center justify-end gap-1.5">
					<Skeleton className="h-8 w-4/12" />
					<Skeleton className="h-8 w-1/12" />
				</div>
			</div>

			{/* Table */}
			<Background className="overflow-hidden rounded-[14px]">
				<div
					className="w-full px-4 py-8"
					style={{ height: `calc(100vh - 25.5rem)` }}
				>
					{/* Header */}
					<Skeleton className="mb-6 h-10 w-full" />

					{/* Body */}
					{[...Array(10)].map((_, index) => (
						<div
							key={index}
							className="flex h-12 w-full items-center gap-4"
						>
							{[...Array(6)].map((_, index) => (
								<Skeleton
									key={index}
									className="h-8 w-1/6"
								/>
							))}
						</div>
					))}
				</div>
			</Background>

			{/* Table Foooter */}
			<div className="flex h-10 items-center justify-between">
				<Skeleton className="h-8 w-2/12" />
				<Skeleton className="h-8 w-3/12" />
			</div>
		</Background>
	)
}
