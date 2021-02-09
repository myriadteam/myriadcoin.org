import React, { useMemo, useCallback } from "react"
import tw from "twin.macro"
import { useSpring, interpolate } from "react-spring"
import { useDimensions } from "../../hooks/layout"

import ZoomPanContext from "./zoom-pan-context"

export function ZoomPanContextProvider({
  children,
  parsedData,
  boxRef,
  startPeriod,
  startY,
}) {
  const { width: boxWidth, height: boxHeight } = useDimensions(boxRef)

  const getHighestInView = useCallback(
    (offsetX, period) => {
      const from = Math.min(
        Math.max(offsetX, 0),
        parsedData.mappedValues.length - period
      )

      const to = from + period

      return Math.max(...parsedData.mappedValues.slice(from, to))
    },
    [parsedData.mappedValues]
  )

  const getLowestInView = useCallback(
    (offsetX, period) => {
      if (startY !== undefined) {
        return startY
      }

      const from = Math.min(
        Math.max(offsetX, 0),
        parsedData.mappedValues.length - period
      )

      const to = from + period

      return Math.min(...parsedData.mappedValues.slice(from, to))
    },
    [parsedData.mappedValues, startY]
  )

  const getOffsetX = useCallback(
    (dragX, period) => {
      if (!boxWidth) {
        return 0
      }

      const offsetOffset = parsedData.mappedValues.length - period - 1
      const pixelToBar = boxWidth / period
      return offsetOffset - dragX / pixelToBar
    },
    [boxWidth, parsedData.mappedValues.length]
  )

  const startOffsetX = parsedData.mappedValues.length - startPeriod - 1
  const [{ period, dragX, lowestInView, highestInView }, set] = useSpring(
    () => ({
      dragX: 0,
      period: startPeriod,
      lowestInView: getLowestInView(startOffsetX, startPeriod),
      highestInView: getHighestInView(startOffsetX, startPeriod),
    })
  )

  const dragCallback = useCallback(
    ({ down, intentional, delta: [mx] }) => {
      if (down && intentional) {
        const newDragX =
          dragX.animation.to + mx / (startPeriod / period.animation.to)

        set({
          dragX: newDragX,
          lowestInView: getLowestInView(
            getOffsetX(newDragX, startPeriod),
            period.animation.to
          ),
          highestInView: getHighestInView(
            getOffsetX(newDragX, startPeriod),
            period.animation.to
          ),
        })
      }
    },
    [
      dragX.animation.to,
      getHighestInView,
      getLowestInView,
      getOffsetX,
      period.animation.to,
      set,
      startPeriod,
    ]
  )

  const setPeriod = useCallback(
    newPeriod => {
      set({
        period: newPeriod,
        lowestInView: getLowestInView(
          getOffsetX(dragX.animation.to, startPeriod),
          newPeriod
        ),
        highestInView: getHighestInView(
          getOffsetX(dragX.animation.to, startPeriod),
          newPeriod
        ),
      })
    },
    [
      dragX.animation.to,
      getHighestInView,
      getLowestInView,
      getOffsetX,
      set,
      startPeriod,
    ]
  )

  const contextValue = useMemo(() => {
    const offsetX = interpolate([dragX], dragX => {
      return getOffsetX(dragX, startPeriod)
    })

    const viewBox = interpolate(
      [offsetX, period, lowestInView, highestInView],
      (offsetX, period, lowestInView, highestInView) => {
        return `${offsetX} ${lowestInView} ${period} ${
          highestInView - lowestInView
        }`
      }
    )

    return {
      getHighestInView,
      getLowestInView,
      dragX,
      offsetX,
      lowestInView,
      highestInView,
      setPeriod,
      period,
      dragCallback,
      viewBox,
      startPeriod,
      boxWidth,
      boxHeight,
    }
  }, [
    dragX,
    period,
    lowestInView,
    highestInView,
    getHighestInView,
    getLowestInView,
    setPeriod,
    dragCallback,
    startPeriod,
    getOffsetX,
    boxWidth,
    boxHeight,
  ])

  return (
    <ZoomPanContext.Provider value={contextValue}>
      {children}
    </ZoomPanContext.Provider>
  )
}

export default React.memo(ZoomPanContextProvider)
