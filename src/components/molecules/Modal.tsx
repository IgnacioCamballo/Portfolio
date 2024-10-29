
type ModalProps = {
  children: React.ReactElement,
  onClose?: () => void,
  width?: string | number,
  height?: string | number,
  maxWidth?: string | number,
  maxHeight?: string | number
}

export default function Modal({children, onClose, width, height, maxWidth, maxHeight}: ModalProps) {

  return ( 
    <>
      <div 
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: "rgba(0, 0, 0, 0.4)"
        }}
        onClick={onClose}
        >
      </div>
    
      <div
        style={{
          position: "fixed",
          top: "50%",
          left: "50%",
          transform: "translateX(-50%) translateY(-50%)",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          width: width,
          height: height,
          maxWidth: maxWidth,
          maxHeight: maxHeight,
          zIndex: 1
        }}
      >
      {children}
      </div>
    </>
  )
}

