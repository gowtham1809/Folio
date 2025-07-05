import { useState, useEffect } from "react";
import "./styles.scss";

export default function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const prefersDark = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    console.log("Prefers dark mode:", prefersDark);
    
    setIsDarkMode(prefersDark);
    document.documentElement.setAttribute(
      "data-theme",
      prefersDark ? "dark" : "light"
    );
  }, []);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    document.documentElement.setAttribute(
      "data-theme",
      !isDarkMode ? "dark" : "light"
    );
  };
  console.log("Current theme:", isDarkMode ? "dark" : "light");
  

  return (
    <header className={`header ${isScrolled ? "header--scrolled" : ""}`}>
      <div className="header__container">
        <a href="#" className="header__logo">
          Portfolio
        </a>

        <nav className="header__nav">
          <ul className="header__nav-list">
            <li className="header__nav-item">
              <a href="#about" className="header__nav-link">
                About
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#education" className="header__nav-link">
                Education
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#experience" className="header__nav-link">
                Experience
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#projects" className="header__nav-link">
                Projects
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#skills" className="header__nav-link">
                Skills
              </a>
            </li>
            <li className="header__nav-item">
              <a href="#contact" className="header__nav-link">
                Contact
              </a>
            </li>
          </ul>
        </nav>

        <button
          className="header__theme-toggle"
          onClick={toggleTheme}
          aria-label="Toggle theme"
        >
          {isDarkMode ? "🌞" : "🌙"}
        </button>
      </div>
    </header>
  );
}
