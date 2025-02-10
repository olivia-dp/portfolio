import s from "./NavBar.module.css"

const NavBar = () => {
  return (
    <header className={s.header}>
      <nav className={s.navMenu}>
        <img></img>
        <ul className={s.navLink}>
            <li><a href="#anchor1">Home</a></li>
            <li><a href="#anchor2">About</a></li>
            <li><a href="#anchor3">Contact</a></li>
        </ul>
      </nav>
    </header>
  )
}

export default NavBar
