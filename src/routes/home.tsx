import { CiLocationOn } from "react-icons/ci"
import { FaGithub, FaLinkedin, FaNode, FaReact } from "react-icons/fa"
import { FaGolang } from "react-icons/fa6"
import { IoMdDownload } from "react-icons/io"
import { MdCss, MdEmail, MdOutlineLocalPhone } from "react-icons/md"
import { SiJavascript } from "react-icons/si"
import { TiHtml5 } from "react-icons/ti"

export default function Home() {
	const handleEmailClick = () => {
		window.location.href = "mailto:sumitdashing1@gmail.com"
	}

	return (
		<div className="flex w-full justify-between">
			<div className="ml-12 mt-52 flex flex-col gap-2">
				<p className="text-7xl">
					Hi, I'm<span className="text-teal-400"> Sumit Kumar Sah</span>
				</p>
				<p className="text-3xl">
					and I'm a Web Developer<span className="text-teal-400">.</span>{" "}
				</p>
				<div className="mt-2 w-full border border-teal-400" />
				<div className="flex items-baseline justify-between">
					<div className="flex gap-2">
						<CiLocationOn
							size={"20px"}
							className="text-teal-400"
						/>
						<p>Hyderbad,Telangana,India</p>
					</div>
					<div className="flex items-center justify-end gap-2">
						<MdOutlineLocalPhone
							size={"20px"}
							onClick={() => {
								window.open("tel:+917656087001")
							}}
						/>
						<a
							href="mailto:sumitdashing1@gmail.com"
							target="_blank"
						>
							<MdEmail
								onClick={handleEmailClick}
								size={"20px"}
							/>
						</a>
						<a
							href="https://www.linkedin.com/in/sumitkumarsah31/"
							target="_blank"
						>
							<FaLinkedin size={"20px"} />
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
							<IoMdDownload size={"20px"} />
						</a>
					</div>
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
