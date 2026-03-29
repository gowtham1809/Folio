import { useEffect, useRef } from "react";
import {
  FaReact,
  FaNodeJs,
  FaVuejs,
  FaBriefcase,
} from "react-icons/fa";
import {
  SiMongodb,
  SiJest,
  SiRedux,
  SiNextdotjs,
  SiTypescript,
  SiQuasar,
  SiAntdesign,
  SiExpress,
  SiPinia,
  SiNuxt,
} from "react-icons/si";
import "./styles.scss";
// import type { IconType } from "react-icons/lib/esm/iconBase";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: TechItem[];
}

interface TechItem {
  name: string;
  icon: any;
}

const experiences: ExperienceItem[] = [
  {
    title: "Full Stack Developer",
    company: "Dashloc ",
    period: "11/2025 - Present",
    description: [
      "Developed and maintained scalable web applications using Vue.js, Nuxt.js, Quasar Framework, and Pinia.",
      "Collaborated with backend teams for seamless API integration and efficient data flow.",
      "Built the Dashloc platform, a unified, SEO-optimized website showcasing multiple products.",
      "Contributed to an ORM (Online Reputation Management) system to manage all social media platforms in a single dashboard.",
      "Contributed to a Google Business Profile (GBP) management tool to handle multiple business locations from one place.",
      "Contributed to a Microsite Builder to create client-specific websites with multiple customizable themes.",
    ],
    technologies: [
      { name: "Vue.js", icon: FaVuejs },
      { name: "Nuxt.js", icon: SiNuxt },
      { name: "Quasar", icon: SiQuasar },
      { name: "Pinia", icon: SiPinia },
    ],
  },
  {
    title: "Full Stack Developer",
    company: "Tap Academy(Ed.tech) ",
    period: "09/2024 - 07/2025",
    description: [
      "Built and optimized reusable, scalable UI components using React.js, improving LMS performance and maintainability by 30%.",
      "Developed and integrated RESTful APIs using Node.js and Express.js for seamless frontend-backend communication.",
      "Engineered key LMS features including Analytics Dashboard, Recruiter Access Portal, and OTP-based Authentication System.",
      "Automated student data synchronization using cron jobs, reducing manual effort and improving system reliability.",
      "Performed code refactoring, debugging, and performance optimization across multiple modules.",
    ],
    technologies: [
      { name: "React.js", icon: FaReact },
      { name: "Next.js", icon: SiNextdotjs },
      { name: "Express.js", icon: SiExpress },
      { name: "Ant Design", icon: SiAntdesign },
      { name: "Node.js", icon: FaNodeJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "MongoDB", icon: SiMongodb },
      { name: "Redux", icon: SiRedux },
    ],
  },
  {
    title: "Full Stack Developer Intern",
    company: "Tap Academy(Ed.tech) ",
    period: "06/2024 - 09/2024",
    description: [
      "Developed Tap Academy's website using Next.js and TypeScript during internship.",
      "Implemented unit and integration tests using the Jest testing library.",
      "Learned to build responsive and user-friendly UI components ensuring cross-device compatibility.",
      "Handled debugging and bug fixes to enhance application stability.",
      "Followed best coding practices with guidance from team members and used Git for version control.",
      "Learned to work effectively in a team environment.",
    ],
    technologies: [
      { name: "Next.js", icon: SiNextdotjs },
      { name: "React.js", icon: FaReact },
      { name: "Express.js", icon: SiExpress },
      { name: "Node.js", icon: FaNodeJs },
      { name: "TypeScript", icon: SiTypescript },
      { name: "Jest", icon: SiJest },
    ],
  },
];

export default function Experience() {
  const sectionRef = useRef<HTMLElement>(null);
  const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 },
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    itemRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="experience" className="experience" ref={sectionRef}>
      <div className="experience__container">
        <h2 className="experience__title">Experience</h2>
        <div className="experience__timeline">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="experience__item"
              ref={(el) => (itemRefs.current[index] = el)}
            >
              <div className="experience__icon">
                <FaBriefcase />
              </div>
              <div className="experience__content">
                <h3 className="experience__role">{exp.title}</h3>
                <div className="experience__company">
                  <span>{exp.company}</span>
                  <span className="experience__period">{exp.period}</span>
                </div>
                <ul className="experience__description">
                  {exp.description.map((item, i) => (
                    <li key={i}>{item}</li>
                  ))}
                </ul>
                <div className="experience__tech">
                  {exp.technologies.map((tech, i) => (
                    <div key={i} className="experience__tech-item">
                      <tech.icon className="experience__tech-icon" />
                      <span className="experience__tooltip">{tech.name}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
