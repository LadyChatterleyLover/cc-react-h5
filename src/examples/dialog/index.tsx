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
          title="标题"
          content="代码是写出来给人看的，附带能在机器上运行。"></Dialog>
      </div>

      <div className="m-4 text-lg font-bold">无标题</div>
      <div className="mb-4">
        <Button type="primary" onClick={() => setVisible2(true)}>
          无标题
        </Button>
        <Dialog
          visible={visible2}
          onClose={() => setVisible2(false)}
          content="生命远不止连轴转和忙到极限，人类的体验远比这辽阔、丰富得多。"></Dialog>
      </div>

      <div className="m-4 text-lg font-bold">确认弹框</div>
      <div className="mb-4">
        <Button type="primary" onClick={() => setVisible3(true)}>
          确认弹框
        </Button>
        <Dialog
          visible={visible3}
          onClose={() => setVisible3(false)}
          title="标题"
          content="代码是写出来给人看的，附带能在机器上运行。"
          cancelButtonText="取消"
          showCancelButton></Dialog>
      </div>

      <div className="m-4 text-lg font-bold">圆角按钮</div>
      <div className="mb-4">
        <Button type="primary" onClick={() => setVisible4(true)}>
          圆角按钮
        </Button>
        <Dialog
          visible={visible4}
          onClose={() => setVisible4(false)}
          title="标题"
          round
          content="代码是写出来给人看的，附带能在机器上运行。"></Dialog>
      </div>

      <div className="m-4 text-lg font-bold">超长文本</div>
      <div className="mb-4">
        <Button type="primary" onClick={() => setVisible5(true)}>
          超长文本
        </Button>
        <Dialog
          visible={visible5}
          onClose={() => setVisible5(false)}
          title="标题"
          round
          content="代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。代码是写出来给人看的，附带能在机器上运行。"></Dialog>
      </div>

      <div className="m-4 text-lg font-bold">自定义按钮</div>
      <div className="mb-4">
        <Button type="primary" onClick={() => setVisible6(true)}>
          自定义按钮
        </Button>
        <Dialog
          visible={visible6}
          onClose={() => setVisible6(false)}
          title="标题"
          content="代码是写出来给人看的，附带能在机器上运行。"
          footer={
            <div className="flex h-12 justify-center items-center">
              <Button type="success" size="small" onClick={() => setVisible6(false)}>
                确认
              </Button>
            </div>
          }></Dialog>
      </div>

      <div className="m-4 text-lg font-bold">指令用法</div>
      <div className="mb-4">
        <Button
          type="primary"
          onClick={() => {
            Dialog.show({
              title: "标题",
              content: "人在天边月上明",
              getContainer: document.getElementById('root')!,
              onConfirm: () => {
                console.log("Confirmed")
              },
            })
          }}>
          指令用法
        </Button>
      </div>
    </div>
  )
}

export default DialogIndex
