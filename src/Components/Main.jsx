import styles from "./styles/Main.module.scss";
import circleImg from "../images/main_circle.png";

export default function Main() {
  return (
    <section id="main" className={`${styles.main} section`}>
      <div className={styles.container}>
        <div className={styles.box01}>
          <p>Hi, I am a UI Developer</p>
          <h1>
            <span>Wonkyung’s</span>
            <br />
            Portfolio
          </h1>
        </div>
        <div className={styles.box02}>
          <p>
            I create inclusive, accessible digital products, with experience working with startups
            and enterprise products. I believe in using product design as a tool to elevate human
            interaction with technology that scale.
          </p>
        </div>
      </div>
      <div className={styles.skill}>
        <div className={styles.skill_list}>
          <span className={styles.on}>#HTML</span>
          <span className={styles.on}>#CSS</span>
          <span className={styles.on}>#JavaScript</span>
          <span className={styles.on}>#jQuery</span>
          <span className={styles.on}>#React</span>
          <span>#Git</span>
          <span>#SEO</span>
          <span>#Figma</span>
          <span>#Jira</span>
        </div>
      </div>

      <img src={circleImg} alt="circle" className={styles.circle} />
    </section>
  );
}
