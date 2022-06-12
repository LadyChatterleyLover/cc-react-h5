import DOM, { Root } from "react-dom/client"
import Toast, { ToastProps } from "./Toast"

const useToast = (config: ToastProps) => {
  const container = document.createElement("div")
  const hasContainer = typeof config.getContainer === "function" ? config.getContainer?.() : config.getContainer
  const parent = hasContainer ? hasContainer : document.body
  const root: Root = DOM.createRoot(container!)
  parent.appendChild(container!)

  const currentConfig = {
    ...config,
    visible: true,
    onClose: () => {
      close()
      setTimeout(() => {
        destroy()
      }, Number(config.duration = 2000))
    },
  }
  function render(props: ToastProps) {
    root.render(<Toast {...props} />)
  }

  function destroy() {
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

export default useToast
