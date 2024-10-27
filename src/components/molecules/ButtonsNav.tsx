import ButtonTr from "../atoms/ButtonTr";
import usePortfolio from "../../hooks/usePortfolio";
import { translate } from "../../helpers";
import styles from "../../styles/nav.module.css"

export default function ButtonsNav() {
  const {} = usePortfolio()

  return (
    <div className={styles.buttonsNav}>
      <ButtonTr text={translate("home")} ariaLabel="home" href="#home"/>
      <ButtonTr text={translate("about")} ariaLabel="about me" href="#aboutMe"/>
      <ButtonTr text={translate("portfolio")} ariaLabel="portfolio" href="#portfolio"/>
      <ButtonTr text={translate("contact")} ariaLabel="contact" href="#contact"/>
    </div>
  )
}
