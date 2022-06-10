import React from "react"
import { useSizeClass, useTypeClass } from "../hooks/useClass"
import { SizeProps, TypeProps } from "../types"

export interface ButtonProps {
  // 按钮类型
  type?: TypeProps
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
  // 加载文案
  loadingText?: string
  // 按钮原生类型
  nativeType?: "submit" | "reset" | "button"
  // 点击事件
  onClick?: (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void
  // 按钮内容
  children: React.ReactNode
}



const Button = (props: ButtonProps) => {
  const {
    type = "",
    size = "middle",
    block = false,
    disabled = false,
    round = false,
    plain = false,
    loading = false,
    loadingText = "",
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
      ${disabled ? 'cursor-not-allowed opacity-40' : ''}
      ${useSizeClass(size)}
      ${block ? "w-full" : ""}
      ${useTypeClass(type, plain)}
      ${round ? "rounded-full" : "rounded"}
      `}
      type={nativeType}
      onClick={(e) => handleClick(e)}>
      {children}
    </button>
  )
}

export default Button
