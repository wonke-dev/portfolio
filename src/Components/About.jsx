import styles from "./styles/About.module.scss";
// profileImg는 public 폴더에서 직접 참조

export default function About() {
  return (
    <section id="about" className={`${styles.about} section`}>
      <div className={styles.container}>
        <div className={styles.profile} data-aos="fade-up" data-aos-delay="0">
          <h2 data-aos="fade-right" data-aos-delay="100">
            About
          </h2>
          <div className={styles.imageWrapper}>
            <img src="/images/profile.png" alt="profile" data-aos="zoom-in" data-aos-delay="200" />
            <div className={styles.imageGlow}></div>
          </div>
          <a
            href="https://wonkyung-space.notion.site/LEE-WON-KYUNG-89bfe0210e054ef9a07c93a783acf834?source=copy_link"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.more}
            data-aos="fade-up"
            data-aos-delay="300"
          >
            자기소개 더보기
          </a>
        </div>
        <div className={styles.info}>
          <div className={styles.infoBox} data-aos="fade-left" data-aos-delay="100">
            <p>
            디자인 구현을 넘어 웹의 구조와 의미까지 고민하는 개발자를 지향합니다.
            웹 표준과 접근성을 고려한 코드를 작성하며, 지속적인 학습과 반복적인 개선을 통해 더 나은 구조와 품질의 코드를 만들어가고 있습니다.
            </p>
          </div>
          <div className={`${styles.infoBox} ${styles.experience}`}>
            <div data-aos="fade-up" data-aos-delay="200">
              <p className={styles.title}>WORK EXPERIENCE</p>
              <p className={styles.content}>2023.11 ~ 야나두</p>
              <p className={styles.content}>2022.06 ~ 2023.11 더비즈</p>
              <p className={styles.content}>2020.05 ~ 2022.06 예스폼</p>
              <p className={styles.content}>2018.05 ~ 2019.09 엘릭스</p>
            </div>
            <div data-aos="fade-up" data-aos-delay="300">
              <p className={styles.title}>CERTIFICATION</p>
              <p className={styles.content}>2017.06 웹디자인기능사</p>
              <p className={styles.content}>2016.11 정보처리기사</p>
              <p className={styles.content}>2016.03 GTQ포토샵1급</p>
            </div>
          </div>
          <div className={styles.infoBox} data-aos="fade-up" data-aos-delay="400">
            <p className={styles.title}>EDUCATION</p>
            <p className={styles.content}>
              2017.12 ~ 2018.04 더조은컴퓨터아트학원 [스마트기기 UX/UI 디자인(웹&앱디자인)]
            </p>
            <p className={styles.content}>2013.03 ~ 2018.02 한성대학교 컴퓨터공학부</p>
          </div>
        </div>
      </div>
    </section>
  );
}
