import React, { CSSProperties } from "react"
import "./index.scss"
import Overlay from "../overlay/Overlay"
import Button from "../button/Button"
import useDialog from "./useDialog"

export interface DialogProps {
  visible?: boolean
  title?: React.ReactNode
  content?: React.ReactNode
  footer?: React.ReactNode
  width?: number | string
  showConfirmButton?: boolean
  showCancelButton?: boolean
  confirmButtonText?: string
  confirmButtonColor?: string
  cancelButtonText?: string
  cancelButtonColor?: string
  closeOnClickOverlay?: boolean
  onMaskClick?: boolean
  round?: boolean
  onClose?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onConfirm?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  onCancel?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  getContainer?: HTMLElement | (() => HTMLElement) | null
  style?: CSSProperties
}

const Dialog = (props: DialogProps) => {
  const {
    visible,
    title,
    content,
    round = false,
    width = 320,
    showConfirmButton = true,
    showCancelButton = false,
    confirmButtonText = "确认",
    confirmButtonColor = "#ed1c24",
    cancelButtonText = "",
    cancelButtonColor = "blank",
    closeOnClickOverlay = false,
    onMaskClick,
    footer,
    onClose,
    onConfirm,
    onCancel,
    getContainer = null,
    style,
  } = props

  return (
    <Overlay
      visible={visible!}
      getContainer={getContainer!}
      onMaskClick={(e) => {
        if (closeOnClickOverlay) {
          onClose?.(e)
        }
      }}>
      <div className="flex items-center justify-center h-screen">
        <div
          className={`
          ${visible ? "cc-dialog-show" : "cc-dialog-hidden"} 
          bg-white 
          rounded-2xl
          fixed
          `}
          style={{
            ...style,
            width,
          }}>
          {title ? <div className="font-bold pt-7 leading-6 text-center">{title}</div> : null}
          {content ? (
            <div
              className={`
               p-6
               overflow-y-auto
               text-sm
               leading-5
               whitespace-pre-wrap
               text-center
               break-words 
              `}
              style={{
                color: title ? "#646566" : "blank",
                maxHeight: "calc(70vh - 200px)",
              }}>
              {content}
            </div>
          ) : null}

          {!footer ? (
            <div className="flex items-center  border-t border-solid">
              {showCancelButton ? (
                <div
                  onClick={(e) => {
                    onCancel?.(e)
                    onClose?.(e)
                  }}
                  className={`flex-1 flex items-center justify-center h-12 `}
                  style={{ color: cancelButtonColor, borderRight: "1px solid #eee" }}>
                  {round ? (
                    <Button round type="warning" size="small" style={{ width: "80%" }}>
                      {cancelButtonText}
                    </Button>
                  ) : (
                    cancelButtonText
                  )}
                </div>
              ) : null}
              {showConfirmButton ? (
                <div
                  onClick={(e) => {
                    onConfirm?.(e)
                    onClose?.(e)
                  }}
                  className={`flex-1 flex items-center justify-center h-12`}
                  style={{ borderColor: "#eee", color: confirmButtonColor }}>
                  {round ? (
                    <Button round type="danger" size="small" style={{ width: "80%" }}>
                      {confirmButtonText}
                    </Button>
                  ) : (
                    confirmButtonText
                  )}
                </div>
              ) : null}
            </div>
          ) : (
            footer
          )}
        </div>
      </div>
    </Overlay>
  )
}

Dialog.show = useDialog

export default Dialog
