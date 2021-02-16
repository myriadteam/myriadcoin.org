import React, { useEffect, useState } from "react"
import tw from "twin.macro"

import Map from "../../../svgs/map.inline.svg"
import Map2 from "../../../svgs/map2.inline.svg"

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

const SeedNodeMap = () => {
  const [nodes, setNodes] = useState([])

  useEffect(() => {
    const getData = async () => {
      const uri = `https://xmy-nodes.coinid.org/latest.json`
      return await fetch(uri).then(r => r.json())
    }

    getData().then(setNodes)
  }, [])

  return (
    <div tw="relative">
      <Map tw="w-full" />
      <div
        tw="absolute w-full top-0"
        style={{
          top: "50%",
          left: "50%",
          transform: "translate(-53.2%, -36.5%) scale(1.01)",
        }}
      >
        {1 ? (
          <div tw="w-full" style={{ paddingBottom: "100%" }} />
        ) : (
          <Map2 width="100%" style={{ opacity: 0.3 }} />
        )}
        {nodes.map(node => {
          const ip = node[0]
          const lat = node[10]
          const lon = node[11]
          const location = node[12]

          const [left, top] = convertGeoToPixel(lat, lon)

          return (
            <div
              key={ip}
              tw="absolute rounded-full bg-blue-500 top-0 left-0"
              style={{
                width: "1%",
                height: "1%",
                left: left + "%",
                top: top + "%",
                transform: "translate(-50%, -50%)",
                backgroundColor: "rgba(50, 124, 255, 0.75)",
              }}
              title={ip + " (" + location + ")"}
            />
          )
        })}
      </div>
    </div>
  )
}

export default React.memo(SeedNodeMap)
