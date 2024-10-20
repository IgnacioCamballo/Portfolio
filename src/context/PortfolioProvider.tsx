import { createContext, useState } from "react"
import { PortfolioContextProps } from "../types/types"


interface props {
  children: JSX.Element | JSX.Element[]
}

const PortfolioContext = createContext<PortfolioContextProps>({} as PortfolioContextProps)

const PortfolioProvider = ({children}: props) => {
  const [lenguage, setLenguage] = useState("es")
  const [modalProyect, setModalProyect] = useState(false)
  const [modalProyectType, setModalProyectType] = useState("")

  return (
    <PortfolioContext.Provider 
        value={{
          lenguage,
          modalProyect,
          modalProyectType,

          setLenguage,
          setModalProyect,
          setModalProyectType
        }}
      >
      {children}
    </PortfolioContext.Provider>
  )
}

export {PortfolioProvider}

export default PortfolioContext