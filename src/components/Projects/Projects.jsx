

import { Swiper, SwiperSlide } from 'swiper/react';
import { FreeMode, Keyboard, Mousewheel, Navigation, Pagination, Scrollbar } from 'swiper/modules';
import ProjectItem from "./ProjectItem";
import projects from "./projects.json";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import s from "./Projects.module.css";

const Projects = ({handleProjectClick}) => {
  return (
    <section>
      <div className="container">
        <h2 className={s.title}>My Projects</h2>
        <Swiper
          spaceBetween={30}
          slidesPerView={2}
          // navigation
          // pagination={{ clickable: true }}
          keyboard={{ enabled: true }}
          freeMode={{ enabled: true }}
          mousewheel={{ forceToAxis: true }}
          modules={[Navigation, Pagination, Keyboard, FreeMode, Mousewheel]}
          breakpoints= {{
            '@0.00': {
              slidesPerView:1
            },
            '@1.50': {
              slidesPerView:2,
              spaceBetween: 30
            },
          }}
        >
          {projects.map(project => (
            <SwiperSlide key={project.id}>
              <ProjectItem 
  project={project} 
  onClick={() => handleProjectClick(project)} 
/>

            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Projects;



