import React, { CSSProperties, useEffect, useState } from "react"
import { Position } from "../types"
import { Close } from "@ricons/ionicons5"
import "./index.scss"
import Overlay from "../overlay/Overlay"
import Icon from "../icon/Icon"

export interface PopupProps {
  visible: boolean
  zIndex?: string | number
  position?: Position
  overlay?: boolean
  duration?: number | string
  round?: boolean
  closeable?: boolean
  closeIcon?: any
  closeIconPosition?: "top-right" | "top-left" | "bottom-left" | "bottom-right"
  children?: React.ReactNode
  style?: CSSProperties,
  getContainer?: HTMLElement | (() => HTMLElement | null)
  onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Popup = (props: PopupProps) => {
  const {
    visible = false,
    position = "center",
    overlay = true,
    duration = 300,
    zIndex = 999,
    round = false,
    closeable = false,
    closeIcon = Close,
    children,
    style,
    getContainer = document.body,
    closeIconPosition = "top-right",
    onMaskClick,
  } = props

  const [display, setDisplay] = useState<"block" | "none">("none")

  const handleOnMaskClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onMaskClick?.(e)
  }

  useEffect(() => {
    if (visible) {
      setDisplay("block")
    } else {
      setTimeout(() => {
        setDisplay("none")
      }, Number(duration))
    }
  }, [visible])

  return (
    <Overlay
      background={overlay ? "rgba(0,0,0,.5)" : "#fff"}
      visible={visible}
      zIndex={zIndex}
      duration={duration}
      getContainer={getContainer}
      onMaskClick={(e: React.MouseEvent<HTMLDivElement, MouseEvent>) => handleOnMaskClick(e)}>
      <div
        onClick={(e) => e.stopPropagation()}
        className={`
          fixed 
          max-h-full 
        bg-white 
          ${
            position === "center"
              ? `
              top-1/2 
              left-1/2 
              -translate-x-1/2
              -translate-y-1/2
              px-8
              py-12`
              : ""
          }
          cc-popup-${position}
          ${visible ? `cc-popup-${position}-show` : `cc-popup-${position}-hidden`}
          ${round ? 'rounded-t-3xl' : ''}
      `}
        style={{
          ...style,
          zIndex,
          animationDuration: Number(duration) / 1000 + "s",
          display,
        }}>
        {closeable ? (
          <div 
          onClick={handleOnMaskClick}
          className={
            `absolute
            ${closeIconPosition === 'top-right' ? 'right-2 top-2' : ''}
            ${closeIconPosition === 'top-left' ? 'left-2 top-2' : ''}
            ${closeIconPosition === 'bottom-right' ? 'right-2 bottom-2' : ''}
            ${closeIconPosition === 'bottom-left' ? 'left-2 bottom-2' : ''}
            `
            }>
            <Icon size={24} color='#c8c9cc'>{React.createElement(closeIcon)}</Icon>
          </div>
        ) : null}
        {children}
      </div>
    </Overlay>
  )
}

export default Popup
