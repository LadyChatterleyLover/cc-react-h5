import { TypeProps, SizeProps } from "../../types";

export const useTypeClass = (type: TypeProps, plain: boolean) => {
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

export const useSizeClass = (size: SizeProps) => {
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