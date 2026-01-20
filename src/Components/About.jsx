import styles from "./styles/About.module.scss";
import profileImg from "../images/profile.png";

export default function About() {
  return (
    <section id="about" className={`${styles.about} section`} data-aos="fade-right">
      <div className={styles.container}>
        <div className={styles.profile}>
          <h2>About</h2>
          <img src={profileImg} alt="profile" />
          <a
            href="https://example.com"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.more}
          >
            자기소개 더보기
          </a>
        </div>
        <div className={styles.info}>
          <div className={styles.infoBox}>
            <p>
              I create inclusive, accessible digital products, with experience working with startups
              and enterprise products. I believe in using product design as a tool to elevate human
              interaction with technology that scale.
            </p>
          </div>
          <div className={`${styles.infoBox} ${styles.experience}`}>
            <div>
              <p className={styles.title}>WORK EXPERIENCE</p>
              <p className={styles.content}>2023.11 ~ 야나두</p>
              <p className={styles.content}>2022.06 ~ 2023.11 더비즈</p>
              <p className={styles.content}>2020.05 ~ 2022.06 예스폼</p>
              <p className={styles.content}>2018.05 ~ 2019.09 엘릭스</p>
            </div>
            <div>
              <p className={styles.title}>CERTIFICATION</p>
              <p className={styles.content}>2017.06 웹디자인기능사</p>
              <p className={styles.content}>2016.11 정보처리기사</p>
              <p className={styles.content}>2016.03 GTQ포토샵1급</p>
            </div>
          </div>
          <div className={styles.infoBox}>
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
