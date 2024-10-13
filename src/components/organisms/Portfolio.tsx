import { lenguage } from "../../helpers"
import styles from "../../styles/portfolio.module.css"
import ProyectCard from "../molecules/ProyectCard"

export default function Portfolio() {
  return (
    <div className={styles.container} id="portfolio">
      <div className={styles.portfolio}>
        <ProyectCard 
          name="pizzariajacare"
          title={lenguage("pizzaria_jacare")!}
          img="./src/assets/pizzaria-jacare/portada.png"
          description={lenguage("pizzaria_jacare_description")!}
          web="https://pizzaria-jacare.netlify.app/"
          gitHub="https://github.com/IgnacioCamballo/Pizzaria-Jacare"
        />
        
        <ProyectCard 
          name="shiftstable"
          title={lenguage("shifts-table")!}
          img="./src/assets/shifts-table/graficodefunciones.jpg"
          description={lenguage("shifts-table_description")!}
          web="a"
          googlePlay="https://play.google.com/store/apps/details?id=com.shiftstable"
        />
      </div>
    </div>
  )
}
