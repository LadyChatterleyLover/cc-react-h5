import React, { CSSProperties } from "react"
import { Icon as RIcons } from "@ricons/utils"
export interface IconProps {
  style?: CSSProperties
  children: React.ReactNode
  color?: string
  size?: number | string
}

const Icon = (props: IconProps) => {
  const { children, style, color, size } = props
  return (
    <div style={{ ...style }}>
      <RIcons color={color} size={size}>
        {children}
      </RIcons>
    </div>
  )
}

export default Icon
