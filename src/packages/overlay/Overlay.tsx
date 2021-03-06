import React, { CSSProperties, useEffect, useState } from "react"
import ReactDOM from "react-dom"
import { useDisplay } from "../hooks/useDisplay"
import "./index.scss"

export interface OverlayProps {
  style?: CSSProperties
  visible: boolean
  zIndex?: number | string
  duration?: number | string
  getContainer?: HTMLElement | (() => HTMLElement | null)
  background?: string
  children?: React.ReactNode
  onMaskClick?: (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
}

const Overlay = (props: OverlayProps) => {
  const {
    style,
    visible = false,
    zIndex = 999,
    getContainer = document.body,
    duration = 300,
    background = "rgba(0,0,0,.5)",
    onMaskClick,
    children,
  } = props

  const [display] = useDisplay(visible, duration)

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onMaskClick?.(e)
  }

  const renderContent = () => {
    return (
      <div
        onClick={(e) => handleClick(e)}
        className={`
          cc-overlay 
          fixed 
          top-0 
          bottom-0 
          left-0 
          right-0
          ${visible ? "cc-overlay-show" : "cc-overlay-hidden"}
          `}
        style={{
          ...style,
          display,
          zIndex,
          background,
          animationDuration: Number(duration) / 1000 + "s",
        }}>
        {children}
      </div>
    )
  }

  const render = () => {
    const container = typeof getContainer === "function" ? getContainer() : getContainer
    return container ? ReactDOM.createPortal(renderContent(), container!) : renderContent()
  }

  return render()
}

export default Overlay
