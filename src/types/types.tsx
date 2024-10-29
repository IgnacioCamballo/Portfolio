
export type Image = {
  id: number,
  src: string,
  alt: string,
}

export type ProyectInfo = {
  title: string,
  p1?: string,
  p2?: string,
  p3?: string
}

export type Proyect = {
  name: string,
  data: {
    img: Image[],
    technologies: string[],
    web?: string | undefined,
    gitHub?: string | undefined,
    googlePlay?: string | undefined,
    es: ProyectInfo,
    en: ProyectInfo
  }
}

export type Icon = {
  width: number,
  height: number
}

export type PortfolioContextProps = {
  lenguage: string,
  modalProyect: boolean,
  modalProyectType: string,
  menuActive: boolean,
  setLenguage: React.Dispatch<React.SetStateAction<string>>,
  setModalProyect: React.Dispatch<React.SetStateAction<boolean>>,
  setModalProyectType: React.Dispatch<React.SetStateAction<string>>,
  setMenuActive: React.Dispatch<React.SetStateAction<boolean>>
}