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
} from "react-icons/fa";
import {
  SiMongodb,
  SiJest,
  SiRedux,
  SiNextdotjs,
  SiTypescript,
} from "react-icons/si";
import "./styles.scss";

const skills = [
  { name: "Java", icon: FaJava },
  { name: "HTML", icon: FaHtml5 },
  { name: "CSS", icon: FaCss3Alt },
  { name: "JavaScript", icon: FaJs },
  { name: "React.js", icon: FaReact },
  { name: "Node.js", icon: FaNodeJs },
  { name: "MongoDB", icon: SiMongodb },
  { name: "Jest", icon: SiJest },
  { name: "Git", icon: FaGitAlt },
  { name: "GitHub", icon: FaGithub },
  { name: "Redux Toolkit", icon: SiRedux },
  { name: "Next.js", icon: SiNextdotjs },
  { name: "TypeScript", icon: SiTypescript },
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
            A showcase of my technical expertise and tools I work with
          </p>
        </div>

        <div className="skills__grid">
          {skills.map((skill, index) => (
            <div
              key={skill.name}
              ref={(el) => (itemRefs.current[index] = el)}
              className="skills__item"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <skill.icon className="skills__icon" />
              <h3 className="skills__name">{skill.name}</h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
