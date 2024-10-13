import ButtonsNav from "../molecules/ButtonsNav";
import styles from "../../styles/nav.module.css"
import usePortfolio from "../../hooks/usePortfolio";

export default function Header() {
  const {setLenguage} = usePortfolio()

  return (
    <div className={styles.header}>
      <ButtonsNav />
      
      <div className={styles.flags}>
      <img width={20} height={12} src="./src/assets/spain_flag.png" onClick={() => setLenguage("es")}/>
      <img width={20} height={12} src="./src/assets/ingland_flag.png" onClick={() => setLenguage("en")}/>
      </div>
    </div>
  )
}
