import { useEffect, useRef } from "react";
import { FaBriefcase } from "react-icons/fa";
import "./styles.scss";

interface ExperienceItem {
  title: string;
  company: string;
  period: string;
  description: string[];
  technologies: string[];
}

const experiences: ExperienceItem[] = [
  {
    title: "Full Stack Developer Intern",
    company: "Tap Academy(Ed.tech) ",
    period: "06/2024 - 12/2024",
    description: [
      "Developed Tap Academy's website using Next.js and TypeScript during internship.",
      "Implemented unit and integration tests using the Jest testing library.",
    ],
    technologies: [ "Next.js,", "React,", "Express.js,", "Node.js,", "TypeScript,", "Jest"],
  },
  {
    title: "Full Stack Developer",
    company: "Tap Academy(Ed.tech) ",
    period: "01/2025 - 07/2025",
    description: [
      "Contributed to key modules of a student-focused Learning Management System (LMS) including coding practice, video classes, and recorded sessions.",
      "Implemented AI-driven features such as intelligent feedback, resume generation, and job applications.",
      "Collaborated in building secure and scalable components using the MERN stack with TypeScript, enhancing performance and delivering a seamless user experience.",
    ],
    technologies: ["React,", "Express.js,", "Node.js,",  "TypeScript,", "MongoDB,", "Redux-saga"],
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
      { threshold: 0.2 }
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
                    <span key={i} className="experience__tech-item">
                      {tech}
                    </span>
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
