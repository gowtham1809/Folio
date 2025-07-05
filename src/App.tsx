import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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


function App() {
  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <About />
        <Education />
        <Experience />
        <Skills />
        <Projects />
        <Contact />
      </main>
      <Footer />
      <ToastContainer position="bottom-right" theme="dark" />
    </div>
  );
}

export default App;
