import { useEffect, useState } from "react"
import { skills } from "./skills"
import { SkillCard } from "./SkillCard"
import "./theme.css"

type Theme = "dark" | "light"

export function App() {
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme | null) ?? "dark",
  )

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme)
    localStorage.setItem("theme", theme)
  }, [theme])

  return (
    <main className="page">
      <nav className="topbar">
        <span className="brand">skills</span>
        <span className="spacer" />
        <button
          className="toggle"
          type="button"
          aria-label="Toggle color theme"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          {theme === "dark" ? "☀ Light" : "☾ Dark"}
        </button>
        <a href="https://github.com/BuilderIO/skills">GitHub</a>
      </nav>

      <header className="hero">
        <h1>Skills for coding agents</h1>
        <p>Small, composable skills. Stay sharp where judgment matters.</p>
        <code className="install">npx @agent-native/skills@latest add</code>
      </header>

      <section className="grid" aria-label="Skills">
        {skills.map((s) => (
          <SkillCard key={s.command} skill={s} />
        ))}
      </section>

      <footer className="foot">
        <span>{skills.length} skills</span>
        <span className="spacer" />
        <a href="https://github.com/BuilderIO/skills">BuilderIO/skills</a>
      </footer>
    </main>
  )
}
