import React, { useRef, useEffect } from "react"
import tw from "twin.macro"
import { useSpring, animated, config } from "react-spring"
import { useGesture } from "react-use-gesture"

const mapWidth = 100
const mapHeight = 100

const mapLonLeft = -180
const mapLonRight = 180
const mapLonDelta = mapLonRight - mapLonLeft

const mapLatBottom = -85
const mapLatBottomDegree = (mapLatBottom * Math.PI) / 180

function convertGeoToPixel(lat, lon) {
  const x = (lon - mapLonLeft) * (mapWidth / mapLonDelta)

  lat = (lat * Math.PI) / 180
  const worldMapWidth = ((mapWidth / mapLonDelta) * 360) / (2 * Math.PI)
  const mapOffsetY =
    (worldMapWidth / 2) *
    Math.log(
      (1 + Math.sin(mapLatBottomDegree)) / (1 - Math.sin(mapLatBottomDegree))
    )
  const y =
    mapHeight -
    ((worldMapWidth / 2) * Math.log((1 + Math.sin(lat)) / (1 - Math.sin(lat))) -
      mapOffsetY)

  return [x, y]
}

const getSize = () => {
  const sizes = [
    1.688,
    1.688,
    1.688,
    1.688,
    1.688,
    1.688,
    1.688,
    1.688,
    1.688,
    1.688,
    1.688,
    1.688,
    1.688,
    2.3,
    2.3,
    2.3,
    2.3,
    2.3,
    2.3,
    2.3,
    2.3,
    3.6,
    3.6,
    5.4,
  ]

  return sizes[parseInt(Math.random() * sizes.length, 10)]
}

const SeedNode = ({ node, bind }) => {
  const boxRef = useRef(null)

  const [{ opacity, scale, backgroundColor }, set] = useSpring(() => ({
    opacity: 0.75,
    scale: 0,
    backgroundColor: "#327CFF",
    config: config.wobbly,
  }))

  useEffect(() => {
    const timeout = setTimeout(() => {
      set({ scale: 1 })
    }, 1000 + Math.random() * 5000)

    return () => {
      clearTimeout(timeout)
    }
  }, [set])

  useGesture(
    {
      onHover: ({ hovering }) => {
        if (hovering) {
          set({ opacity: 0.75, scale: 1.05, backgroundColor: "#02C093" })
        } else {
          set({ opacity: 0.75, scale: 1, backgroundColor: "#327CFF" })
        }
      },
    },
    {
      domTarget: boxRef,
    }
  )

  const lat = node[10]
  const lon = node[11]

  const [left, top] = convertGeoToPixel(lat, lon)
  const size = getSize()

  return (
    <animated.div
      tw="absolute rounded-full bg-blue-500 top-0 left-0"
      style={{
        width: size + "%",
        height: size + "%",
        left: left + "%",
        top: top + "%",
        opacity,
        backgroundColor,
        transform: scale.interpolate(
          scale => `translate(-50%, -50%) scale(${scale})`
        ),
      }}
      ref={boxRef}
      {...bind(node)}
    />
  )
}

export default React.memo(SeedNode)
