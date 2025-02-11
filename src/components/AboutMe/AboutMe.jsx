import s from "./AboutMe.module.css";

const AboutMe = () => {
  return (
    <section id="anchor2">
      <div className="container">
        <h2>About Me</h2>
        <h3>Transforming ideas to digital experiences</h3>
        <div className={s.aboutMe}>
          <div className={s.imgBox}><img src="/src/img/IMG_5371.JPG" width="400" height="600" alt="my photo" className={s.foto}/></div>
          <div className={s.textBox}>
            <h2>Hello, I'm Olha</h2>
            <p>
            a frontend developer, which want to work with great people who are equally passionate about what they do. For me, coding isn’t just about writing lines of code - it’s about finding real solutions that bring value. I have a solid foundation in HTML, CSS, JavaScript, React, and TypeScript, and I’m always eager to learn something new.
            </p>
            <div className={s.btnBox}>
              <a className={s.aboutBtn}>Download CV</a>
              <a className={s.aboutBtn}>View Projects</a>
            </div>
          </div>
        </div>
        </div>
    </section>
  )
}

export default AboutMe
