import { personalInfo, siteConfig } from "@/data/portfolio-data"
import { analytics } from "@/lib/analytics"
import { isSupabaseConfigured, supabase } from "@/lib/supabase"
import { motion } from "framer-motion"
import { type FormEvent, useState } from "react"

type Status = "idle" | "sending" | "sent" | "error"

type DetailRow = {
	label: string
	value: string
	href: string | null
	external?: boolean
}

const details: DetailRow[] = [
	{
		label: "EMAIL",
		value: personalInfo.email,
		href: `mailto:${personalInfo.email}`,
	},
	{
		label: "PHONE",
		value: personalInfo.phoneDisplay,
		href: `tel:${personalInfo.phone}`,
	},
	{
		label: "LINKEDIN",
		value: `${personalInfo.linkedinHandle} ↗`,
		href: personalInfo.linkedin,
		external: true,
	},
	{
		label: "GITHUB",
		value: `@${personalInfo.githubUsername} ↗`,
		href: personalInfo.github,
		external: true,
	},
	{ label: "LOCATION", value: personalInfo.location, href: null },
]

export default function Contact() {
	const [status, setStatus] = useState<Status>("idle")

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()

		const form = e.currentTarget
		const formData = new FormData(form)
		const name = String(formData.get("name") || "").trim()
		const email = String(formData.get("email") || "").trim()
		const message = String(formData.get("message") || "").trim()

		// No backend configured → fall back to the visitor's mail client.
		if (!isSupabaseConfigured) {
			const subject = encodeURIComponent(`Portfolio message from ${name}`)
			const body = encodeURIComponent(`${message}\n\nFrom: ${name} <${email}>`)
			window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`
			analytics.contactSubmit("mailto")
			setStatus("sent")
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
			analytics.contactSubmit("supabase")
			setStatus("sent")
			form.reset()
			setTimeout(() => setStatus("idle"), 5000)
		} catch {
			setStatus("error")
		}
	}

	return (
		<section
			id="contact"
			className="mt-16 border-t border-line"
		>
			<motion.div
				initial={{ opacity: 0, y: 24 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true, margin: "-80px" }}
				transition={{ duration: 0.6, ease: [0.22, 0.61, 0.36, 1] }}
				className="mx-auto max-w-[1160px] px-6 pb-11 pt-20 sm:px-10"
			>
				<div className="mb-5 font-mono text-[13px] text-gold">05 — Contact</div>
				<h2 className="m-0 font-serif text-[40px] font-normal leading-[1.02] sm:text-[60px]">
					Let&apos;s build something
					<br />
					worth shipping.
				</h2>
				<p className="mb-10 mt-3.5 max-w-[36em] text-[16px] text-ink-muted">
					Reach out for collaborations, opportunities, or just a friendly hello
					— I&apos;ll get back to you soon.
				</p>

				<div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-[1.1fr_0.9fr]">
					{siteConfig.showContactForm && (
						<form
							onSubmit={handleSubmit}
							className="flex flex-col gap-3.5"
						>
							<div className="grid grid-cols-1 gap-3.5 sm:grid-cols-2">
								<input
									type="text"
									name="name"
									required
									placeholder="Your name"
									className="rounded-[10px] border border-line-chip bg-surface px-4 py-3.5 text-[14px] text-ink outline-none transition-colors focus:border-gold"
								/>
								<input
									type="email"
									name="email"
									required
									placeholder="Your email"
									className="rounded-[10px] border border-line-chip bg-surface px-4 py-3.5 text-[14px] text-ink outline-none transition-colors focus:border-gold"
								/>
							</div>
							<textarea
								name="message"
								required
								rows={5}
								placeholder="Your message"
								className="resize-none rounded-[10px] border border-line-chip bg-surface px-4 py-3.5 text-[14px] text-ink outline-none transition-colors focus:border-gold"
							/>
							<div className="flex items-center gap-4">
								<button
									type="submit"
									disabled={status === "sending"}
									className="inline-flex items-center gap-2.5 rounded-[8px] bg-gold px-7 py-3.5 text-[14px] font-semibold text-night transition-colors hover:bg-gold-hover disabled:opacity-60"
								>
									{status === "sending" ? "Sending…" : "Send message →"}
								</button>
								{status === "sent" && (
									<span className="font-mono text-[12.5px] text-online">
										{isSupabaseConfigured
											? "Message sent — I'll be in touch soon."
											: "Opening your mail client…"}
									</span>
								)}
								{status === "error" && (
									<span className="font-mono text-[12.5px] text-red-400">
										Something went wrong. Please try again.
									</span>
								)}
							</div>
						</form>
					)}

					<div className="flex flex-col gap-0.5 font-mono">
						{details.map((row, i) => {
							const content = (
								<>
									<span className="text-[11px] text-ink-faint">
										{row.label}
									</span>
									<span className="text-[13.5px]">{row.value}</span>
								</>
							)
							const rowClass =
								"flex items-center justify-between py-4" +
								(i < details.length - 1 ? " border-b border-line" : "")

							if (!row.href) {
								return (
									<div
										key={row.label}
										className={`${rowClass} text-ink-dim`}
									>
										{content}
									</div>
								)
							}
							return (
								<a
									key={row.label}
									href={row.href}
									{...(row.external
										? { target: "_blank", rel: "noopener noreferrer" }
										: {})}
									className={`${rowClass} text-ink transition-colors hover:text-gold`}
								>
									{content}
								</a>
							)
						})}
					</div>
				</div>

				<div className="mt-14 flex flex-wrap items-center justify-between gap-2.5 border-t border-line pt-6 font-mono text-[12px] text-ink-faint">
					<span>
						© {new Date().getFullYear()} {personalInfo.name}
					</span>
					<span>Built with React &amp; Tailwind CSS</span>
				</div>
			</motion.div>
		</section>
	)
}
