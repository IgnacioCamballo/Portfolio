import { Icon } from "../../../types/types";
import styles from "../../../styles/proyectModal.module.css"

export default function AxiosIcon({ width, height }: Icon) {
  return (
    <div className={styles.techCont}>
      <div style={{height: height, width: width, display: "flex", alignItems: "center"}}>
        <img src="./dist/assets/axios.png" width={width} height={height/3}/>
      </div>

      <p className={styles.techName}>Axios</p>
    </div>
  )
}