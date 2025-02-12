

const ProjectItem = ({title, img}) => {
  return (
    <div>

      <img src={ `${img}`} width="500" height="400"/>
      <h2>{title}</h2>

       
    </div>
  )
}

export default ProjectItem
