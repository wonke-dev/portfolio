import { useEffect, useRef } from "react";
import styles from "./styles/Main.module.scss";
import circleImg from "../images/main_circle.png";

export default function Main() {
  const mainRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (!mainRef.current) return;
      const scrollY = window.scrollY;
      const parallaxElements = mainRef.current.querySelectorAll("[data-parallax]");

      parallaxElements.forEach((el) => {
        const speed = parseFloat(el.dataset.parallax) || 0.5;
        el.style.transform = `translateY(${scrollY * speed}px)`;
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="main" className={`${styles.main} section`} ref={mainRef}>
      <div className={styles.floatingShapes}>
        <div className={styles.shape1}></div>
        <div className={styles.shape2}></div>
        <div className={styles.shape3}></div>
      </div>

      <div className={styles.container}>
        <div className={styles.box01}>
          <p className={styles.greeting} data-parallax="0.1">
            Hi, I am a UI Developer
          </p>
          <h1 className={styles.title}>
            <span className={styles.titleSmall}>Wonkyung's</span>
            <br />
            <span className={styles.titleMain}>Portfolio</span>
          </h1>
        </div>
        <div className={styles.box02} data-parallax="0.15">
          <p>
            I create inclusive, accessible digital products, with experience working with startups
            and enterprise products. I believe in using product design as a tool to elevate human
            interaction with technology that scale.
          </p>
        </div>
      </div>

      <div className={styles.skill}>
        <div className={styles.skill_list}>
          {[
            "#HTML",
            "#CSS",
            "#JavaScript",
            "#jQuery",
            "#React",
            "#Git",
            "#SEO",
            "#Figma",
            "#Jira",
          ].map((skill, index) => (
            <span
              key={skill}
              className={index < 5 ? styles.on : ""}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <img src={circleImg} alt="circle" className={styles.circle} data-parallax="-0.2" />

      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
}
