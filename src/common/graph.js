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
const getNearestDataPoint = (pixels, dataValues, data) => position => {
  const index = getNearestDataPointIndex(pixels, dataValues)(position)
  return data[index]
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

const average = rollingWindow => (a, c) => {
  return {
    x: a.x,
    y: a.y + c.y / rollingWindow,
  }
}

const getCentralRollingAverage = (rawData, rollingWindow) => {
  if (rollingWindow % 2 === 0) {
    rollingWindow += 1
  }

  const slicedData = rawData.slice(
    (rollingWindow - 1) / 2,
    -(rollingWindow - 1) / 2
  )

  const averagedData = slicedData.map((d, i) => {
    const avgD = rawData
      .slice(i, i + rollingWindow)
      .reduce(average(rollingWindow), { x: d.x, y: 0 })

    return avgD
  })

  console.log({ averagedData, slicedData, rawData })

  return { slicedData, averagedData }
}

const getRollingAverage = (rawData, rollingWindow) => {
  const slicedData = rawData.slice(rollingWindow - 1)

  const averagedData = slicedData.map((d, i) => {
    const avgD = rawData
      .slice(i, i + rollingWindow)
      .reduce(average(rollingWindow), { x: d.x, y: 0 })

    return avgD
  })

  console.log({ slicedData, averagedData })

  return { slicedData, averagedData }
}

export const parseDataForLineGraph = ({
  rawData,
  width,
  height,
  startY,
  endY,
  rollingWindow,
  centralRolling,
}) => {
  if (!rawData || !rawData.length) {
    return null
  }

  let data = rawData
  let exactData = rawData

  if (rollingWindow) {
    const { slicedData, averagedData } = centralRolling
      ? getCentralRollingAverage(data, rollingWindow)
      : getRollingAverage(data, rollingWindow)
    data = averagedData
    exactData = slicedData
  }

  const { minX, maxX, minY, maxY, changePercent } = parseHistoryData(exactData)

  const adjustedMinY = startY === undefined ? minY : startY
  const adjustedMaxY = endY === undefined ? maxY : endY

  const x = scaleGraph(minX, maxX, width)
  const y = scaleGraph(adjustedMaxY, adjustedMinY, height)

  const nearestDataPointFromX = getNearestDataPoint(
    width,
    exactData.map(({ x }) => x),
    exactData
  )

  const nearestDataPointIndexFromX = getNearestDataPointIndex(
    width,
    exactData.map(({ x }) => x)
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
    nearestDataPointIndexFromX,
    line,
    minY,
    maxY,
    adjustedMinY,
    adjustedMaxY,
    minX,
    maxX,
    data,
    width,
    height,
    exactData,
  }
}
