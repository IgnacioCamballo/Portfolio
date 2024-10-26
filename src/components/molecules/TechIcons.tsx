import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

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
import usePortfolio from '../../hooks/usePortfolio';

type TechIconsProps = {
  techs: string[]
}

export default function TechIcons({ techs }: TechIconsProps) {
  const widthHeight = 30
  const { modalProyect } = usePortfolio()

  function iconSelector(value: string) {
    switch (value) {
      case "react": return <ReactIcon width={widthHeight} height={widthHeight} />
        break
      case "reactNative": return <ReactNativeIcon width={widthHeight} height={widthHeight} />
        break
      case "javaScript": return <JavaScriptIcon width={widthHeight} height={widthHeight} />
        break
      case "typeScript": return <TypeScriptIcon width={widthHeight} height={widthHeight} />
        break
      case "html": return <HTMLIcon width={widthHeight} height={widthHeight} />
        break
      case "css": return <CSSIcon width={widthHeight} height={widthHeight} />
        break
      case "expo": return <ExpoIcon width={widthHeight} height={widthHeight} />
        break
      case "vite": return <ViteIcon width={widthHeight} height={widthHeight} />
        break
      case "node": return <NodeIcon width={widthHeight} height={widthHeight} />
        break
      case "express": return <ExpressIcon width={60} height={30} />
        break
      case "axios": return <AxiosIcon width={widthHeight} height={widthHeight} />
        break
      case "mongo": return <MongoDBIcon width={widthHeight} height={widthHeight} />
        break
      case "firebase": return <FirebaseIcon width={widthHeight} height={widthHeight} />
        break
      case "adMob": return <AdmobIcon width={widthHeight} height={widthHeight} />
        break
    }
  }

  return (
    <div className={styles.technologies_cont}>
      <div className={styles.technologies_track}>
        {modalProyect ? 
          techs.map((value, index) => <div className={styles.icon} key={index}>{iconSelector(value)}</div>) : 
          <Swiper
            slidesPerView={5}
            modules={[Autoplay]}
            autoplay={{ delay: 0 }}
            speed={1000}
            loop={true}
          >
            {techs.map((value, index) => <SwiperSlide key={index}>{iconSelector(value)}</SwiperSlide>)}
          </Swiper>
        }
      </div>
    </div>
  )
}
