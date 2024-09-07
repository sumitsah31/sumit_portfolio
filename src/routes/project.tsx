import { FaExternalLinkAlt } from "react-icons/fa"

export default function Project() {
	return (
		<div className="flex w-full flex-col gap-2 p-12">
			<p className="text-6xl">
				Proj<span className="text-teal-400">ects</span>
			</p>
			<div className="w-[90%] border border-teal-400" />
			<div className="flex flex-col gap-5">
				<div>
					<div className="flex items-center gap-2 underline underline-offset-4">
						<a
							href="https://www.apxor.com/"
							target="_blank"
						>
							<FaExternalLinkAlt
								size={"12px"}
								className="text-teal-400"
							/>
						</a>
						<p className="text-xl">Apxor Private Limited: </p>
					</div>
					<p className="mb-2 italic">
						Software Development Engineer-I (May,2023- Present)
					</p>
					<p>
						I work as a Full Stack Developer on a large-scale project with a
						dedicated and extensive team, including developers specializing in
						SDKs, back-end, front-end, QA, and product. I have architected and
						designed reusable React components and algorithms for optimizing the
						dashboard, contributing to a more efficient and scalable system.
					</p>
					<div className="text-sm">
						<p> Technology used :</p>
						<li>React JS with TypeScript, JavaScript</li>
						<li>Zustand, React-tracked, Redux, Zov, Zod </li>
						<li>Tailwind CSS, Material UI</li>
						<li>GoLang</li>
						<li>Tanstack Query, Tanstack Table etc</li>
						<li>Gitlab, CI/CD</li>
					</div>
				</div>
				<div>
					<div className="flex items-center gap-2 underline underline-offset-4">
						<a
							href="https://cerclex.com/"
							target="_blank"
						>
							<FaExternalLinkAlt
								size={"12px"}
								className="text-teal-400"
							/>
						</a>
						<p className="text-xl">Infinite Cercle X: </p>
					</div>
					<p className="mb-2 italic">
						Junior Developer (September,2022- April 2023)
					</p>
					<p>
						Designed and implemented a scalable architecture for a full stack
						project using React JS and Java Spring Boot, achieved a codebase
						reduction of 20 percent through effective refactoring and
						modularization strategies.
					</p>
					<div className="text-sm">
						<p> Technology used :</p>
						<li>React JS with Typescript</li>
						<li>Context API</li>
						<li>Material UI</li>
						<li>SpringBoot</li>
						<li>Tanstack Libraries like table, charts etc</li>
					</div>
				</div>
			</div>
		</div>
	)
}
