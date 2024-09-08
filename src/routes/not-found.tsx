import { useNavigate } from "@tanstack/react-router"

export default function NotFound() {
	const navigate = useNavigate()
	return (
		<div className="flex h-full w-full items-center justify-center">
			Not Found{" "}
			<span
				className="text-teal-400 hover:cursor-pointer"
				onClick={() => navigate({ to: "/home" })}
			>
				{" "}
				Go to Home
			</span>
		</div>
	)
}
