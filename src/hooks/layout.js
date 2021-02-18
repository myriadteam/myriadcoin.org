import { useLayoutEffect, useState } from "react"
import useResizeObserver from "@react-hook/resize-observer"

export function useDimensions(ref) {
  const [dimensions, setDimensions] = useState({
    width: 0,
    height: 0,
  })

  useLayoutEffect(() => {
    if (ref.current) {
      const { width, height } = ref.current.getBoundingClientRect()
      setDimensions({ width, height })
    }
  }, [ref])

  useResizeObserver(ref, entry => {
    const { width, height } = entry.contentRect
    setDimensions({ width, height })
  })

  return dimensions
}

export function usePosition(ref) {
  const [position, setPosition] = useState({
    left: 0,
    top: 0,
  })

  useLayoutEffect(() => {
    const onLayout = () => {
      if (ref.current) {
        const { left, top } = ref.current.getBoundingClientRect()
        setPosition({ left, top })
      }
    }

    onLayout()
    setTimeout(onLayout, 400)
    return () => {
      clearTimeout(onLayout)
    }
  }, [ref])

  useLayoutEffect(() => {
    const onResize = () => {
      if (ref.current) {
        const { left, top } = ref.current.getBoundingClientRect()
        setPosition({ left, top })
      }
    }

    window.addEventListener("resize", onResize)

    return () => {
      window.removeEventListener("resize", onResize)
    }
  }, [ref])

  return position
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
