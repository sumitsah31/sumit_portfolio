import SectionWrapper from "@/components/layout/section-wrapper"
import { personalInfo } from "@/data/portfolio-data"
import { isSupabaseConfigured, supabase } from "@/lib/supabase"
import { motion } from "framer-motion"
import { Github, Linkedin, Mail, Phone, Send } from "lucide-react"
import { type FormEvent, useState } from "react"

export default function Contact() {
	const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
		"idle",
	)

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const form = e.currentTarget
		const formData = new FormData(form)
		const name = String(formData.get("name") || "").trim()
		const email = String(formData.get("email") || "").trim()
		const message = String(formData.get("message") || "").trim()

		// Without Supabase configured there is no backend to store the message,
		// so fall back to opening the visitor's email client.
		if (!isSupabaseConfigured) {
			const subject = encodeURIComponent(`Portfolio message from ${name}`)
			const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`)
			window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
			return
		}

		setStatus("sending")

		try {
			const { error } = await supabase
				.from("contact_messages")
				.insert({ name, email, message })
			if (error) {
				setStatus("error")
				return
			}
			setStatus("sent")
			form.reset()
			setTimeout(() => setStatus("idle"), 4000)
		} catch {
			setStatus("error")
		}
	}

	return (
		<SectionWrapper id="contact">
			<div className="mx-auto max-w-2xl text-center">
				<h2 className="mb-4 text-3xl font-bold sm:text-4xl lg:text-5xl">
					Get In{" "}
					<span className="bg-gradient-to-r from-violet-400 to-indigo-400 bg-clip-text text-transparent">
						Touch
					</span>
				</h2>
				<p className="mb-10 text-neutral-400">
					Feel free to reach out for collaborations, opportunities, or just a
					friendly hello.
				</p>

				{/* Contact form */}
				<motion.form
					initial={{ opacity: 0, y: 20 }}
					whileInView={{ opacity: 1, y: 0 }}
					viewport={{ once: true }}
					onSubmit={handleSubmit}
					className="mb-10 flex flex-col gap-4 text-left"
				>
					<div className="grid gap-4 sm:grid-cols-2">
						<input
							type="text"
							name="name"
							required
							placeholder="Your Name"
							className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-violet-500"
						/>
						<input
							type="email"
							name="email"
							required
							placeholder="Your Email"
							className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-violet-500"
						/>
					</div>
					<textarea
						name="message"
						required
						rows={5}
						placeholder="Your Message"
						className="resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-500 outline-none transition-colors focus:border-violet-500"
					/>
					<button
						type="submit"
						disabled={status === "sending"}
						className="inline-flex items-center justify-center gap-2 self-center rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 px-8 py-3 text-sm font-semibold text-white transition-all hover:from-violet-500 hover:to-indigo-500 hover:shadow-lg hover:shadow-violet-500/25 disabled:opacity-50"
					>
						<Send size={16} />
						{status === "sending"
							? "Sending..."
							: status === "sent"
								? "Message Sent!"
								: "Send Message"}
					</button>
					{status === "error" && (
						<p className="text-center text-sm text-red-400">
							Something went wrong. Please try again.
						</p>
					)}
				</motion.form>

				{/* Social links */}
				<div className="mb-16 flex items-center justify-center gap-4">
					{[
						{
							icon: Mail,
							href: `mailto:${personalInfo.email}`,
							label: "Email",
						},
						{
							icon: Phone,
							href: `tel:${personalInfo.phone}`,
							label: "Phone",
						},
						{
							icon: Linkedin,
							href: personalInfo.linkedin,
							label: "LinkedIn",
						},
						{
							icon: Github,
							href: personalInfo.github,
							label: "GitHub",
						},
					].map(item => (
						<a
							key={item.label}
							href={item.href}
							target="_blank"
							rel="noopener noreferrer"
							className="group rounded-full border border-white/10 bg-white/5 p-3 transition-all hover:border-violet-500/50 hover:bg-violet-500/10"
						>
							<item.icon
								size={18}
								className="text-neutral-400 transition-colors group-hover:text-violet-400"
							/>
						</a>
					))}
				</div>

				{/* Footer */}
				<div className="border-t border-white/5 pt-8 text-center text-sm text-neutral-500">
					<p>
						&copy; {new Date().getFullYear()} {personalInfo.name}. Built with
						React & Tailwind CSS.
					</p>
				</div>
			</div>
		</SectionWrapper>
	)
}
