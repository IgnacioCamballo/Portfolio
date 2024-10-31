import styles from "../../styles/portfolio.module.css"
import ProyectCard from "../molecules/ProyectCard"
import proyectsList from "../../data/proyects.json"
import { translate } from "../../helpers"

export default function Portfolio() {

  return (
    <section className={styles.container}>
      <div id="portfolio" className={styles.id_holder}/>
      <h2 className={styles.title}><span>{translate("portfolioSpan")}</span>{translate("portfolio")}</h2>
      <div className={styles.portfolio}>
        {proyectsList.proyects.map(proyect => <ProyectCard key={proyect.name} proyectInfo={proyect}/>)}
      </div>
    </section>
  )
}
