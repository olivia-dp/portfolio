import s from "./Hero.module.css"
import { BsGithub } from "react-icons/bs";
import { TbBrandLinkedinFilled } from "react-icons/tb";
import { FaTelegram } from "react-icons/fa";
import { GrProjects } from "react-icons/gr";
import { MdContactMail } from "react-icons/md";

const Hero = () => {
  return (
    <section id="anchor1" className={s.hero} > 
      <div className="container">
        <div className={s.heroBox}>  
          <div className={s.textBox}>
            <h1>Frontend Developer</h1>
            <h3></h3>
            <p>If you’re looking for a developer who’s passionate, skilled, and loves what they do, let’s connect! I’d love to chat about how we can build something amazing together.</p>
            <ul className={s.techList}>
                <li className={s.techItem}>React</li>
                <li className={s.techItem}>JavaScript</li>
                <li className={s.techItem}>TypeScript</li>
                <li className={s.techItem}>Node.js</li>
        </ul>
        <ul className={s.btnsList}> 
            <li className={s.heroBtn}><a >Projects</a><GrProjects className={s.btnIcon}/></li>
            <li className={s.heroBtn}><a >Contacts</a><MdContactMail className={s.btnIcon}/></li>
        </ul>
        <nav className={s.navList}>
            <ul className={s.socList}>
                <li><a href="https://github.com/olivia-dp" target="_blank"><BsGithub className={s.icon}/></a></li>
                <li><a><TbBrandLinkedinFilled className={s.icon}/></a></li>
                <li><a><FaTelegram className={s.icon}/></a></li>
            </ul>
        </nav>
          </div>
          
        <div className={s.img}>
        <img src="/src/img/developer.png" alt="Fullstack Developer" width="476" height="616" className="hero-image"/>
      </div>
      </div>
        </div>
    </section>
  )
}

export default Hero
