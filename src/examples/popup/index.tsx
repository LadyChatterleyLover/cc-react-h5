import { useState } from "react"
import Button from "../../packages/button/Button"
import Popup from "../../packages/popup/Popup"
import { CloseCircleSharp } from "@ricons/ionicons5"

const PopupIndex = () => {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)
  const [visible5, setVisible5] = useState(false)
  const [visible6, setVisible6] = useState(false)
  const [visible7, setVisible7] = useState(false)
  const [visible8, setVisible8] = useState(false)
  const [visible9, setVisible9] = useState(false)
  const [visible10, setVisible10] = useState(false)

  return (
    <div className="p-5">
      <div className="m-4 text-lg font-bold">基础用法</div>
      <div>
        <Button type="primary" onClick={() => setVisible1(true)}>
          展示弹出层
        </Button>
        <Popup visible={visible1} onMaskClick={() => setVisible1(false)}>
          <div>内容</div>
        </Popup>
      </div>

      <div>
        <div className="m-4 text-lg font-bold">不同位置</div>
        <div className="mb-4">
          <Button type="primary" onClick={() => setVisible2(true)}>
            顶部弹出
          </Button>
          <Popup
            visible={visible2}
            position="top"
            style={{ height: "30%" }}
            onMaskClick={() => setVisible2(false)}></Popup>
        </div>

        <div className="mb-4">
          <Button type="primary" onClick={() => setVisible3(true)}>
            底部弹出
          </Button>
          <Popup
            visible={visible3}
            position="bottom"
            style={{ height: "30%" }}
            onMaskClick={() => setVisible3(false)}></Popup>
        </div>

        <div className="mb-4">
          <Button type="primary" onClick={() => setVisible4(true)}>
            左侧弹出
          </Button>
          <Popup
            visible={visible4}
            position="left"
            style={{ width: "30%" }}
            onMaskClick={() => setVisible4(false)}></Popup>
        </div>

        <div className="mb-4">
          <Button type="primary" onClick={() => setVisible5(true)}>
            右侧弹出
          </Button>
          <Popup
            visible={visible5}
            position="right"
            style={{ width: "30%" }}
            onMaskClick={() => setVisible5(false)}></Popup>
        </div>
      </div>

      <div>
        <div className="m-4 text-lg font-bold">关闭按钮</div>
        <div className="mb-4">
          <Button type="primary" onClick={() => setVisible6(true)}>
            关闭按钮
          </Button>
          <Popup
            position="bottom"
            visible={visible6}
            style={{ height: "30%" }}
            closeable
            onMaskClick={() => setVisible6(false)}></Popup>
        </div>

        <div className="mb-4">
          <Button type="primary" onClick={() => setVisible7(true)}>
            图标位置
          </Button>
          <Popup
            position="bottom"
            closeIconPosition="top-left"
            visible={visible7}
            style={{ height: "30%" }}
            closeable
            onMaskClick={() => setVisible7(false)}></Popup>
        </div>

        <div className="mb-4">
          <Button type="primary" onClick={() => setVisible8(true)}>
            自定义图标
          </Button>
          <Popup
            position="bottom"
            visible={visible8}
            style={{ height: "30%" }}
            closeable
            closeIcon={CloseCircleSharp}
            onMaskClick={() => setVisible8(false)}></Popup>
        </div>
      </div>

      <div>
        <div className="m-4 text-lg font-bold">圆角弹框</div>
        <div className="mb-4">
          <Button type="primary" onClick={() => setVisible9(true)}>
            圆角弹框
          </Button>
          <Popup
            position="bottom"
            visible={visible9}
            style={{ height: "30%" }}
            closeable
            round
            onMaskClick={() => setVisible9(false)}></Popup>
        </div>
      </div>
    </div>
  )
}

export default PopupIndex
