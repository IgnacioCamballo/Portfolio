import ImageGallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css"

import styles from "../../styles/proyectModal.module.css"
import proyectsInfo from "../../data/proyects.json"
import usePortfolio from "../../hooks/usePortfolio"

export default function ProyectModal() {
  const {modalProyectType, lenguage} = usePortfolio()
  
  //looks for the img list depending on the proyect showed
  const dataProyect = proyectsInfo.proyects.find(proy => proy.name === modalProyectType)?.data
  const dataImgs = lenguage === "es" ? dataProyect?.es.img : dataProyect?.en.img 
  
  const images = dataImgs?.map(image => ({original: image.src, originalAlt: image.alt}))
  
  return (
    <div className={styles.proyectoModal}>
      <div className={styles.proyectModalImages}>
        <ImageGallery 
          items={images!}
          showFullscreenButton={false}
          showPlayButton={false}
          showBullets={true}
          renderItem={(item) => (
            <div style={{ width: '100%', objectFit: "contain", objectPosition: "top" }}>
              <img
                src={item.original}
                style={{
                  objectFit: 'contain',
                  objectPosition: 'center',
                  width: '100%',
                  height: '100%',
                  maxHeight: "16rem"
                }}
                alt={item.originalAlt}
              />
            </div>
          )}
        />
      </div>
    </div>
  )
}
