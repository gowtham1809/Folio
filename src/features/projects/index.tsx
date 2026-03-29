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
    title: "Food Ordering (Full Stack)",
    description:
      "A full-stack food ordering application featuring menu browsing, cart management, table booking, and order history. Built with React and Vite on the frontend, and a secure Node.js + Express REST API with MongoDB on the backend, including JWT authentication and order management.",
    image: "",
    technologies: [
      "React.js",
      "Vite",
      "JavaScript",
      "CSS",
      "Context API",
      "Node.js",
      "Express.js",
      "MongoDB",
      "JWT",
      "Mongoose",
    ],
    githubUrl: "https://github.com/gowtham1809/FoodOrdering-Ui",
    liveUrl: "https://food-ordering-ui-sigma.vercel.app/",
  },

  {
    title: "Hospital Management ( Full Stack)",
    description:
      "A scalable full-stack hospital management platform that enables efficient management of hospitals, doctors, patients, and appointments. Includes CRUD operations, modular API architecture, and interactive UI with responsive data tables. Integrated with a Node.js + Express backend and MongoDB database, with Swagger documentation for API testing and development.",
    image: "",
    technologies: [
      "React.js",
      "SCSS",
      "Node.js",
      "Express.js",
      "MongoDB",
      "Swagger",
    ],
    githubUrl: "https://github.com/gowtham1809/hospital-ui",
    liveUrl: "https://hospital-ui-kohl.vercel.app/",
  },
  {
    title: "EasyBooking  (Full Stack)",
    description:
      "A scalable full-stack booking system with authentication, slot selection, and interactive seat mapping. Users can book slots, manage reservations, and view booking history. Built with React, Redux, and TypeScript on the frontend, and a modular Node.js + Express REST API with PostgreSQL on the backend.",
    image: "",
    technologies: [
      "React.js",
      "TypeScript",
      "Redux Toolkit",
      "Redux Saga",
      "SCSS",
      "Node.js",
      "Express.js",
      "PostgreSQL",
    ],
    githubUrl: "https://github.com/gowtham1809/BookEasy-UI",
    liveUrl: "https://book-easy-ui.vercel.app/login",
  },
  {
    title: "Weather Forecast Application",
    description:
      "Display current weather and 5-day forecast with hourly details using React.js, Axios, and OpenWeatherMap API. Search weather by city name or use automatic geolocation for current weather updates. Designed a responsive UI for mobile, tablet, and desktop devices with CSS.",
    image: weatherImage,
    technologies: ["React", "OpenWeatherMap API", "CSS"],
    githubUrl: "https://github.com/gowtham1809/Weather-App",
    liveUrl: "https://gowtham1809.github.io/Weather-App/",
  },
  {
    title: "Translate & Transliterate App",
    description:
      "A feature-rich multilingual web application that translates English text into 18+ Indian languages and converts it into Latin script. Built with React and SCSS, the app includes an animated globe (Cobe) and dynamic particles background for an engaging UI. Integrated with MyMemory API for real-time translations and optimized for responsive performance across devices.",
    image: "",
    technologies: [
      "React.js",
      "SCSS",
      "Axios",
      "Cobe",
      "Transliteration",
      "MyMemory API",
    ],
    githubUrl: "https://github.com/gowtham1809/trans",
    liveUrl: "https://trans-amber.vercel.app/",
  },
  {
    title: "Discussion Forum",
    description:
      "A discussion forum built with next.js, prisma(ORM), postgres, and OAuth2.0. Users can create topics, post messages, and reply to discussions. Designed a responsive UI for mobile, tablet, and desktop devices with tailwindcss.",
    image: "",
    technologies: ["Next.js", "TailwindCSS", "Prisma", "OAuth2.0"],
    githubUrl: "https://github.com/gowtham1809/Discussion",
    liveUrl: "https://discussion-pi.vercel.app/",
  },

  {
    title: "Tic Tac Toe",
    description:
      "A simple and interactive two-player Tic Tac Toe game built using HTML, CSS, and JavaScript. Players take turns marking X and O on a 3x3 grid, with real-time updates and automatic win detection. Includes a restart option and a fully responsive UI for smooth gameplay across devices.",
    image: "",
    technologies: ["JavaScript", "HTML", "CSS"],
    githubUrl: "https://github.com/gowtham1809/Tic-Tac-Toe",
    liveUrl: "https://tic-tac-toe-swart-tau.vercel.app",
  },
  {
    title: "Companies Directory",
    description:
      "A modern React-based directory application that allows users to search, filter, and explore company data with dynamic grid and table views. Built with Vite and a custom data hook for efficient state management, offering a responsive and scalable UI architecture.",
    image: "",
    technologies: ["React.js", "Vite", "JavaScript", "CSS"],
    githubUrl: "https://github.com/gowtham1809/companies-directory",
    liveUrl: "https://companies-directory-beta.vercel.app/",
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
      { threshold: 0.2 },
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
              <div className="projects__overlay">
                {/* <div className="projects__image-container">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="projects__image"
                  />
                  <div className="projects__iframe-wrapper">
                    <iframe
                      src={project.liveUrl}
                      title={project.title}
                      className="projects__iframe"
                    />
                  </div>
                </div> */}
                <div className="projects__overlay-content">
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
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
