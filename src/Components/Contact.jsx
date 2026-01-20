import styles from "./styles/Contact.module.scss";

export default function Contact() {
  return (
    <section id="contact" className={`${styles.contact} section`}>
      <div className={styles.bgGradient}></div>
      <div className={styles.container}>
        <p className={styles.text} data-aos="fade-up">
          Thank you for visiting my portfolio.
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
    </section>
  );
}
