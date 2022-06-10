import React, { CSSProperties } from "react"
import { JustifyProps, AlignProps } from "../types"
import { LayoutContext } from "./context"

export interface RowProps {
  style?: CSSProperties
  gutter?: number | string
  justify?: JustifyProps
  align?: AlignProps
  children: React.ReactNode,
  tag?: string
}

const Row = (props: RowProps) => {
  const { style, gutter = 0, justify = "start", align = "start", tag = 'div', children } = props

  return (
    <div className="flex w-full" style={{ ...style, justifyContent: justify, alignItems: align }}>
      <LayoutContext.Provider value={Number(gutter)}>{children}</LayoutContext.Provider>
    </div>
  )
}

export default Row
