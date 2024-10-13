import styles from "../../styles/nav.module.css"

type ButtonTrProps = {
  text?: string,
  ariaLabel?: string
  href?: string
}

export default function ButtonTr({text, ariaLabel, href}: ButtonTrProps) {
  return (
    <button aria-label={ariaLabel} className={styles.button}>
      <a href={href}>
        {text}
      </a>
    </button>
  )
}
