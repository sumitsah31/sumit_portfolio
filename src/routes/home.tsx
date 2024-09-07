import { FaNode, FaReact } from "react-icons/fa"
import { FaGolang } from "react-icons/fa6"
import { MdCss } from "react-icons/md"
import { SiJavascript } from "react-icons/si"
import { TiHtml5 } from "react-icons/ti"

export default function Home() {
	return (
		<div className="flex w-full justify-between">
			<div className="ml-32 mt-52">
				<p className="text-7xl">
					Hi, I'm<span className="text-teal-400"> Sumit kumar Sah</span>
				</p>
				<p className="text-3xl">
					and I'm a Web Developer<span className="text-teal-400">.</span>{" "}
				</p>
				<div className="mt-2 w-[90%] border border-teal-400" />
			</div>
			<div className="flex flex-col justify-end gap-4 p-4">
				<FaReact
					size={"45px"}
					className="text-teal-400"
				/>
				<SiJavascript
					size={"45px"}
					className="text-teal-400"
				/>
				<FaNode
					size={"45px"}
					className="text-teal-400"
				/>
				<FaGolang
					size={"45px"}
					className="text-teal-400"
				/>
				<TiHtml5
					size={"45px"}
					className="text-teal-400"
				/>
				<MdCss
					size={"45px"}
					className="text-teal-400"
				/>
			</div>
		</div>
	)
}
