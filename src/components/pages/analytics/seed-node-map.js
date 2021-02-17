import React, { useRef, useState } from "react"
import tw from "twin.macro"
import { useGesture } from "react-use-gesture"
import { useSpring, animated } from "react-spring"

import Image from "../../image"

import Map from "../../../svgs/map.inline.svg"
import SeedNodeList from "./seed-node-list"

const SeedNodeMap = ({ nodes }) => {
  const [currentNode, setCurrentNode] = useState([])
  const [{ opacity, left, top }, set] = useSpring(() => ({
    opacity: 0,
    left: 0,
    top: 0,
  }))
  const boxRef = useRef(null)

  const bindDots = useGesture({
    onHover: ({ hovering, args: [node] }) => {
      setCurrentNode(node)
      set({ opacity: hovering ? 1 : 0 })
    },
  })

  useGesture(
    {
      onMove: ({ event }) => {
        if (event && event.pageY && event.pageX) {
          const left = event.pageX - boxRef.current.offsetLeft
          const top = event.pageY - boxRef.current.offsetTop
          set({ top, left })
        }
      },
    },
    {
      domTarget: boxRef,
    }
  )

  const renderNode = () => {
    const [
      ip,
      port,
      ,
      version,
      ,
      ,
      ,
      ,
      city,
      country,
      ,
      ,
      location,
    ] = currentNode
    return (
      <>
        <div>
          IP address: {ip}:{port}
        </div>
        <div>Version: {version}</div>
        <div>Zone: {location}</div>
        {city && <div>City: {city}</div>}
        <div>Country: {country}</div>
      </>
    )
  }

  return (
    <>
      <div tw="relative" ref={boxRef}>
        <animated.div
          tw="absolute p-4 text-black bg-white rounded-14 z-10 pointer-events-none shadow-wide"
          style={{ opacity, left, top, transform: "translate(-50%, 1rem)" }}
        >
          <svg
            width="13"
            height="6"
            viewBox="0 0 13 6"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            tw="absolute top-0"
            style={{ left: "50%", transform: "translate(-50%, -100%)" }}
          >
            <path d="M6.5 0L12.1292 6H0.870835L6.5 0Z" fill="white" />
          </svg>

          {renderNode()}
        </animated.div>
        <Image filename="map.dark.png" alt="Map" tw="hidden dark:block" />
        <Image filename="map.light.png" alt="Map" tw="block dark:hidden" />
        <div
          tw="absolute w-full top-0"
          style={{
            top: "50%",
            left: "50%",
            transform: "translate(-53.2%, -36.5%) scale(1.01)",
          }}
        >
          <div tw="w-full" style={{ paddingBottom: "100%" }} />
          <SeedNodeList nodes={nodes} bind={bindDots} />
        </div>
      </div>
    </>
  )
}

export default React.memo(SeedNodeMap)
