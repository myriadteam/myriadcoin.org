import { useLayoutEffect, useState, useMemo, useCallback, useRef } from "react"

export function useDimensions(ref) {
  const [{ width, height, left }, setDimensions] = useState({
    width: 0,
    height: 0,
    left: 0,
  })

  const prevDimensions = useRef({ width, height, left })

  const onLayout = useCallback(() => {
    const {
      width: prevWidth,
      height: prevHeight,
      left: prevLeft,
    } = prevDimensions.current

    const { width, height, left } = ref.current.getBoundingClientRect()

    if (width !== prevWidth || height !== prevHeight || left !== prevLeft) {
      prevDimensions.current = { width, height, left }
      setDimensions({ width, height, left })
    }
  }, [ref])

  useLayoutEffect(() => {
    onLayout()
  }, [onLayout])

  useLayoutEffect(() => {
    window.addEventListener("resize", onLayout)

    return () => {
      window.removeEventListener("resize", onLayout)
    }
  }, [onLayout])

  return useMemo(() => ({ width, height, left }), [height, left, width])
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
