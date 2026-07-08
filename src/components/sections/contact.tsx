import SectionWrapper from "@/components/layout/section-wrapper"
import SectionMarker from "@/components/ui/section-marker"
import { personalInfo } from "@/data/portfolio-data"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"
import { type FormEvent, useState } from "react"

export default function Contact() {
	const [status, setStatus] = useState<"idle" | "sending" | "sent" | "error">(
		"idle",
	)

	const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
		e.preventDefault()
		setStatus("sending")

		const form = e.currentTarget
		const formData = new FormData(form)

		try {
			const res = await fetch("https://formspree.io/f/YOUR_FORM_ID", {
				method: "POST",
				body: formData,
				headers: { Accept: "application/json" },
			})
			if (res.ok) {
				setStatus("sent")
				form.reset()
				setTimeout(() => setStatus("idle"), 4000)
			} else {
				setStatus("error")
			}
		} catch {
			setStatus("error")
		}
	}

	const labelText =
		status === "sending"
			? "sending..."
			: status === "sent"
				? "sent ✓"
				: "say hi"

	return (
		<SectionWrapper id="contact">
			<SectionMarker name="contact" />
			<h2 className="mb-6 text-4xl font-semibold leading-tight text-foreground sm:text-5xl lg:text-6xl">
				Let's make{" "}
				<span className="font-serif font-normal italic">something.</span>
			</h2>

			<p className="mb-10 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg">
				Tell me what you're building, and I'll get back to you. Or just say
				hello — I'm friendly.
			</p>

			<motion.form
				initial={{ opacity: 0, y: 16 }}
				whileInView={{ opacity: 1, y: 0 }}
				viewport={{ once: true }}
				onSubmit={handleSubmit}
				className="flex max-w-2xl flex-col gap-4"
			>
				<div className="grid gap-3 sm:grid-cols-2">
					<input
						type="text"
						name="name"
						required
						placeholder="your name"
						className="rounded-xl border border-white/[0.08] bg-surface px-4 py-3 font-mono text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent-cyan/50"
					/>
					<input
						type="email"
						name="email"
						required
						placeholder="you@somewhere.com"
						className="rounded-xl border border-white/[0.08] bg-surface px-4 py-3 font-mono text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent-cyan/50"
					/>
				</div>
				<textarea
					name="message"
					required
					rows={5}
					placeholder="what are you making?"
					className="resize-none rounded-xl border border-white/[0.08] bg-surface px-4 py-3 font-mono text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground/70 focus:border-accent-cyan/50"
				/>
				<div className="flex items-center gap-4 pt-1">
					<button
						type="submit"
						disabled={status === "sending"}
						className="inline-flex h-11 items-center gap-2 self-start rounded-xl bg-accent-cyan px-5 text-sm font-medium text-[#0a0a0f] shadow-sm shadow-accent-cyan/20 transition-all hover:bg-accent-cyan/90 hover:shadow-md hover:shadow-accent-cyan/30 disabled:opacity-50"
					>
						{labelText}
						<ArrowRight size={16} />
					</button>
					<a
						href={`mailto:${personalInfo.email}`}
						className="font-mono text-xs uppercase tracking-wider text-muted-foreground transition-colors hover:text-accent-cyan"
					>
						or email →
					</a>
				</div>
				{status === "error" && (
					<p className="font-mono text-xs uppercase tracking-wider text-red-400">
						something went wrong. please try again.
					</p>
				)}
			</motion.form>
		</SectionWrapper>
	)
}
