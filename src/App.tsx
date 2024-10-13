import usePortfolio from "./hooks/usePortfolio"
import Header from "./components/organisms/Header"
import Home from "./components/organisms/Home"
import Portfolio from "./components/organisms/Portfolio"

function App() {
  const {modalProyect} = usePortfolio()

  return (
    <>
      <Header />
      <Home />
      <Portfolio />
    </>
  )
}

export default App
