import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"

import styles from "../../styles/proyectModal.module.css"
import proyectsInfo from "../../data/proyects.json"
import usePortfolio from "../../hooks/usePortfolio"

export default function ProyectModal() {
  const {modalProyectType, setModalProyect, lenguage} = usePortfolio()
  
  //looks for the img list depending on the proyect showed
  const dataProyect = proyectsInfo.proyects.find(proy => proy.name === modalProyectType)?.data
  const dataL = lenguage === "es" ? dataProyect?.es : dataProyect?.en
  
  const images = dataProyect!.img.map(image => ({original: image.src, originalAlt: image.alt}))
  
  return (
    <div className={styles.proyectoModal}>
      <div className={styles.proyectModalImages}>
        <ImageGallery 
          items={images!}
          showFullscreenButton={false}
          showPlayButton={false}
          showBullets={true}
          renderItem={(item) => (
            <div style={{ width: '100%', height: "100%", objectFit: "contain", objectPosition: "top" }}>
              <img
                src={item.original}
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center',
                  width: '100%',
                  height: '100%',
                  maxHeight: "16rem",
                  borderRadius: "1rem"
                }}
                alt={item.originalAlt}
              />
            </div>
          )}
        />
      </div>
      <svg width={30} height={30} className={styles.close} onClick={() => setModalProyect(false)} dat-slot="icon" fill="none" strokeWidth={1.5} stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
        <path strokeLinecap="round" strokeLinejoin="round" d="M6 18 18 6M6 6l12 12" />
      </svg>
      <p className={styles.text}>{dataL?.p1}</p>
    </div>
  )
}
