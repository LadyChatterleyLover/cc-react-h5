import Button from "../../packages/button/Button"
import Toast from "../../packages/toast/Toast"

const ToastIndex = () => {
  return (
    <div className="p-5">
      <div className="m-4 text-lg font-bold">基础用法</div>
      <div className="mb-4">
        <Button
          type="primary"
          onClick={() => {
            Toast.show({
              content: "提示消息",
            })
          }}>
          普通用法
        </Button>
      </div>
    </div>
  )
}

export default ToastIndex
