import { svgPathProperties } from "svg-path-properties"
import * as d3Shape from "d3-shape"

export const scaleGraph = (min, max, pixels) => value =>
  (pixels * (value - min)) / (max - min)

const getNearestDataPointIndex = (pixels, dataValues) => position => {
  const min = Math.min(...dataValues)
  const max = Math.max(...dataValues)

  const relativeValue = min + ((max - min) * position) / pixels

  const distanceIndexes = dataValues.map((value, index) => [
    Math.abs(value - relativeValue),
    index,
  ])

  distanceIndexes.sort(([distanceA], [distanceB]) => distanceA - distanceB)

  return distanceIndexes[0][1]
}

export const parseHistoryData = data => {
  if (!data.length) {
    return {
      minX: 0,
      maxX: 0,
      minY: 0,
      maxY: 0,
    }
  }

  const mappedPrices = data.map(v => v.y)

  const minX = data[0].x
  const maxX = data[data.length - 1].x

  const minY = Math.min(...mappedPrices)
  const maxY = Math.max(...mappedPrices)

  const startValue = mappedPrices[0]
  const endValue = mappedPrices[mappedPrices.length - 1]
  const change = endValue - startValue
  const changePercent = change / mappedPrices[0]

  return {
    minX,
    maxX,
    minY,
    maxY,
    startValue,
    endValue,
    change,
    changePercent,
  }
}

export const parseDataForLineGraph = (data, width, height) => {
  if (!data.length) {
    return {
      gradientDivide: 0,
      lineLength: 0,
      svgLine: null,
    }
  }

  const { minX, maxX, minY, maxY, changePercent } = parseHistoryData(data)

  const diff = maxY - minY
  const extra = diff * 0

  const adjustedMinY = minY - extra
  const adjustedMaxY = maxY + extra

  const x = scaleGraph(minX, maxX, width)
  const y = scaleGraph(adjustedMaxY, adjustedMinY, height)
  const nearestDataPointFromX = getNearestDataPointIndex(
    width,
    data.map(({ time }) => time)
  )

  const gradientDivide = y(data[0].y) / height

  const line = d3Shape
    .line()
    .curve(d3Shape.curveMonotoneX)
    .x(d => x(d.x))
    .y(d => y(d.y))

  const svgLine = line(data)

  const svgLineFill = line([
    { ...data[0], y: adjustedMinY },
    ...data,
    { ...data[data.length - 1], y: adjustedMinY },
  ])

  const getSvgDivideLine = () => {
    if (minY === data[0].y || maxY === data[0].y) {
      return null
    }

    return line([data[0], { ...data[data.length - 1], y: data[0].y }])
  }

  const svgDivideLine = getSvgDivideLine()

  const properties = new svgPathProperties(svgLine)
  const lineLength = properties.getTotalLength()

  return {
    svgLine,
    svgLineFill,
    svgDivideLine,
    gradientDivide,
    lineLength,
    changePercent,
    x,
    y,
    nearestDataPointFromX,
    line,
    minY,
    maxY,
    adjustedMinY,
    adjustedMaxY,
    minX,
    maxX,
  }
}