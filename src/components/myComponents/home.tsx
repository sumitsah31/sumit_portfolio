import { FaLinkedinIn, FaTwitter } from "react-icons/fa"
import { SiLeetcode } from "react-icons/si"
import { Button } from "../ui/button"
import homeImage from "./../../assets/homeImage.jpg"

export default function Home() {
	return (
		<div className="flex">
			<div className="flex h-full w-[60%] flex-col justify-center gap-2 px-3">
				<span className="text-3xl font-bold">SUMIT KUMAR SAH </span>
				<span className="text-xl font-semibold">Frontend Developer</span>
				<span className="font-thin">
					I am passionate about creating beautiful and user-friendly websites
					using the latest web technologies such as React, TypeScript, Tailwind
					CSS, MUI, etc. With attention to detail and user experience, my keen
					eye for design and eagerness to learn new things have helped me stay
					up-to-date with the latest trends in web development.
				</span>
				<div className="flex justify-center gap-3">
					<Button
						variant="ghost"
						size="icon"
						className="rounded-full"
					>
						<FaLinkedinIn />
					</Button>
					<Button
						variant="ghost"
						size="icon"
						className="rounded-full"
					>
						<FaTwitter />
					</Button>
					<Button
						variant="ghost"
						size="icon"
						className="rounded-full"
					>
						<SiLeetcode />
					</Button>
				</div>
			</div>
			<img
				src={homeImage}
				alt="img"
				className="h-full w-[40%]"
			/>
		</div>
	)
}
