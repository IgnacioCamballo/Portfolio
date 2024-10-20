import { translate } from "../../helpers"
import usePortfolio from "../../hooks/usePortfolio"
import styles from "../../styles/portfolio.module.css"
import { Proyect } from "../../types/types"

export default function ProyectCard({proyectInfo}: {proyectInfo : Proyect}) {
  const { setModalProyect, setModalProyectType, lenguage} = usePortfolio()
  
  const {es, en, gitHub, googlePlay, web} = proyectInfo.data

  return (
    <div className={styles.card}>
      <div className={styles.card_cont} onClick={() => {setModalProyect(true), setModalProyectType(proyectInfo.name)}}>
        <img src={lenguage === "es" ? es.img[0].src! : en.img[0].src!} alt={lenguage === "es" ? es.img[0].src! : en.img[0].alt!} className={styles.card_imagen}/>

        <h3 className={styles.card_title}>{lenguage === "es" ? es.title! : en.title!}</h3>
        
        <p className={styles.card_description}>{lenguage === "es" ? es.description! : en.description!}</p>
      </div>

      <div className={styles.card_buttons}>
        {!web || web !== "" && (
          <a href={web!} target="_blank" className={`${styles.card_website} ${styles[proyectInfo.name]}`}>
            {translate("website")}
          </a>
        )}
        {!gitHub || gitHub !== "" && (
          <a className={styles.card_icon_a} target="_blank" href={gitHub!}>
            <svg className={styles.card_icon} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 30 30">
              <path d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
            </svg>
          </a>
        )}
        {!googlePlay || googlePlay !== "" && (
          <a className={styles.card_icon_a} target="_blank" href={googlePlay!}>
            <svg className={styles.card_icon} xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 48 48">
              <linearGradient id="AraffhWwwEqZfgFEBZFoqa_L1ws9zn2uD01_gr1" x1="18.102" x2="25.297" y1="3.244" y2="34.74" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#35ab4a"></stop><stop offset=".297" stopColor="#31a145"></stop><stop offset=".798" stopColor="#288739"></stop><stop offset="1" stopColor="#237a33"></stop></linearGradient><path fill="url(#AraffhWwwEqZfgFEBZFoqa_L1ws9zn2uD01_gr1)" d="M13.488,4.012C10.794,2.508,7.605,3.778,6.45,6.323L24.126,24l9.014-9.014L13.488,4.012z"></path><linearGradient id="AraffhWwwEqZfgFEBZFoqb_L1ws9zn2uD01_gr2" x1="19.158" x2="21.194" y1="23.862" y2="66.931" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#f14e5d"></stop><stop offset=".499" stopColor="#ea3d4f"></stop><stop offset="1" stopColor="#e12138"></stop></linearGradient><path fill="url(#AraffhWwwEqZfgFEBZFoqb_L1ws9zn2uD01_gr2)" d="M33.14,33.014L24.126,24L6.45,41.677 c1.156,2.546,4.345,3.815,7.038,2.312L33.14,33.014z"></path><linearGradient id="AraffhWwwEqZfgFEBZFoqc_L1ws9zn2uD01_gr3" x1="32.943" x2="36.541" y1="14.899" y2="43.612" gradientUnits="userSpaceOnUse"><stop offset="0" stopColor="#ffd844"></stop><stop offset=".519" stopColor="#ffc63f"></stop><stop offset="1" stopColor="#ffb03a"></stop></linearGradient><path fill="url(#AraffhWwwEqZfgFEBZFoqc_L1ws9zn2uD01_gr3)" d="M41.419,28.393 c1.72-0.96,2.58-2.676,2.581-4.393c-0.001-1.717-0.861-3.434-2.581-4.393l-8.279-4.621L24.126,24l9.014,9.014L41.419,28.393z"></path><linearGradient id="AraffhWwwEqZfgFEBZFoqd_L1ws9zn2uD01_gr4" x1="13.853" x2="15.572" y1="5.901" y2="42.811" gradientUnits="userSpaceOnUse"><stop offset=".003" stopColor="#0090e6"></stop><stop offset="1" stopColor="#0065a0"></stop></linearGradient><path fill="url(#AraffhWwwEqZfgFEBZFoqd_L1ws9zn2uD01_gr4)" d="M6.45,6.323C6.168,6.948,6,7.652,6,8.408 v31.179c0,0.761,0.164,1.463,0.45,2.09l17.674-17.68L6.45,6.323z"></path>
            </svg>
          </a>
        )}
      </div>
    </div>
  )
}
