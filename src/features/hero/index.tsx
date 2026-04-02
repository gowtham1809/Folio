import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";
import{SiFiverr} from "react-icons/si";
import "./styles.scss";

export default function Hero() {
  const heroRef = useRef<HTMLElement>(null);
  const textRef = useRef<HTMLDivElement>(null);

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

    if (heroRef.current) {
      observer.observe(heroRef.current);
    }

    if (textRef.current) {
      observer.observe(textRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section ref={heroRef} className="hero">
      <div className="hero__container">
        <div ref={textRef} className="hero__content">
          <p className="hero__badge">
            Open to Opportunities, Let's work together.
          </p>
          <h1 className="hero__title">
            Hi, I'm <span className="hero__name">Gowthamraj</span>
            <br />
            Full Stack Developer
          </h1>
          <p className="hero__description">
            Passionate about building modern web experiences. Explore my work
            and let’s collaborate on projects.
          </p>
          <div className="hero__social">
            <a
              href="https://github.com/gowtham1809"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
            <a
              href="https://linkedin.com/in/gowtham1809"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
            <a
              href="mailto:gowthamrajezhumalai@gmail.com"
              className="hero__social-link"
              aria-label="Email"
            >
              <FaEnvelope />
            </a>
            <a
              href="https://www.fiverr.com/gowthamraj_re"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="Fiverr Profile"
            >
              <SiFiverr />
            </a>
            {/* <a
              href="https://www.naukri.com/mnjuser/profile?id=&altresid"
              target="_blank"
              rel="noopener noreferrer"
              className="hero__social-link"
              aria-label="Naukri Profile"
            >
              <FaNaukri />
            </a> */}
          </div>
        </div>
      </div>
    </section>
  );
}
