import { useEffect } from "react";
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
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "cubic-bezier(0.25, 0.46, 0.45, 0.94)",
      once: false,
      mirror: true,
      offset: 100,
    });

    // Refresh AOS on window resize
    window.addEventListener("resize", () => AOS.refresh());
    return () => window.removeEventListener("resize", () => AOS.refresh());
  }, []);

  return (
    <div className="app">
      <Header />
      <Main />
      <About />
      <Project />
      <Contact />
      <Footer />
    </div>
  );
}
