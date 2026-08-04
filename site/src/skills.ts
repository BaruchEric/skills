export type Skill = {
  command: string
  tagline: string
  tag: "plan" | "review" | "execute" | "efficiency" | "docs"
  media?: string
}

export const skills: Skill[] = [
  { command: "/visual-plan", tagline: "Text plans → rich, reviewable visual plans", tag: "plan", media: "visual-plan.png" },
  { command: "/visual-recap", tagline: "Diffs → interactive recaps", tag: "review", media: "visual-recap.gif" },
  { command: "/agent-watchdog", tagline: "Audit another agent's work", tag: "review" },
  { command: "/plan-arbiter", tagline: "Compare competing plans, pick one", tag: "plan" },
  { command: "/plow-ahead", tagline: "Work through ambiguity, recap decisions", tag: "execute" },
  { command: "/efficient-fable", tagline: "Fable orchestrates the fleet", tag: "efficiency" },
  { command: "/efficient-frontier", tagline: "Same orchestration, any frontier model", tag: "efficiency" },
  { command: "/stay-within-limits", tagline: "Pause before usage caps", tag: "execute" },
  { command: "/quick-recap", tagline: "Green / yellow / red status blocks", tag: "docs" },
  { command: "/read-the-damn-docs", tagline: "Read the docs before guessing", tag: "docs" },
]
