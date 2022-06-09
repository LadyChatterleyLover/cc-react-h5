import React from "react"
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

const useTypeClass = (type: TypeProps, plain: boolean) => {
  const colorList: { type: string; className: string; plainClassName: string }[] = [
    {
      type: "",
      className: "bg-white text-black border border-solid border-slate-100",
      plainClassName: "bg-white text-black border border-solid border-slate-100",
    },
    {
      type: "primary",
      className: "bg-primary text-white border border-solid border-primary",
      plainClassName: "text-primary bg-white border border-solid border-primary",
    },
    {
      type: "success",
      className: "bg-success text-white border border-solid border-success",
      plainClassName: "text-success bg-white border border-solid border-success",
    },
    {
      type: "warning",
      className: "bg-warning text-white border border-solid border-warning",
      plainClassName: "text-warning bg-white border border-solid border-warning",
    },
    {
      type: "danger",
      className: "bg-danger text-white border border-solid border-danger",
      plainClassName: "text-danger bg-white border border-solid border-danger",
    },
  ]
  const item = colorList.find((i) => i.type === type)!
  return plain ? item.plainClassName : item.className
}

const useSizeClass = (size: SizeProps) => {
  const sizeList: { size: string; className: string }[] = [
    {
      size: "mini",
      className: "py-1 text-xs",
    },
    {
      size: "small",
      className: "py-1 text-sm",
    },
    {
      size: "middle",
      className: "py-2",
    },
    {
      size: "large",
      className: "py-3 text-lg",
    },
  ]
  const item = sizeList.find((i) => i.size === size)!
  return item.className
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
      ${useSizeClass(size)}
      ${block ? "w-full" : ""}
      ${useTypeClass(type, plain)}
      ${round ? "rounded-r-full" : "rounded"}
      `}
      type={nativeType}
      onClick={(e) => handleClick(e)}>
      {children}
    </button>
  )
}

export default Button
