import type { HTMLAttributes } from "react"

export default function ListingPageFrame({
	children,
	...rest
}: HTMLAttributes<HTMLDivElement>) {
	return (
		<div
			{...rest}
			className="flex w-full flex-col gap-4 px-8"
			// style={{ height: "calc(100vh - var(--primary-header-height))" }}
		>
			{children}
		</div>
	)
}
