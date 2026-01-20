import styles from "./styles/Footer.module.scss";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <p>© {new Date().getFullYear()} LWK. All rights reserved.</p>
    </footer>
  );
}
