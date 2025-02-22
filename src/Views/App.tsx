
import usePortfolio from "../hooks/usePortfolio"
import Header from "../components/organisms/Header"
import Home from "../components/organisms/Home"
import Portfolio from "../components/organisms/Portfolio"
import ProyectModal from "../components/molecules/ProyectModal"
import Modal from "../components/molecules/Modal"
import AboutMe from "../components/organisms/AboutMe"
import Contact from "../components/organisms/Contact"
import TopArrow from "../components/atoms/svg/TopArrow"
import { useState } from "react"


function App() {
  const {modalProyect, setModalProyect} = usePortfolio()
  const [fixButton, setFixButton] = useState(false)

  window.addEventListener('scroll', () => {
    if (window.scrollY > 200) {
      setFixButton(true)
    } else {
      setFixButton(false)
    }
  });

  return (
    <div className="home_base" id="home">
      <div className={fixButton ? "top_button_fixed" : "top_button"}>
        <a aria-label="home"  href="#home">
          <TopArrow width={40} height={40}/>
        </a>
      </div>
      <Header />
      <Home />
      <AboutMe />
      <Portfolio />
      <Contact />

      {modalProyect && (
        <Modal onClose={() => setModalProyect(false)} width={"70%"} maxWidth={"44rem"}>
          <ProyectModal />
        </Modal>
      )}
    </div>
  )
}

export default App
