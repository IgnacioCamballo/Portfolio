import styles from "../../styles/portfolio.module.css"
import ProyectCard from "../molecules/ProyectCard"
import proyectsList from "../../data/proyects.json"

export default function Portfolio() {

  return (
    <section className={styles.container} id="portfolio">
      <div className={styles.portfolio}>
        {proyectsList.proyects.map(proyect => <ProyectCard key={proyect.name} proyectInfo={proyect}/>)}
      </div>
    </section>
  )
}
