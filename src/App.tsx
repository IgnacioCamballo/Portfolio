
import usePortfolio from "./hooks/usePortfolio"
import Header from "./components/organisms/Header"
import Home from "./components/organisms/Home"
import Portfolio from "./components/organisms/Portfolio"
import ProyectModal from "./components/molecules/ProyectModal"
import Modal from "./components/molecules/Modal"


function App() {
  const {modalProyect, setModalProyect} = usePortfolio()

  return (
    <>
      <Header />
      <Home />
      <Portfolio />

      {modalProyect && (
        <Modal onClose={() => setModalProyect(false)} width={"70%"}>
          <ProyectModal />
        </Modal>
      )}
    </>
  )
}

export default App
