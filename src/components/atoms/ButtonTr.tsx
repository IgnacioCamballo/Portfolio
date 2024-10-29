import usePortfolio from "../../hooks/usePortfolio"
import styles from "../../styles/nav.module.css"

type ButtonTrProps = {
  text?: string,
  ariaLabel?: string
  href?: string
}

export default function ButtonTr({text, ariaLabel, href}: ButtonTrProps) {
  const {setMenuActive} = usePortfolio()

  return (
    <button aria-label={ariaLabel} className={styles.button} onClick={() => setMenuActive(false)}>
      <a className={styles.button_a} href={href}>
        {text}
      </a>
    </button>
  )
}
