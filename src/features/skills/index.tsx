import { useEffect, useRef } from "react";
import {
  FaJava,
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaNodeJs,
  FaGitAlt,
  FaGithub,
  FaVuejs,
  FaDatabase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiJest,
  SiRedux,
  SiNextdotjs,
  SiNuxt,
  SiTypescript,
  SiQuasar,
  SiAntdesign,
  SiExpress,
  SiPostgresql,
  SiMysql,
  SiVercel,
  SiDocker,
  SiNetlify,
  SiSwagger,
  SiPinia
} from "react-icons/si";
import "./styles.scss";

const skillCategories = [
  {
    title: "Languages",
    skills: [
      { name: "Java", icon: FaJava },
      { name: "JavaScript", icon: FaJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "HTML", icon: FaHtml5 },
      { name: "CSS", icon: FaCss3Alt },
    ],
  },
  {
    title: "Frontend",
    skills: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Vue.js", icon: FaVuejs },
      { name: "Nuxt.js", icon: SiNuxt },
    ],
  },
  {
    title: "UI & State Management",
    skills: [
      { name: "Redux", icon: SiRedux },
      { name: "Pinia", icon: SiPinia },
      { name: "Swagger", icon: SiSwagger },
      { name: "Ant Design", icon: SiAntdesign },
      { name: "Quasar", icon: SiQuasar },
    ],
  },
  {
    title: "Backend & DB",
    skills: [
      { name: "Node.js", icon: FaNodeJs },
      { name: "Express.js", icon: SiExpress },
      { name: "MongoDB", icon: SiMongodb },
      { name: "MySQL", icon: SiMysql },
      { name: "PostgreSQL", icon: SiPostgresql },
    ],
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: "Git", icon: FaGitAlt },
      { name: "GitHub", icon: FaGithub },
      { name: "Vercel", icon: SiVercel },
      { name: "Netlify", icon: SiNetlify },
      { name: "Docker", icon: SiDocker },
    ],
  },
];

export default function Skills() {
  const headerRef = useRef<HTMLDivElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observerOptions = {
      threshold: 0.2,
      rootMargin: "50px",
    };

    const headerObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          headerObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    const itemObserver = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          itemObserver.unobserve(entry.target);
        }
      });
    }, observerOptions);

    if (headerRef.current) {
      headerObserver.observe(headerRef.current);
    }

    itemRefs.current.forEach((item) => {
      if (item) {
        itemObserver.observe(item);
      }
    });

    return () => {
      headerObserver.disconnect();
      itemObserver.disconnect();
    };
  }, []);

  return (
    <section id="skills" className="skills">
      <div className="skills__container">
        <div ref={headerRef} className="skills__header">
          <h2 className="skills__title">Technical Skills</h2>
          <p className="skills__description">
            Continuously learning and adapting to new technologies to stay at
            the forefront of the industry.
          </p>
        </div>

        <div className="skills__categories">
          {skillCategories.map((category, catIndex) => (
            <div key={category.title} className="skills__category">
              <h3 className="skills__category-title">{category.title}</h3>

              <div className="skills__grid">
                {category.skills.map((skill, index) => {
                  const globalIndex = catIndex * 10 + index; // for animation delay

                  return (
                    <div
                      key={skill.name}
                      ref={(el) => (itemRefs.current[globalIndex] = el)}
                      className="skills__item"
                      style={{ animationDelay: `${globalIndex * 0.08}s` }}
                    >
                      <skill.icon className="skills__icon" />
                      <h3 className="skills__name">{skill.name}</h3>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
