

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import ProjectItem from "./ProjectItem";
import projects from "./projects.json";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import s from "./Projects.module.css";

const Projects = () => {
  return (
    <section>
      <div className="container">
        <Swiper
          spaceBetween={50}
          slidesPerView={2}
          // navigation
          // pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          freeMode={{ enabled: true }}
          mousewheel={{ forceToAxis: true }}
          modules={[Navigation, Pagination, Keyboard, FreeMode, Mousewheel]}
        >
          {projects.map(project => (
            <SwiperSlide key={project.id}>
              <ProjectItem title={project.name} img={project.img} />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;



