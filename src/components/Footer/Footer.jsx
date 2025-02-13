import { FaTelegram } from "react-icons/fa"
import s from "./Footer.module.css"
import { TbBrandLinkedinFilled } from "react-icons/tb"
import { BsGithub } from "react-icons/bs"
import { IoMailUnread } from "react-icons/io5"

const Footer = () => {
  return (
    <footer className={s.footer}>
      
      <nav className={s.navMenu}>
      <p className={s.copyright}>Copyright © 2025</p>
        <ul className={s.navLink}> 
           <li><a href="https://github.com/olivia-dp" target="_blank"><BsGithub className={s.icon}/></a></li>
                           <li><a><TbBrandLinkedinFilled className={s.icon}/></a></li>
                           <li><a><FaTelegram className={s.icon}/></a></li>
                           <li><a><IoMailUnread className={s.icon}/></a></li>

        </ul>
      </nav>
    </footer>
  )
}

export default Footer
