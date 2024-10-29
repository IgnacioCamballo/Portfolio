import ButtonTr from "../atoms/ButtonTr";
import { translate } from "../../helpers";
import styles from "../../styles/nav.module.css"

export default function ButtonsNav({style}: {style: string}) {

  return (
    <div className={`${styles.buttonsNav} ${style}`}>
      <ButtonTr text={translate("home")} ariaLabel="home" href="#home"/>
      <ButtonTr text={translate("about")} ariaLabel="about me" href="#aboutMe"/>
      <ButtonTr text={translate("PORTFOLIO")} ariaLabel="portfolio" href="#portfolio"/>
      <ButtonTr text={translate("CONTACT")} ariaLabel="contact" href="#contact"/>
    </div>
  )
}
