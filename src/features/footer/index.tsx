import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import "./styles.scss";

interface SocialLink {
  icon: JSX.Element;
  url: string;
  label: string;
}

const socialLinks: SocialLink[] = [
  {
    icon: <FaGithub />,
    url: "https://github.com/gowtham1809",
    label: "GitHub",
  },
  {
    icon: <FaLinkedin />,
    url: "https://linkedin.com/in/gowtham1809",
    label: "LinkedIn",
  },
  // {
  //   icon: <FaTwitter />,
  //   url: "https://twitter.com/yourusername",
  //   label: "Twitter",
  // },
];

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          <div className="footer__social">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="footer__social-link"
                aria-label={link.label}
              >
                {link.icon}
              </a>
            ))}
          </div>
          <p className="footer__copyright">
            © {currentYear} Gowthamraj. All rights reserved.
          </p>
          <p className="footer__text">Built with React & TypeScript</p>
        </div>
      </div>
    </footer>
  );
}
