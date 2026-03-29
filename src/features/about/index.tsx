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
                I’m a Full Stack Developer specializing in building modern,
                scalable web applications using technologies like React,
                Node.js, and modern web tools. I focus on writing clean,
                maintainable code and creating seamless user experiences.
              </p>
              <p className="about__description">
                My journey into web development started with curiosity about how
                the web works, and it has grown into a passion for solving
                real-world problems through code.
              </p>
              <p className="about__description">
                I’ve worked on multiple projects and continuously explore new
                technologies to improve my craft. When I’m not coding, I enjoy
                experimenting with new tools and contributing to open-source
                projects.
              </p>
            </div>
            <div className="about__stats">
              <div className="about__stat">
                <span className="about__stat-number">1.5+</span>
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
