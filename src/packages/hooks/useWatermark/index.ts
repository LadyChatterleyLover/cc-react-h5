import { useRef, useState } from 'react';

export interface Options {
  width?: number,
  height?: number,
}

export const useWatermark = (str: string) => {
  const domSymbol = Symbol('watermark-dom')
  const id = domSymbol.toString()
  const appendEl: HTMLElement | null = document.body
  const watermarkEl = useRef<HTMLElement | null>()
  const [isCreated, setIsCreated] = useState<boolean>(false)

  const func = () => {
    const el = appendEl
    if (!el) return
    const { clientHeight: height, clientWidth: width } = el
    update({ height, width })
  }

  const createCanvas = (options?: Options) => {
    const width = options?.width || 300
    const height = options?.height || 240
    const canvas = document.createElement('canvas')
    canvas.width = width
    canvas.height = height
    const ctx = canvas.getContext('2d')
    if (ctx) {
      ctx.rotate((-20 * Math.PI) / 120)
      ctx.font = '15px Vedana'
      ctx.fillStyle = 'rgba(0, 0, 0, 0.15)'
      ctx.textAlign = 'left'
      ctx.textBaseline = 'middle'
      ctx.fillText(str, width / 20, height)
    }
    return canvas.toDataURL('image/png')
  }
  const update = (options: {
    width?: number
    height?: number
    str?: string
  } = { width: 300, height: 240 }) => {
    const el = watermarkEl
    if (!el) return
    el.current!.style.width = `${options.width}px`
    el.current!.style.height = `${options.height}px`
    el.current!.style.background = `url(${createCanvas()}) left top repeat`
  }
  const create = (str: string) => {
    if (!isCreated) {
      const div = document.createElement('div')
      watermarkEl.current = div
      div.id = id
      div.style.pointerEvents = 'none'
      div.style.top = '0px'
      div.style.left = '0px'
      div.style.position = 'absolute'
      div.style.zIndex = '100000'
      const el = appendEl
      if (!el) return id
      const { clientHeight: height, clientWidth: width } = el
      update({ str, width, height })
      el.appendChild(div)
      setIsCreated(true)
    }
    return id
  }
  const clear = () => {
    const el = appendEl
    if (!el) return
    el.removeChild(watermarkEl.current!)
    watermarkEl.current = null
    window.removeEventListener('resize', func)
    setIsCreated(false)
  }
  const setWatermark = () => {
    create(str)
    window.addEventListener('resize', func)
  }
  return {
    setWatermark, clear
  }
}