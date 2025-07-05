import { useEffect, useRef } from "react";
import { FaGithub, FaExternalLinkAlt } from "react-icons/fa";
import "./styles.scss";
import weatherImage from "../../assets/png/weather-forecasting.png";

interface ProjectItem {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubUrl: string;
  liveUrl: string;
}

const projects: ProjectItem[] = [
  {
    title: "Weather Forecast Application",
    description:
      "Display current weather and 5-day forecast with hourly details using React.js, Axios, and OpenWeatherMap API. Search weather by city name or use automatic geolocation for current weather updates. Designed a responsive UI for mobile, tablet, and desktop devices with CSS.",
    image: weatherImage,
    technologies: ["React", "OpenWeatherMap API", "CSS"],
    githubUrl: "https://github.com/gowtham1809/Weather-App",
    liveUrl: "https://gowtham1809.github.io/Weather-App/",
  },
];

export default function Projects() {
  const sectionRef = useRef<HTMLElement>(null);
  const projectRefs = useRef<(HTMLDivElement | null)[]>([]);

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

    projectRefs.current.forEach((ref) => {
      if (ref) observer.observe(ref);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="projects" className="projects" ref={sectionRef}>
      <div className="projects__container">
        <h2 className="projects__title">Featured Projects</h2>
        <div className="projects__grid">
          {projects.map((project, index) => (
            <div
              key={index}
              className="projects__item"
              ref={(el) => (projectRefs.current[index] = el)}
            >
              <div className="projects__image-container">
                <img
                  src={project.image}
                  alt={project.title}
                  className="projects__image"
                />
                <div className="projects__overlay">
                  <div className="projects__links">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__link"
                    >
                      <FaGithub />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="projects__link"
                    >
                      <FaExternalLinkAlt />
                      <span>Live</span>
                    </a>
                  </div>
                </div>
              </div>
              <div className="projects__content">
                <h3 className="projects__project-title">{project.title}</h3>
                <p className="projects__description">{project.description}</p>
                <div className="projects__tech">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="projects__tech-item">
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
