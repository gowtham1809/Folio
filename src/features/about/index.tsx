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
                scalable, and high-performance web applications using
                technologies like React.js, Next.js, Vue.js, Nuxt.js, Node.js, and
                Express.js. I focus on writing clean, maintainable code and
                delivering seamless user experiences.
              </p>

              <p className="about__description">
                I have hands-on experience developing end-to-end applications,
                designing RESTful APIs, and working with databases such as
                MongoDB and PostgreSQL. I enjoy solving real-world problems and
                turning ideas into efficient digital solutions.
              </p>

              <p className="about__description">
                Currently, I am working on real-world products including
                business platforms, ORM systems, and microsite builders. I
                continuously explore new technologies to improve my skills and
                build impactful applications.
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
