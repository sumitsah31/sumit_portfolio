export default function About() {
	return (
		<div className="flex flex-col gap-2 p-12">
			<p className="text-6xl">
				About <span className="text-teal-400">Me</span>
			</p>
			<div className="w-[90%] border border-teal-400" />
			<p className="w-[90%]">
				Full Stack Developer with over two years of experience passionate about
				building scalable, robust web applications using React.js and Go
				(Golang). Seeking a challenging role to leverage my expertise in
				creating dynamic user interfaces and performant server-side logic, while
				contributing to innovative projects that drive business growth.
			</p>

			<p className="underline underline-offset-4">Skills: </p>
			<div className="flex w-[90%] justify-between gap-6 rounded-md border border-teal-400">
				<div className="p-2">
					<p className="underline underline-offset-4">Frontend:</p>
					<li> React JS,</li>
					<li>Redux,</li>
					<li> React-Tracked,</li>
					<li> Tanstack Query, </li>
					<li>Tanstack Router</li>
				</div>
				<div className="p-2">
					<p className="underline underline-offset-4">Backend:</p>
					<li>GoLang,</li>
					<li>Node,</li>
					<li> Mongo</li>
				</div>
				<div className="p-2">
					<p className="underline underline-offset-4">Language:</p>
					<li>JavaScript,</li>
					<li> TypeScript</li>
					<li>Java</li>
					<li>HTML/CSS</li>
					<li>GoLang,</li>
				</div>
				<div className="p-2">
					<p className="underline underline-offset-4">Developer Tools:</p>
					<li>VS Code,</li>
					<li> Docker,</li>
					<li> Git,</li>
					<li> Gitlab</li>
				</div>
			</div>
			<p className="underline underline-offset-4">Courses: </p>
			<p>Full Stack Certification By Newton School</p>
			<p className="underline underline-offset-4">Education: </p>
			<p>Bachelor in Science, Physics (2014-2017)</p>
		</div>
	)
}
