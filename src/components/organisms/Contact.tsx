import { translate } from "../../helpers"
import styles from "../../styles/contact.module.css"

export default function Contact() {
  return (
    <section className={styles.container}>
      <div id="contact" className={styles.id_holder} />
      <h2 className={styles.title}>{translate("contact")}</h2>
      <div className={styles.info_cont}>
        <div className={styles.mail_cont}>
          <a className={styles.letter} href="mailto:ignaciocamballo@gmail.com" target="_blank">
            <svg width={50} height={50} viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" fill="#000000">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path d="M512 599.6L107.9 311.1v19.7L512 619.3l404.1-288.6V311L512 599.6z" fill="#53c1de"></path>
                <path d="M63.9 187v650h896.2V187H63.9z m852.2 598.5L672.2 611.3l-13.8 9.8L899.1 793H125.5l240.6-171.8-13.8-9.8-244.4 174.5V231h808.2v554.5z" fill="#39393A"></path>
                <path d="M512.9 536.7m-10 0a10 10 0 1 0 20 0 10 10 0 1 0-20 0Z" fill="#53c1de"></path>
              </g>
            </svg>
          </a>
          <p className={styles.text_mail}>ignaciocamballo@gmail.com</p>
        </div>

        <div className={styles.buttons_cont}>
          <div className={styles.buttons_subcont}>
            <a href="https://www.linkedin.com/in/ignacio-camballo-90180077/" target="_blank" className={styles.button}>
            <svg width="32" height="32" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg" fill="none">
              <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
              <g id="SVGRepo_tracerCarrier" strokeLinecap="round" strokeLinejoin="round"></g>
              <g id="SVGRepo_iconCarrier">
                <path fill="#0A66C2" d="M12.225 12.225h-1.778V9.44c0-.664-.012-1.519-.925-1.519-.926 0-1.068.724-1.068 1.47v2.834H6.676V6.498h1.707v.783h.024c.348-.594.996-.95 1.684-.925 1.802 0 2.135 1.185 2.135 2.728l-.001 3.14zM4.67 5.715a1.037 1.037 0 01-1.032-1.031c0-.566.466-1.032 1.032-1.032.566 0 1.031.466 1.032 1.032 0 .566-.466 1.032-1.032 1.032zm.889 6.51h-1.78V6.498h1.78v5.727zM13.11 2H2.885A.88.88 0 002 2.866v10.268a.88.88 0 00.885.866h10.226a.882.882 0 00.889-.866V2.865a.88.88 0 00-.889-.864z"></path>
              </g>
            </svg>
              <div>LinkedIn</div>
            </a>
            <a href="https://github.com/IgnacioCamballo" target="_blank" className={styles.button}>
              <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="32" height="32" viewBox="0 0 30 30">
                <path fill="#fff" d="M15,3C8.373,3,3,8.373,3,15c0,5.623,3.872,10.328,9.092,11.63C12.036,26.468,12,26.28,12,26.047v-2.051 c-0.487,0-1.303,0-1.508,0c-0.821,0-1.551-0.353-1.905-1.009c-0.393-0.729-0.461-1.844-1.435-2.526 c-0.289-0.227-0.069-0.486,0.264-0.451c0.615,0.174,1.125,0.596,1.605,1.222c0.478,0.627,0.703,0.769,1.596,0.769 c0.433,0,1.081-0.025,1.691-0.121c0.328-0.833,0.895-1.6,1.588-1.962c-3.996-0.411-5.903-2.399-5.903-5.098 c0-1.162,0.495-2.286,1.336-3.233C9.053,10.647,8.706,8.73,9.435,8c1.798,0,2.885,1.166,3.146,1.481C13.477,9.174,14.461,9,15.495,9 c1.036,0,2.024,0.174,2.922,0.483C18.675,9.17,19.763,8,21.565,8c0.732,0.731,0.381,2.656,0.102,3.594 c0.836,0.945,1.328,2.066,1.328,3.226c0,2.697-1.904,4.684-5.894,5.097C18.199,20.49,19,22.1,19,23.313v2.734 c0,0.104-0.023,0.179-0.035,0.268C23.641,24.676,27,20.236,27,15C27,8.373,21.627,3,15,3z"></path>
              </svg>
              <div>GitHub</div>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
