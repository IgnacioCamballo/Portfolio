import { translate } from "../../helpers"
import styles from "../../styles/aboutMe.module.css"

export default function AboutMe() {
  return (
    <div className={styles.aboutMe_cont}>
      <div id="aboutMe" className={styles.id_holder}/>
      <h2 className={styles.title}>{translate("aboutMe")}<span>{translate("aboutMeSpan")}</span></h2>
      <p className={styles.text}>{translate("aboutMe_text")}</p>
    </div>
  )
}
