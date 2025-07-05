import { useEffect, useRef } from "react";
import "./styles.scss";

export default function About() {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);

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

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="about" className="about" ref={sectionRef}>
      <div className="about__container">
        <div className="about__content" ref={contentRef}>
          <h2 className="about__title">About Me</h2>
          <div className="about__grid">
            <div className="about__text">
              <p className="about__description">
                I am a passionate Full Stack Developer with expertise in
                building modern web applications. With a strong foundation in
                both frontend and backend technologies, I create seamless,
                user-friendly experiences that solve real-world problems.
              </p>
              <p className="about__description">
                My journey in web development started with a curiosity about how
                things work on the internet. Since then, I've worked on various
                projects, always focusing on writing clean, maintainable code.
              </p>
              <p className="about__description">
                When I'm not coding, you can find me exploring new technologies,
                contributing to open-source projects.
              </p>
            </div>
            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-number">1+</span>
                <span className="about__stat-label">Years Experience</span>
              </div>
              {/* <div className="about__stat">
                <span className="about__stat-number">5+</span>
                <span className="about__stat-label">Projects Completed</span>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
