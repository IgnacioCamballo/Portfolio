import { translate } from "../../helpers"
import usePortfolio from "../../hooks/usePortfolio"
import styles from "../../styles/portfolio.module.css"
import { Proyect } from "../../types/types"
import LinksButtons from "./LinksButtons"
import TechIcons from "./TechIcons"

export default function ProyectCard({proyectInfo}: {proyectInfo: Proyect}) {
  const {setModalProyect, setModalProyectType, lenguage} = usePortfolio()

  const proyectData = lenguage === "es" ? proyectInfo.data.es : proyectInfo.data.en

  return (
    <div className={styles.card}>
      <img src={proyectInfo.data.img[0].src} alt={proyectInfo.data.img[0].alt} className={styles.card_imagen}/>

      <h3 className={styles.card_title}>{proyectData.title}</h3>

      <TechIcons techs={proyectInfo.data.technologies}/>

      <p className={styles.descPhoto} onClick={() => {setModalProyect(true), setModalProyectType(proyectInfo.name)}}>{translate("seeDescriptionAndPhotos")}</p>

      <LinksButtons proyectInfo={proyectInfo}/>
    </div>
  )
}
