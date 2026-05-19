import type { SkillGroup as SkillGroupType } from "@/lib/data";

export default function SkillGroup({ group }: { group: SkillGroupType }) {
  return (
    <div className="rounded-3xl border border-ink/10 bg-surface/80 p-6 shadow-soft">
      <h3 className="text-lg font-semibold text-foreground">{group.title}</h3>
      <div className="mt-4 flex flex-wrap gap-2">
        {group.items.map((item) => (
          <span
            key={item}
            className="rounded-full border border-ink/10 bg-ink/5 px-3 py-1 text-xs font-medium text-foreground"
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}
