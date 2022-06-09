import React from "react"
import { Icon as RIcons } from '@ricons/utils' 
export interface IconProps {
  children: React.ReactNode,
  color?: string,
  size?: number | string
}

const Icon = (props: IconProps) => {
  const {children, color, size} = props
  return (
    <RIcons color={color} size={size}>
      {children}
    </RIcons>
  )
}

export default Icon