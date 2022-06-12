import { useState, useEffect } from "react"

export const useDisplay = (visible: boolean, duration: number | string, type: "block" | 'flex' | "none" = 'block') => {
  const [display, setDisplay] = useState<"block" | 'flex' | "none">("none")

  useEffect(() => {
    if (visible) {
      setDisplay(type)
    } else {
      setTimeout(() => {
        setDisplay("none")
      }, Number(duration))
    }
  }, [visible])

  return [display]
}