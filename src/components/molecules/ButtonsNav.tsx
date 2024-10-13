import ButtonTr from "../atoms/ButtonTr";
import usePortfolio from "../../hooks/usePortfolio";
import { lenguage } from "../../helpers";
import styles from "../../styles/nav.module.css"

export default function ButtonsNav() {
  const {} = usePortfolio()

  return (
    <div className={styles.buttonsNav}>
      <ButtonTr text={lenguage("home")} ariaLabel="home" href="#home"/>
      <ButtonTr text={lenguage("portfolio")} ariaLabel="portfolio" href="#portfolio"/>
      <ButtonTr text={lenguage("contact")} ariaLabel="contact" href="#contact"/>
    </div>
  )
}
