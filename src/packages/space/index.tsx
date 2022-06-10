import React from "react"
import { Direction, JustifyProps, AlignProps } from "../types"

export interface SpaceProps {
  gap?: string | number
  // 主轴对齐方式
  justify?: JustifyProps
  // 交叉轴对齐方式
  align?: AlignProps
  // 间距方向
  direction?: Direction
  // 是否自动换行，仅在 horizontal 时有效
  wrap?: boolean
  // 点击事件
  onClick?: (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => void
  children: React.ReactNode
}

const Space = (props: SpaceProps) => {
  const {
    gap = 8,
    justify = "start",
    align = "start",
    direction = "horizontal",
    wrap = false,
    onClick,
    children,
  } = props

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    onClick?.(e)
  }

  return (
    <div
      className={`
      flex 
      ${direction === "vertical" ? "flex-col" : ""}
      ${wrap && direction === "horizontal" ? "flex-wrap" : ""}
      `}
      style={{
        justifyContent: justify,
        alignItems: align,
      }}
      onClick={(e) => handleClick(e)}>
      {React.Children.map(props.children, (child, index) => {
        return (
          child !== null &&
          child !== undefined && (
            <div
              className="flex items-center"
              style={{
                marginRight:
                  direction === "horizontal" && index !== React.Children.count(props.children) - 1 ? gap + "px" : 0,
                marginBottom:
                  direction === "vertical" && index !== React.Children.count(props.children) - 1 ? gap + "px" : 0,
                paddingBottom: direction === "horizontal" && wrap ? gap + "px" : 0,
              }}>
              {child}
            </div>
          )
        )
      })}
    </div>
  )
}

export default Space
