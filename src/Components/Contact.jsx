import styles from "./styles/Contact.module.scss";

export default function Contact() {
  return (
    <section id="contact" className={`${styles.contact} section`}>
      <div className={styles.container}>
        <p className={styles.text}>Thank you for visiting my portfolio.</p>
        <div className={styles.content}>
          <div className={styles.contentInner}>
            <h2>Contact</h2>
            <p>
              <span>Email:</span> wonk0311@gmail.com
            </p>
            <p>
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
