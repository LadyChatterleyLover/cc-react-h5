import React, { CSSProperties, ReactNode } from "react"
import { useSizeClass, useTypeClass } from "../hooks/useClass"
import Icon from "../icon"
import Loading from "../loading"
import { SizeProps, TypeProps } from "../types"

export interface ButtonProps {
  // 样式
  style?: CSSProperties
  // 按钮类型
  type?: TypeProps
  // 图标
  icon?: ReactNode
  // 按钮尺寸
  size?: SizeProps
  // 块级按钮
  block?: boolean
  // 朴素按钮
  plain?: boolean
  // 禁用状态
  disabled?: boolean
  // 圆角按钮
  round?: boolean
  // 加载状态
  loading?: boolean
  // 加载类型
  loadingType?: "circle" | "spinner"
  // 按钮原生类型
  nativeType?: "submit" | "reset" | "button"
  // 点击事件
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  // 按钮内容
  children: React.ReactNode
}

const Button = (props: ButtonProps) => {
  const {
    style = {},
    type = "",
    size = "middle",
    icon,
    block = false,
    disabled = false,
    round = false,
    plain = false,
    loading = false,
    loadingType = "circle",
    nativeType = "button",
    children,
    onClick,
  } = props

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    if (disabled) return
    onClick?.(e)
  }

  return (
    <button
      style={{ ...style }}
      className={`
      px-3
      text-base
      flex
      justify-center
      items-center
      cursor-pointer
      select-none
      leading-normal
      h-auto
      ${disabled ? "cursor-not-allowed opacity-40" : ""}
      ${useSizeClass(size)}
      ${block ? "w-full" : ""}
      ${useTypeClass(type, plain)}
      ${round ? "rounded-full" : "rounded"}
      `}
      type={nativeType}
      onClick={(e) => handleClick(e)}>
      <div className="flex items-center">
        {loading ? (
          <div>
            <Loading type={loadingType}></Loading>
          </div>
        ) : null}
        <div className="flex items-center">
          {icon ? (
            <div className="mr-2 relative top-0.5">
              <Icon>{icon}</Icon>
            </div>
          ) : null}
          <div>{children}</div>
        </div>
      </div>
    </button>
  )
}

export default Button
