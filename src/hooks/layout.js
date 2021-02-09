import { useLayoutEffect, useState } from "react"
import useResizeObserver from "@react-hook/resize-observer"

export function useDimensions(ref) {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  })

  useLayoutEffect(() => {
    if (!ref.current) {
      return null
    }
    const { width, height } = ref.current.getBoundingClientRect()
    setDimensions({ width, height })
  }, [ref])

  useResizeObserver(ref, entry => {
    const { width, height } = entry.contentRect
    setDimensions({ width, height })
  })

  return dimensions
}

export function useMousePosition(ref) {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 })

  useLayoutEffect(() => {
    const mouseMove = evt => {
      setMousePosition({ x: evt.layerX, y: evt.layerY })
    }

    const box = ref.current
    box.addEventListener("mousemove", mouseMove)

    return () => {
      box.removeEventListener("mousemove", mouseMove)
    }
  }, [ref])

  return mousePosition
}
