import type { Skill } from "./skills"

const REPO = "https://github.com/BuilderIO/skills/blob/main/skills"

export function SkillCard({ skill }: { skill: Skill }) {
  const slug = skill.command.replace(/^\//, "")
  return (
    <a className="card" href={`${REPO}/${slug}/README.md`}>
      <h3 className="cmd">{skill.command}</h3>
      <p className="tagline">{skill.tagline}</p>
      {skill.media && (
        <img
          className="thumb"
          src={`${import.meta.env.BASE_URL}media/${skill.media}`}
          alt={`${skill.command} preview`}
          loading="lazy"
        />
      )}
      <div className="card-foot">
        <span className={`tag tag-${skill.tag}`}>{skill.tag}</span>
        <span className="view">View skill →</span>
      </div>
    </a>
  )
}
