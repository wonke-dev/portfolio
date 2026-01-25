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
  const [hoveredProject, setHoveredProject] = useState(projects[0] || null);

  return (
    <section id="projects" className={`${styles.projects} section`}>
      <div className={styles.bgPattern}></div>
      <div className={styles.container}>
        <h2> Projects</h2>
        <div data-aos="fade-up" data-aos-delay="200" data-aos-duration="1000">
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
                setHoveredProject(firstProjectInSlide);
              }
            }}
          >
            {projectChunks.map((chunk, chunkIndex) => (
              <SwiperSlide key={chunkIndex}>
                <div className={styles.slideContent}>
                  <div className={styles.cardList}>
                    {chunk.map((project, index) => (
                      <div
                        key={project.id}
                        className={styles.card}
                        onMouseEnter={() => {
                          setHoveredImage(project.image);
                          setHoveredProject(project);
                        }}
                        style={{ animationDelay: `${index * 0.1}s` }}
                      >
                        <p className={styles.title}>{project.title}</p>
                        <p className={styles.description}>{project.description}</p>
                        <img src={project.company} alt={project.company} className={styles.company} />
                      </div>
                    ))}
                  </div>
                  <div className={styles.imageWrapper}>
                    {hoveredImage && (
                      <>
                        <img
                          src={hoveredImage}
                          alt={hoveredImage?.title}
                          className={styles.previewImage}
                        />
                        {hoveredProject && (
                          <div className={styles.linkWrapper}>
                            {hoveredProject.link && (
                              <a href={hoveredProject.link} target="_blank" rel="noopener noreferrer" className={styles.link}>
                                <p>사이트 바로가기</p>
                              </a>
                            )}
                            {hoveredProject.detailPage && (
                              <a href={hoveredProject.detailPage} target="_blank" rel="noopener noreferrer" className={styles.detailPage}>
                                <p>작업 설명 보기</p>
                              </a>
                            )}
                          </div>
                        )}
                      </>
                    )}
                    <div className={styles.imageOverlay}></div>
                  </div>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </section>
  );
}
