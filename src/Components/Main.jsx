import { useEffect, useRef } from "react";
import styles from "./styles/Main.module.scss";
//import circleImg from "../images/main_circle.png";

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
            더 좋은 코딩 방식을 고민하고 웹 사이트 구현에 보람을 느낍니다.<br />
            계속해서 변화하는 시대에 맞게 뒤쳐지지 않고 배움의 자세로 나아가겠습니다.
          </p>
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.mouse}>
          <div className={styles.wheel}></div>
        </div>
        <p>Scroll Down</p>
      </div>
    </section>
  );
}
