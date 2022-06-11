import { useState } from "react"
import Button from "../../packages/button/Button"
import Dialog from "../../packages/dialog/Dialog"


const DialogIndex = () => {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)
  const [visible5, setVisible5] = useState(false)
  const [visible6, setVisible6] = useState(false)
  const [visible7, setVisible7] = useState(false)
  const [visible8, setVisible8] = useState(false)
  const [visible9, setVisible9] = useState(false)

  return (
    <div className="p-5">
      <div className="m-4 text-lg font-bold">基础用法</div>
      <div className="mb-4">
        <Button type="primary" onClick={() => setVisible1(true)}>
          描述信息
        </Button>
        <Dialog 
        visible={visible1} 
        onClose={() => setVisible1(false)}
        title='标题'
        content='代码是写出来给人看的，附带能在机器上运行。'
        ></Dialog>
      </div>
    </div>
  )
}

export default DialogIndex
