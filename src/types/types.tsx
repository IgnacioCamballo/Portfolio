export type PortfolioContextProps = {
  lenguage: string,
  modalProyect: boolean,

  setLenguage: React.Dispatch<React.SetStateAction<string>>,
  setModalProyect: React.Dispatch<React.SetStateAction<boolean>>,
}