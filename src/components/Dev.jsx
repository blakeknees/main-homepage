import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../styles/Dev.scss";

const skills = [
  { name: "JavaScript", level: 90, color: "#E8C547" },
  { name: "React", level: 85, color: "#89C4D8" },
  { name: "CSS / SCSS", level: 88, color: "#F4A57A" },
  { name: "Python", level: 75, color: "#7DBF9E" },
];

const projects = [
  {
    title: "Project One",
    description: "A placeholder description for your first project. Replace with something you're proud of.",
    tags: ["React", "SCSS"],
    link: "#",
  },
  {
    title: "Project Two",
    description: "A placeholder description for your second project. Add the tech stack and what it does.",
    tags: ["JavaScript", "Python"],
    link: "#",
  },
  {
    title: "Project Three",
    description: "A placeholder description for your third project. What problem did it solve?",
    tags: ["React", "CSS"],
    link: "#",
  },
  {
    title: "Project Four",
    description: "A placeholder description for your fourth project. What was your role?",
    tags: ["Python", "JavaScript"],
    link: "#",
  },
];

export default function Dev() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(timer);
  }, []);

  const v = visible ? "visible" : "";

  return (
    <div className="dev-page">

      {/* Nav */}
      <nav className={`dev-nav ${v}`}>
        <Link to="/" className="dev-nav__back">← Back</Link>
        <span className="dev-nav__name">Jennifer Blakney</span>
      </nav>

      {/* Hero */}
      <section className="dev-hero">
        <div className={`dev-hero__label ${v}`}>Software Development</div>
        <h1 className={`dev-hero__heading ${v}`}>
          <span className="dev-hero__heading--outline">I build</span>
          <span className="dev-hero__heading--fill">things</span>
          <span className="dev-hero__heading--outline">for the</span>
          <span className="dev-hero__heading--accent">web.</span>
        </h1>
      </section>

      {/* About */}
      <section className="dev-about">
        <div className={`dev-section-label ${v}`}>001 — About</div>
        <div className="dev-about__grid">
          <div className={`dev-about__text ${v}`}>
            <p>Hi, I'm Jennifer — a developer who loves building clean, thoughtful digital experiences. I care about the details: the spacing, the transitions, the way something feels when you use it.</p>
            <p>Replace this with your real bio. Talk about what drives you, what you've worked on, what you're excited about next.</p>
          </div>

          <div className={`dev-about__text ${v}`}>
            <div className={`dev-section-label ${v}`}>002 — Resume</div>
            <p>Hi, I'm Jennifer — a developer who loves building clean, thoughtful digital experiences. I care about the details: the spacing, the transitions, the way something feels when you use it.</p>
            <p>Replace this with your real bio. Talk about what drives you, what you've worked on, what you're excited about next.</p>
          </div>    
        </div>

      </section>


      {/* Skills */}
      <section className="dev-skills">
        <div className={`dev-section-label ${v}`}>002 — Skills</div>
        <div className={`dev-about__tag-cloud ${v}`}>
            {["Creative", "Detail-oriented", "Problem solver", "Collaborator", "Curious"].map((tag) => (
              <span key={tag} className="dev-tag">{tag}</span>
            ))}
          </div>
        <div className="dev-skills__grid">
          {skills.map((skill, i) => (
            <div key={skill.name} className={`dev-skill-card ${v}`} style={{ transitionDelay: `${0.1 * i}s` }}>
              <div className="dev-skill-card__name">{skill.name}</div>
              <div className="dev-skill-card__bar-track">
                <div
                  className="dev-skill-card__bar-fill"
                  style={{ "--fill-color": skill.color, "--fill-width": `${skill.level}%` }}
                />
              </div>
              <div className="dev-skill-card__level">{skill.level}%</div>
            </div>
          ))}
        </div>
      </section>

      {/* Projects */}
      <section className="dev-projects">
        <div className={`dev-section-label ${v}`}>003 — Projects</div>
        <div className="dev-projects__grid">
          {projects.map((project, i) => (
            <a
              key={project.title}
              href={project.link}
              className={`dev-project-card ${v}`}
              style={{ transitionDelay: `${0.1 * i}s` }}
            >
              <div className="dev-project-card__number">0{i + 1}</div>
              <h3 className="dev-project-card__title">{project.title}</h3>
              <p className="dev-project-card__desc">{project.description}</p>
              <div className="dev-project-card__tags">
                {project.tags.map((tag) => (
                  <span key={tag} className="dev-project-card__tag">{tag}</span>
                ))}
              </div>
              <span className="dev-project-card__arrow">→</span>
            </a>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section className="dev-contact">
        <div className={`dev-section-label ${v}`}>004 — Contact</div>
        <div className={`dev-contact__inner ${v}`}>
          <h2 className="dev-contact__heading">Let's work<br /><span>together.</span></h2>
          <a href="mailto:your@email.com" className="dev-contact__email">your@email.com</a>
          <div className="dev-contact__links">
            <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
          </div>
        </div>
      </section>

      <footer className="dev-footer">
        <span>© Jennifer Blakney</span>
      </footer>

    </div>
  );
}
