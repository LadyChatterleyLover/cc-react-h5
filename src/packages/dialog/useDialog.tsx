import DOM, { Root } from "react-dom/client"
import type { DialogProps } from "./Dialog"
import Dialog from "./Dialog"

function useDialog(config: DialogProps) {
  const container = document.createElement("div")
  const hasContainer = typeof config.getContainer === "function" ? config.getContainer?.() : config.getContainer
  const parent = hasContainer ? hasContainer : document.body
  const root: Root = DOM.createRoot(container!)
  parent.appendChild(container!)

  const currentConfig = {
    ...config,
    visible: true,
    onCancel: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      config.onCancel?.(e)
      close()
      setTimeout(() => {
        destroy()
      }, Number(300))
    },
    onConfirm: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
      config.onConfirm?.(e)
      close()
      setTimeout(() => {
        destroy()
      }, Number(300))
    },
  }
  function render(props: DialogProps) {
    root.render(<Dialog {...props} />)
  }

  function destroy() {
    console.log("222")
    root?.unmount()
    if (container!.parentNode) {
      container?.parentNode.removeChild(container)
    }
  }

  function close() {
    render({
      ...currentConfig,
      visible: false,
    })
  }

  render(currentConfig)
}

export default useDialog
