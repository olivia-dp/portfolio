import s from "./ProjectItem.module.css"

const ProjectItem = ({ project, onClick }) => {
  return (
    <>
    
      <div onClick={onClick} style={{ cursor: "pointer" }} className={s.card}>
      <h3 className={s.name}>{project.name}</h3>
        <img src={project.img} width="500" height="400" alt={project.name} />
      </div>
      
    </>
  );
};

export default ProjectItem;