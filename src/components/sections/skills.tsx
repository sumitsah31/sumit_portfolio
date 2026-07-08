import SectionWrapper from "@/components/layout/section-wrapper"
import { education, skills } from "@/data/portfolio-data"

const skillCategories = [
	{ title: "Frontend", items: skills.frontend },
	{ title: "Backend", items: skills.backend },
	{ title: "Languages", items: skills.languages },
	{ title: "Tools", items: skills.tools },
]

export default function Skills() {
	return (
		<SectionWrapper
			id="skills"
			className="pb-6 pt-16"
		>
			<div className="mb-9 flex items-baseline gap-[14px]">
				<span className="font-mono text-[13px] text-gold">03</span>
				<h2 className="m-0 font-serif text-[34px] font-normal sm:text-[46px]">
					Skills
				</h2>
			</div>

			<div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
				{skillCategories.map(cat => (
					<div
						key={cat.title}
						className="rounded-[14px] border border-line bg-surface p-6"
					>
						<div className="mb-4 font-mono text-[11px] uppercase tracking-[0.06em] text-gold">
							{cat.title}
						</div>
						<ul className="m-0 flex list-none flex-col gap-2.5 p-0 text-[14.5px] text-ink-list">
							{cat.items.map(item => (
								<li key={item}>{item}</li>
							))}
						</ul>
					</div>
				))}
			</div>

			<div className="mt-4 flex flex-wrap gap-4">
				<div className="min-w-[240px] flex-1 rounded-[14px] border border-line bg-surface px-6 py-5">
					<span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.06em] text-ink-dim">
						Education
					</span>
					<span className="text-[15px] text-ink">
						{education.degree} · {education.period}
					</span>
				</div>
				<div className="min-w-[240px] flex-1 rounded-[14px] border border-line bg-surface px-6 py-5">
					<span className="mb-1.5 block font-mono text-[11px] uppercase tracking-[0.06em] text-ink-dim">
						Certification
					</span>
					<span className="text-[15px] text-ink">
						{education.certification}
					</span>
				</div>
			</div>
		</SectionWrapper>
	)
}
