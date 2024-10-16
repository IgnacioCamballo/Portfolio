
type ModalProps = {
  children: React.ReactElement,
  onClose?: () => void
}

export default function Modal({children, onClose}: ModalProps) {

  return ( 
    <div 
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: "rgba(0, 0, 0, 0.2)",
        display: "flex",
        justifyContent: "center",
        alignItems: "center"
      }}
      onClick={onClose}
    >
      {children}
    </div>
  )
}

