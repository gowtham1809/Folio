import { motion } from "framer-motion";
import { FaBriefcase } from "react-icons/fa";
import "./styles.scss";

interface ExperienceItem {
  title: string;
  university: string;
  period: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "B.Tech - Information Technology (IT) - 8.5 CGPA",
    university:
      "Dr. Mahalingam College of Engineering and Technology, Pollachi",
    period: "2020 -2024",
  },
  {
    title: "HSC - 75%",
    university: "Mahendra Matriculation Higher Secondary School, Kalipatti.",
    period: "2020",
  },
  {
    title: "SSLC - 82%",
    university: "Mahendra Matriculation Higher Secondary School, Kalipatti.",
    period: "2018",
  },
];

const Education = () => {
  return (
    <section id="education" className="education">
      <div className="education__container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="education__header"
        >
          <h2 className="education__title">Education</h2>
          <p className="education__timeline">
            A timeline of my educational background and qualifications .
          </p>
        </motion.div>

        {experiences.map((exp, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="education__item"
          >
            <div className="education__item-icon">
              <FaBriefcase />
            </div>

            <div className="education__item-card">
              <h3 className="education__item-title">{exp.title}</h3>
              <div className="education__item-meta">
                <span className="company">{exp.university}</span>
                <span>{exp.period}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Education;
