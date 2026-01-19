import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./styles/Projects.module.scss";

export default function Project() {
  return (
    <section id="projects" className={`${styles.projects} section`}>
      <div className={styles.container}>
        <h2>Projects</h2>
        <Swiper
          modules={[Navigation, Pagination]}
          spaceBetween={0}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          className={styles.swiperContainer}
        >
          <SwiperSlide>
            <div className={styles.card}>Project 1</div>
            <div className={styles.card}>Project 2</div>
            <div className={styles.card}>Project 3</div>
            <div className={styles.card}>Project 1</div>
          </SwiperSlide>
          <SwiperSlide>
            <div className={styles.card}>Project 1</div>
            <div className={styles.card}>Project 2</div>
            <div className={styles.card}>Project 2</div>
            <div className={styles.card}>Project 3</div>
          </SwiperSlide>
        </Swiper>
      </div>
    </section>
  );
}
