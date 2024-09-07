import { CiLinkedin, CiMail } from "react-icons/ci"
import { FaGithub, FaNode, FaReact } from "react-icons/fa"
import { FaGolang } from "react-icons/fa6"
import { GoDownload } from "react-icons/go"
import { MdCss } from "react-icons/md"
import { SiJavascript } from "react-icons/si"
import { TiHtml5 } from "react-icons/ti"

export default function Home() {
	const handleEmailClick = () => {
		window.location.href = "mailto:sumitdashing1@gmail.com"
	}
	return (
		<div className="flex w-full justify-between">
			<div className="ml-32 mt-52 flex flex-col gap-2">
				<p className="text-7xl">
					Hi, I'm<span className="text-teal-400"> Sumit kumar Sah</span>
				</p>
				<p className="text-3xl">
					and I'm a Web Developer<span className="text-teal-400">.</span>{" "}
				</p>
				<div className="mt-2 w-[90%] border border-teal-400" />
				<div className="flex justify-end gap-2">
					<a
						href="mailto:sumitdashing1@gmail.com"
						target="_blank"
					>
						<CiMail
							onClick={handleEmailClick}
							size={"20px"}
						/>
					</a>
					<a
						href="https://www.linkedin.com/in/sumitkumarsah31/"
						target="_blank"
					>
						<CiLinkedin size={"20px"} />
					</a>
					<a
						href="https://github.com/sumitsah31"
						target="_blank"
					>
						<FaGithub size={"20px"} />
					</a>

					<a
						href="https://drive.google.com/file/d/1FEECVCMqSMoO9MioWAmwf_GP9Req2eFt/view?usp=drive_link"
						target="_blank"
					>
						<GoDownload size={"20px"} />
					</a>
				</div>
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
