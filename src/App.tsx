
import usePortfolio from "./hooks/usePortfolio"
import Header from "./components/organisms/Header"
import Home from "./components/organisms/Home"
import Portfolio from "./components/organisms/Portfolio"
import ProyectModal from "./components/molecules/ProyectModal"
import Modal from "./components/molecules/Modal"
import AboutMe from "./components/organisms/AboutMe"


function App() {
  const {modalProyect, setModalProyect} = usePortfolio()

  return (
    <div id="home">
      <Header />
      <Home />
      <AboutMe />
      <Portfolio />

      {modalProyect && (
        <Modal onClose={() => setModalProyect(false)} width={"70%"} maxWidth={"44rem"}>
          <ProyectModal />
        </Modal>
      )}
    </div>
  )
}

export default App
