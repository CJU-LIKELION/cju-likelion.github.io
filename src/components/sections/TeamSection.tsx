import { Reveal } from "@/components/motion/Reveal";
import { User, Users } from "lucide-react";
import { teamContent } from "@/content/landing";

function MemberCard({ name, role, desc }: { name: string; role?: string; desc: string }) {
  return (
    <article className="group rounded-xl border border-border bg-card p-5 transition-all duration-300 hover:border-[#FF4D00]/30 dark:border-white/5 dark:bg-white/[0.02]">
      <div className="mb-3 flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FF4D00]/10 text-[#FF4D00]">
          <User className="h-5 w-5" />
        </div>
        <div>
          <h4 className="text-sm text-foreground dark:text-white">{name}</h4>
          {role ? <p className="text-xs text-[#FF4D00]">{role}</p> : null}
        </div>
      </div>
      <p className="text-xs leading-relaxed text-muted-foreground dark:text-gray-500">{desc}</p>
    </article>
  );
}

export function TeamSection() {
  return (
    <section id="team" className="min-h-screen scroll-mt-16 bg-background px-5 py-24 md:py-32">
      <div className="mx-auto max-w-6xl">
        <Reveal>
          <div className="mb-16 text-center">
            <span className="mb-4 block text-xs tracking-[0.3em] text-[#FF4D00] uppercase">
              {teamContent.label}
            </span>
            <h2 className="mb-4 text-3xl font-bold text-foreground dark:text-white md:text-5xl">
              {teamContent.titleTop}{" "}
              <span className="text-[#FF4D00]">
                {teamContent.titleAccent}
              </span>
            </h2>
            <p className="mx-auto max-w-md text-sm text-muted-foreground dark:text-gray-500">{teamContent.subtitle}</p>
          </div>
        </Reveal>

        <div className="mx-auto mb-12 grid max-w-xl gap-4 md:grid-cols-2">
          {teamContent.leaders.map((member) => (
            <Reveal key={`${member.role}-${member.name}`}>
              <MemberCard name={member.name} role={member.role} desc={member.desc} />
            </Reveal>
          ))}
        </div>

        <div className="grid gap-8 md:grid-cols-3">
          {teamContent.departments.map((department) => (
            <Reveal key={department.name}>
              <section>
                <div className="mb-4 flex items-center gap-2 border-b border-border pb-2 dark:border-white/5">
                  <span className="text-xs text-[#FF4D00]">
                    <Users className="h-4 w-4" />
                  </span>
                  <h3 className="text-sm tracking-wider text-foreground dark:text-white">{department.name}</h3>
                </div>
                <div className="space-y-3">
                  {department.members.map((member) => (
                    <MemberCard key={member.name} name={member.name} desc={member.desc} />
                  ))}
                </div>
              </section>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
