import React, { useEffect } from "react"
import { useDisplay } from "../hooks/useDisplay"
import useToast from "./useToast"
import "./index.scss"

export interface ToastProps {
  visible?: boolean
  type?: "" | "loading" | "success" | "fail" | React.ReactNode
  duration?: number | string
  position?: "center" | "top" | "bottom"
  getContainer?: HTMLElement | (() => HTMLElement) | null
  content?: React.ReactNode
  onClose?: () => void
}

const Toast = (props: ToastProps) => {
  const { visible = false, type = "", duration = 2000, position = "center", onClose, content = "" } = props
  const [display] = useDisplay(visible, duration, "flex")
  const [contentDisplay] = useDisplay(visible, duration)

  useEffect(() => {
    onClose?.()
  }, [duration])

  return (
    <div
      className={`
      cc-toast
      ${visible ? "cc-toast-show" : "cc-toast-hidden"}
      fixed 
      top-0 
      bottom-0 
      left-0 
      right-0 
      flex 
      items-center 
      justify-center
      `}
      style={{ display }}>
      <div
        className={`
        bg-black
        text-white 
          px-6
          py-2 
          w-fit 
          rounded-lg
        `}>
        {content}
      </div>
    </div>
  )
}

Toast.show = useToast

export default Toast
