import { useState } from "react";
import { Link, animateScroll as scroll } from "react-scroll";
export default function Header() {
  const [navOpen, setNavOpen] = useState(false);

  return (
    <header className="header">
      <div className="logo" onClick={() => scroll.scrollToTop()}>
        My Portfolio
      </div>
      <nav className={navOpen ? "nav open" : "nav"}>
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
      <div className="nav-toggle" onClick={() => setNavOpen(!navOpen)}>
        ☰
      </div>
    </header>
  );
}
