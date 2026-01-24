import styles from "./styles/Contact.module.scss";
import { skills } from "../config";

export default function Contact() {
  return (
    <section id="contact" className={`${styles.contact} section`}>
      <div className={styles.bgGradient}></div>
      <div className={styles.container}>
        <p className={styles.text} data-aos="fade-up">
         방문해 주셔서 감사합니다.<br />언제든 편하게 연락주세요!
        </p>
        <div className={styles.content} data-aos="zoom-in" data-aos-delay="200">
          <div className={styles.glowEffect}></div>
          <div className={styles.contentInner}>
            <h2 data-aos="fade-up" data-aos-delay="300">
              Contact
            </h2>
            <p data-aos="fade-up" data-aos-delay="400">
              <span>Email:</span> wonk0311@gmail.com
            </p>
            <p data-aos="fade-up" data-aos-delay="500">
              <span>GitHub:</span>{" "}
              <a href="https://github.com/wonke-dev" target="_blank" rel="noopener noreferrer">
                github.com/wonke-dev
              </a>
            </p>
          </div>
        </div>
      </div>

      <div className={styles.skill}>
        <div className={styles.skill_track}>
          {[...Array(3)].map((_, i) => (
            <div key={i} className={styles.skill_list} aria-hidden={i > 0}>
              {skills.map((skill) => (
                <span key={`${i}-${skill.id}`}>
                  <img src={skill.image} alt={skill.title} />
                  {skill.title}
                </span>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
