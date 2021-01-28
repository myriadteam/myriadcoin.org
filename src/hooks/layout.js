import { useLayoutEffect, useState } from "react"

export function useDimensions(ref) {
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 })

  useLayoutEffect(() => {
    const onLayout = () => {
      const { height, width } = ref.current.getBoundingClientRect()
      setDimensions({ height, width })
    }

    onLayout()
    window.addEventListener("resize", onLayout)

    return () => {
      window.removeEventListener("resize", onLayout)
    }
  }, [ref])

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
