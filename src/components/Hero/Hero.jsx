import s from "./Hero.module.css"
import { BsGithub } from "react-icons/bs";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaTelegram } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdContactMail } from "react-icons/md";

const Hero = () => {
  return (
    <section id="anchor1" className={s.hero}> 
      <div className="container">
        <div className={s.heroBox}>  
          <div className={s.textBox}>
            <h1>Frontend Developer</h1>
            <h3>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Suscipit nostrum, quo sit magnam in repellendus illo veritatis esse quis voluptate doloremque dolores iure distinctio voluptatum repudiandae vel pariatur voluptates ducimus?</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolore, quo repudiandae. Officia doloribus incidunt quam quia iste odit, velit reiciendis necessitatibus, alias natus corporis voluptatum odio excepturi enim? Quibusdam, dignissimos.</p>
            <ul className={s.techList}>
                <li className={s.techItem}>React</li>
                <li className={s.techItem}>JavaScript</li>
                <li className={s.techItem}>TypeScript</li>
                <li className={s.techItem}>Node.js</li>
        </ul>
        <ul className={s.btnsList}> 
            <li><a className={s.heroBtn}><GrProjects /> Projects</a></li>
            <li><a className={s.heroBtn}><MdContactMail /> Contacts</a></li>
        </ul>
        <nav>
            <ul className={s.socList}>
                <li><a href="https://github.com/olivia-dp" target="_blank"><BsGithub className={s.icon}/></a></li>
                <li><a><TbBrandLinkedinFilled className={s.icon}/></a></li>
                <li><a><FaTelegram className={s.icon}/></a></li>
            </ul>
        </nav>
          </div>
          
        <div className={s.img}>
        <img src="/src/img/developer.png" alt="Fullstack Developer" width="276" height="416" className="hero-image"/>
      </div>
      </div>
        </div>
      
    </section>
  )
}

export default Hero
