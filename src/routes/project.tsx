import { FaExternalLinkAlt } from "react-icons/fa"

export default function Project() {
	return (
		<div className="flex w-full flex-col gap-2 p-12">
			<p className="text-6xl">
				Proj<span className="text-teal-400">ects</span>
			</p>
			<div className="w-[90%] border border-teal-400" />
			<div className="flex flex-col gap-5">
				<div className="text-sm">
					<div className="flex items-center gap-2 underline underline-offset-4">
						<a
							href="https://engage.apxor.com/"
							target="_blank"
						>
							<FaExternalLinkAlt
								size={"12px"}
								className="text-teal-400"
							/>
						</a>
						<p className="text-base">New In- App Nudges: </p>
					</div>
					<p className="italic">
						Tech used: React Js with TypeScript, Shadcn Ui, Tanstack Query and
						table, Tailwind CSS, Zustand, Zod etc.
					</p>
					<li>
						We specialize in assisting consumer app developers in creating
						”In-app Nudges” on a no-code dashboard to enhance user satisfaction,
						engagement, conversions, and retention, ultimately leading to
						revenue growth. Additionally, we provide data and analytics
						regarding these ”In-App” nudges.
					</li>
					<li>
						The platform serves as a unified platform for various app platforms
						like Web, iOS, and Android.
					</li>
					<li>
						Personally, I have developed numerous features in the platform,
						including configuration, simulator, analysis, etc.
					</li>
					<li>
						The platform includes integrating and creating nudges for apps,
						testing, and collecting the data of user engagement
					</li>
				</div>
				<div className="text-sm">
					<div className="flex items-center gap-2 underline underline-offset-4">
						<a
							href="https://Nudges.apxor.com/"
							target="_blank"
						>
							<FaExternalLinkAlt
								size={"12px"}
								className="text-teal-400"
							/>
						</a>
						<p className="text-base"> In- App Nudges: </p>
					</div>
					<p className="italic">
						Tech used: React Js with JavaScript, Material UI(V4),React-Tracked,
						Tanstack Query and table, Zustand, Zod etc.
					</p>
					<li>Old Dashboard for Nudges, campaign and survey.</li>
					<li>
						The platform serves as a unified platform for various app platforms
						like Web, iOS, and Android.
					</li>
					<li>
						Personally, I have developed numerous features in the platform,
						including configuration, simulator, analysis, etc.
					</li>
					<li>
						The platform includes integrating and creating nudges for apps,
						testing, and collecting the data of user engagement
					</li>
				</div>
				<div className="text-sm">
					<div className="flex items-center gap-2 underline underline-offset-4">
						<a
							href="https://epr.cerclex.com/dashboard"
							target="_blank"
						>
							<FaExternalLinkAlt
								size={"12px"}
								className="text-teal-400"
							/>
						</a>
						<p className="text-base">
							Extended Producers Responsibility (EPR) dashboard:
						</p>
					</div>
					<p className="italic">
						Tech used: React Js with TypeScript, Material UI (V5), Context API,
						Tanstack Charts.
					</p>
					<li>Web2, Web3 and Blockchain Integrated dashboard</li>
					<li>
						Created a web application for a marketplace model use-case that
						addresses the EPR liability of MNCs and big industries struggling to
						meet their waste targets.
					</li>
					<li>
						Designed relevant dashboards tailored for user types such as brands,
						recyclers, and aggregators with features such as creating
						deliveries, accepting invoices, managing targets, and generating
						time range-based reports and invoices, etc.
					</li>
					<li>
						Integrated blockchain using the Solidity network to maintain
						transparency of the actual waste recycled and maintain the integrity
						of the generated certificates.
					</li>
				</div>
			</div>
		</div>
	)
}
