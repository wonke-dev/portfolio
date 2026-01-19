import { useState, useEffect } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
import styles from "./styles/Header.module.scss";
export default function Header() {
  const [navOpen, setNavOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${isScrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo} onClick={() => scroll.scrollToTop()}>
        My Portfolio
      </div>
      <nav className={navOpen ? `${styles.nav} ${styles.open}` : styles.nav}>
        <Link to="main" smooth={true} duration={500}>
          Home
        </Link>
        <Link to="about" smooth={true} duration={500}>
          About
        </Link>
        <Link to="projects" smooth={true} duration={500}>
          Projects
        </Link>
        <Link to="contact" smooth={true} duration={500}>
          Contact
        </Link>
      </nav>
      <div className={styles.navToggle} onClick={() => setNavOpen(!navOpen)}>
        ☰
      </div>
    </header>
  );
}
