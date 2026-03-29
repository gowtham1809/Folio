
import Header from "./features/header";
import Hero from "./features/hero";
import About from "./features/about";
import Experience from "./features/experience";
import Projects from "./features/projects";
import Skills from "./features/skills";
import Contact from "./features/contact";
import Footer from "./features/footer";
import Education from "./features/education";
import "./App.css";
import CursorGlow from "./features/cursorGlow";


function App() {
  return (
    <div className="app">
      <CursorGlow/>
      <Header />
      <main>
        <Hero />
        <About />
        <Experience />
        <Skills />
        <Projects />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
