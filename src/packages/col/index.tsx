import React, { CSSProperties, useMemo, useContext } from "react"
import { LayoutContext } from "../row/context"

export interface ColProps {
  style?: CSSProperties
  span: string | number
  offset?: string | number
  children?: React.ReactNode
}

const Col = (props: ColProps) => {
  const { span = 0, offset = 0, style, children } = props

  const gutter = useContext(LayoutContext)
  const width = useMemo(() => (Number(span) / 24) * 100 + "%", [span])
  const offsetWidth = useMemo(() => (Number(offset) / 24) * 100 + "%", [offset])

  return <div 
  style={{ 
    ...style,
     width, 
     marginLeft: offsetWidth,
     paddingLeft: (gutter / 2) + 'px',
     paddingRight: (gutter / 2) + 'px',
     }}>{children}</div>
}

export default Col
