import s from "./NavBar.module.css"

const NavBar = () => {
  return (
    <header className={s.header}>
      <nav className={s.navMenu}>
        <p className={s.logo}>Olha U.</p>
        <ul className={s.navLink}>
            <li><a href="#anchor1" className={s.navItem}>Home</a></li>
            <li><a href="#anchor2" className={s.navItem}>About</a></li>
            <li><a href="#anchor3" className={s.navItem}>Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
