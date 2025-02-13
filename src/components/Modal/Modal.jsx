import Modal from "react-modal";
import s from "./ProjectModal.module.css";


const ProjectModal = ({ project, onClose }) => {

    
  return (
    <Modal 
      isOpen={!!project} 
      onRequestClose={onClose} 
      className={s.modal}
      overlayClassName={s.overlay}
    >
      {project && ( 
        <>
          <button className={s.close} onClick={onClose}>×</button>
          <h2>{project.name}</h2>
          <img src={project.img} alt={project.name} width="300" height="200"/>
          <p>{project.description}</p>
          <div className={s.links}>
            <a href={project.links.github} target="_blank" rel="noopener noreferrer">GitHub</a>
            <a href={project.links.web} target="_blank" rel="noopener noreferrer">Live Demo</a>
          </div>
        </>
      )}
    </Modal>
  );
};

export default ProjectModal;
