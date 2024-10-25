import styles from "../../styles/portfolio.module.css"

import AdmobIcon from "../atoms/Icons/AdmobIcon"
import AxiosIcon from "../atoms/Icons/AxiosIcon"
import CSSIcon from "../atoms/Icons/CSSIcon"
import ExpoIcon from "../atoms/Icons/ExpoIcon"
import ExpressIcon from "../atoms/Icons/ExpressIcon"
import FirebaseIcon from "../atoms/Icons/FirebaseIcon"
import HTMLIcon from "../atoms/Icons/HTMLIcon"
import JavaScriptIcon from "../atoms/Icons/JavaScriptIcon"
import MongoDBIcon from "../atoms/Icons/MongoDBIcon"
import NodeIcon from "../atoms/Icons/NodeIcon"
import ReactIcon from "../atoms/Icons/ReactIcon"
import ReactNativeIcon from "../atoms/Icons/ReactNativeIcon"
import TypeScriptIcon from "../atoms/Icons/TypeScriptIcon"
import ViteIcon from "../atoms/Icons/ViteIcon"

type TechIconsProps = {
  techs: string[]
}

export default function TechIcons({techs}: TechIconsProps) {
  const widthHeight = 30

  return (
    <div className={styles.technologies}>
      {techs.includes("react") && <ReactIcon width={widthHeight} height={widthHeight}/>}
      {techs.includes("reactNative") && <ReactNativeIcon width={widthHeight} height={widthHeight}/>}
      {techs.includes("javaScript") && <JavaScriptIcon width={widthHeight} height={widthHeight}/>}
      {techs.includes("typeScript") && <TypeScriptIcon width={widthHeight} height={widthHeight}/>}
      {techs.includes("html") && <HTMLIcon width={widthHeight} height={widthHeight}/>}
      {techs.includes("css") && <CSSIcon width={widthHeight} height={widthHeight}/>}
      {techs.includes("expo") && <ExpoIcon width={widthHeight} height={widthHeight}/>}
      {techs.includes("vite") && <ViteIcon width={widthHeight} height={widthHeight}/>}
      {techs.includes("node") && <NodeIcon width={widthHeight} height={widthHeight}/>}
      {techs.includes("express") && <ExpressIcon width={60} height={30}/>}
      {techs.includes("axios") && <AxiosIcon width={widthHeight} height={widthHeight}/>}
      {techs.includes("mongo") && <MongoDBIcon width={widthHeight} height={widthHeight}/>}
      {techs.includes("firebase") && <FirebaseIcon width={widthHeight} height={widthHeight}/>}
      {techs.includes("adMob") && <AdmobIcon width={widthHeight} height={widthHeight}/>}
    </div>
  )
}
