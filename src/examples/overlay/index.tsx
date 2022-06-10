import React, { useState } from "react"
import Button from "../../packages/button"
import Overlay from "../../packages/overlay"

const OverlayIndex = () => {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)

  return (
    <div className="p-5">
      <div className="mb-4">
        <Button type="primary" onClick={() => setVisible1(true)}>
          显示遮罩层
        </Button>
      </div>
      <div className="mb-4">
        <Button type="primary" onClick={() => setVisible2(true)}>
          嵌入内容
        </Button>
      </div>
      <Overlay visible={visible1} onMaskClick={() => setVisible1(false)}></Overlay>
      <Overlay visible={visible2} onMaskClick={() => setVisible2(false)}>
        <div className="flex items-center justify-center h-full">
          <div className="w-32 h-32 bg-white"></div>
        </div>
      </Overlay>
    </div>
  )
}

export default OverlayIndex
