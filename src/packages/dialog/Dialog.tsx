import React, { CSSProperties, useState, useEffect } from "react"
import "./index.scss"
import Overlay from "../overlay/Overlay"

export interface DialogProps {
  visible: boolean
  title?: React.ReactNode
  content?: React.ReactNode
  width?: number | string
  showConfirmButton?: boolean
  showCancelButton?: boolean
  confirmButtonText?: string
  confirmButtonColor?: string
  cancelButtonText?: string
  cancelButtonColor?: string
  closeOnClickOverlay?: boolean
  onMaskClick?: boolean
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
    width = 320,
    showConfirmButton = true,
    showCancelButton = false,
    confirmButtonText = "确认",
    confirmButtonColor = "#ed1c24",
    cancelButtonText = "",
    cancelButtonColor = "blank",
    closeOnClickOverlay = false,
    onMaskClick,
    onClose,
    onConfirm,
    onCancel,
    getContainer = null,
    style,
  } = props

  return (
    <Overlay
      visible={visible}
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
              `}>
              {content}
            </div>
          ) : null}
          <div className="flex items-center h-12 border-t border-solid" style={{}}>
            <div 
            onClick={(e) => {
              onConfirm?.(e);
              onClose?.(e);
            }}
            className="flex-1 flex items-center justify-center" style={{borderColor: '#eee', color: confirmButtonColor }}>
              {confirmButtonText}
            </div>
            {cancelButtonText ? (
              <div 
              onClick={(e) => {
                onCancel?.(e);
                onClose?.(e);
              }}
              className="flex-1 flex items-center justify-center" style={{ color: cancelButtonColor }}>
                {cancelButtonText}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </Overlay>
  )
}

export default Dialog
