import "./App.css";
import "aos/dist/aos.css";
import AOS from "aos";
import Main from "./Components/Main";
import About from "./Components/About";
import Project from "./Components/Projects";
import Contact from "./Components/Contact";
import Header from "./Components/Header";
import Footer from "./Components/Footer";

export default function App() {
  // Initialize AOS animations
  if (typeof window !== "undefined") {
    AOS.init({ duration: 800, once: true });
  }

  return (
    <div>
      <Header />
      <Main />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
