import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import styles from "./styles/Projects.module.scss";
import { projects } from "../config";

const chunkArray = (array, size) => {
  const chunks = [];
  for (let i = 0; i < array.length; i += size) {
    chunks.push(array.slice(i, i + size));
  }
  return chunks;
};

export default function Project() {
  const projectChunks = chunkArray(projects, 4);
  const [hoveredImage, setHoveredImage] = useState(projects[0]?.image || null);

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
          onSlideChange={(swiper) => {
            const firstProjectInSlide = projectChunks[swiper.activeIndex]?.[0];
            if (firstProjectInSlide) {
              setHoveredImage(firstProjectInSlide.image);
            }
          }}
        >
          {projectChunks.map((chunk, chunkIndex) => (
            <SwiperSlide key={chunkIndex}>
              <div className={styles.slideContent}>
                <div className={styles.cardList}>
                  {chunk.map((project) => (
                    <div
                      key={project.id}
                      className={styles.card}
                      onMouseEnter={() => setHoveredImage(project.image)}
                    >
                      <p className={styles.title}>{project.title}</p>
                      <p className={styles.description}>{project.description}</p>
                    </div>
                  ))}
                </div>
                <div className={styles.imageWrapper}>
                  {hoveredImage && (
                    <img
                      src={hoveredImage}
                      alt={hoveredImage?.title}
                      className={styles.previewImage}
                    />
                  )}
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
