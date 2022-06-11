import { useState } from "react"
import { Action } from "../../packages/actionSheet/ActionSheet"
import Button from "../../packages/button/Button"
import ActionSheet from "../../packages/actionSheet/ActionSheet"

const ActionSheetIndex = () => {
  const [visible1, setVisible1] = useState(false)
  const [visible2, setVisible2] = useState(false)
  const [visible3, setVisible3] = useState(false)
  const [visible4, setVisible4] = useState(false)
  const [visible5, setVisible5] = useState(false)
  const [visible6, setVisible6] = useState(false)
  const [visible7, setVisible7] = useState(false)
  const [visible8, setVisible8] = useState(false)
  const [visible9, setVisible9] = useState(false)

  const actions: Action[] = [
    { text: "复制", key: "copy" },
    { text: "修改", key: "edit" },
    { text: "删除", key: "delete" },
  ]

  const actions1: Action[] = [
    { text: "复制", key: "copy", color: "red" },
    { text: "修改", key: "edit", disabled: true },
    { text: "删除", key: "delete", loading: true },
  ]

  return (
    <div>
      <div className="p-5">
        <div className="m-4 text-lg font-bold">基础用法</div>
        <div className="mb-4">
          <Button type="primary" onClick={() => setVisible1(true)}>
            基础用法
          </Button>
          <ActionSheet
            visible={visible1}
            actions={actions}
            onClose={() => setVisible1(false)}
            onAction={(action, index) => console.log(action, index)}></ActionSheet>
        </div>

        <div className="m-4 text-lg font-bold">取消按钮</div>
        <div className="mb-4">
          <Button type="primary" onClick={() => setVisible2(true)}>
            取消按钮
          </Button>
          <ActionSheet
            visible={visible2}
            actions={actions}
            cancelText="取消"
            onClose={() => setVisible2(false)}
            onCancel={() => console.log("cancel")}></ActionSheet>
        </div>

        <div className="m-4 text-lg font-bold">描述信息</div>
        <div className="mb-4">
          <Button type="primary" onClick={() => setVisible3(true)}>
            描述信息
          </Button>
          <ActionSheet
            visible={visible3}
            actions={actions}
            description="这是一段描述信息"
            cancelText="取消"
            onClose={() => setVisible3(false)}></ActionSheet>
        </div>

        <div className="m-4 text-lg font-bold">选项状态</div>
        <div className="mb-4">
          <Button type="primary" onClick={() => setVisible4(true)}>
            选项状态
          </Button>
          <ActionSheet
            visible={visible4}
            actions={actions1}
            description="这是一段描述信息"
            cancelText="取消"
            onClose={() => setVisible4(false)}></ActionSheet>
        </div>
      </div>
    </div>
  )
}

export default ActionSheetIndex
