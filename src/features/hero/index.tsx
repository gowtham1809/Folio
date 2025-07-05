import { useEffect, useRef } from "react";
import { FaGithub, FaLinkedin} from "react-icons/fa";
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
      { threshold: 0.2 }
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
          <h1 className="hero__title">
            Hi, I'm <span className="hero__name">GowthamRaj</span>
            <br />
            Full Stack Developer
          </h1>
          <p className="hero__description">
            I build exceptional and accessible digital experiences for the web.
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
