import { lenguage } from "../../helpers"
import styles from "../../styles/home.module.css"

export default function Home() {
  return (
    <section className={styles.home} id="home">
      <div className={styles.home_container}>
        <div className={styles.cont}>
          <h1 className={styles.cont_name} aria-label="name">Ignacio Camballo</h1>
          <h2 className={styles.cont_dev} aria-label="description">{lenguage("cont_dev")}</h2>
          <h3 className={styles.cont_about} aria-label="about me">{lenguage("cont_about")}</h3>
        </div>
          <img src="./src/assets/foto.jpeg" alt="photo" className={styles.foto} aria-label="photo"></img>
      </div>
    </section>
  )
}
