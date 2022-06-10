import React, { useState } from "react"
import Button from "../../packages/button"
import Overlay from "../../packages/overlay"

const OverlayIndex = () => {
  const [visible1, setVisible1] = useState(false)

  return (
    <div className="p-5">
      <div className="mb-4">
        <Button type="primary" onClick={() => setVisible1(true)}>
          显示遮罩层
        </Button>
      </div>
      <Overlay visible={visible1} onMaskClick={() => setVisible1(false)}></Overlay>
    </div>
  )
}

export default OverlayIndex
