import React, { useState, useEffect } from "react"
import "./index.scss"

interface LoadingProps {
  type?: "circle" | "spinner"
  color?: string
  size?: string | number
  textSize?: string | number
  textColor?: string
  vertical?: boolean
  children?: React.ReactNode
}

const Loading = (props: LoadingProps) => {
  let {
    type = "circle",
    color = "#c8c9cc",
    size = "22",
    textSize = "14",
    textColor = "#c9c9c9",
    vertical = false,
  } = props

  let [classNames, setClassNames] = useState<string>("")

  useEffect(() => {
    if (type) setClassNames(`loading-icon-${type}`)
    else setClassNames("")
  }, [type])

  return (
    <div 
    className={`loading ${!vertical ? 'items-center' : ''}`} 

    style={{ flexDirection: vertical ? "column" : "row" }}>
      <div
        className={`loading ${classNames}`}
        style={{
          width: size + "px",
          height: size + "px",
          borderLeftColor: type === "circle" && color ? color : "#c7c7c7",
        }}></div>
      <div
        style={{ color: textColor, fontSize: textSize + "px" }}
        className={`${!vertical ? "loading-icon-left" : "loading-icon-top"}`}>
        {props.children}
      </div>
    </div>
  )
}

export default Loading

