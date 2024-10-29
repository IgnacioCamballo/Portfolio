import ButtonsNav from "../molecules/ButtonsNav";
import styles from "../../styles/nav.module.css"
import usePortfolio from "../../hooks/usePortfolio";
import { useState, useEffect } from "react";

export default function Header() {
  const {menuActive, setLenguage, setMenuActive} = usePortfolio()
  const [isLargeScreen, setIsLargeScreen] = useState(window.innerWidth >= 700);

  useEffect(() => {
    const handleResize = () => {
      setIsLargeScreen(window.innerWidth >= 700);
      if(window.innerWidth >= 700) {
        setMenuActive(false)
      }
    };

    window.addEventListener('resize', handleResize);
  }, []);

  return (
    <div className={styles.header}>
      <div className={`${styles.header_cont} ${menuActive && styles.header_active}`}>
        {isLargeScreen ? 
          <ButtonsNav style={styles.flex_row}/> :
          <div className={styles.menu_list}>
            <div className={styles.menu} onClick={() => setMenuActive(!menuActive)}>
              <span className={`${styles.menu_line} ${menuActive && styles.menu_line_active}`}></span>
              <span className={`${styles.menu_line} ${menuActive && styles.menu_line_active}`}></span>
              <span className={`${styles.menu_line} ${menuActive && styles.menu_line_active}`}></span>
            </div>
            {menuActive && 
            <div className={styles.buttt}>

              <ButtonsNav style={styles.flex_col}/>
            </div>
            }
          </div>
        }
        
        <div className={styles.flags}>
          <img width={20} height={12} src="./src/assets/spain_flag.webp" onClick={() => setLenguage("es")}/>
          <img width={20} height={12} src="./src/assets/ingland_flag.webp" onClick={() => setLenguage("en")}/>
        </div>
      </div>
    </div>
  )
}
