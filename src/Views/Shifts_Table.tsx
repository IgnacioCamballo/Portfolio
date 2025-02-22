import styles from "@/styles/Shifts-Table/main.module.css"
import { useNavigate } from "react-router-dom"

export default function Shifts_Table() {
  const navigate = useNavigate()
  return (
    <div className={styles.body}>
      <h1 className={styles.title}>Shifts-Table</h1>
      <p onClick={() => navigate("/Shifts-Table/guide")}>ir a guia de usuario</p>
    </div>
  )
}
