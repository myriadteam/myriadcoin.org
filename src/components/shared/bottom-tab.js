import React, { useState, useRef, useLayoutEffect } from "react"
import { useTransition, useSpring, animated, interpolate } from "react-spring"
import tw, { styled } from "twin.macro"
import * as easings from "d3-ease"

import { PageContainer } from "../../common/elements"
import usePrevious from "../../hooks/use-previous"
import { useDimensions } from "../../hooks/layout"

const TabButton = styled.button`
  ${tw`px-2 py-1 whitespace-no-wrap transition duration-100 ease-in transform rounded-full text-xxs sm:px-4 sm:py-2 sm:text-xs hover:opacity-75 focus:outline-none`},
  ${({ thisKey, selectedKey }) =>
    thisKey === selectedKey
      ? tw`text-white bg-bubble-blue`
      : tw`bg-light-grey dark:bg-dark-box text-grey`}
`

const BottomTab = ({ items }) => {
  const [index, setIndex] = useState(0)

  let pageContainerRef = useRef(null)
  let buttonsContainerRef = useRef(null)
  const buttonsRef = useRef([].slice(0, items.length))

  const { width } = useDimensions(pageContainerRef)

  const [{ offsetX }, setOffsetX] = useSpring(() => ({
    offsetX: 0,
    config: {
      duration: 400,
      easing: easings.easeCubicOut,
    },
  }))

  useLayoutEffect(() => {
    let buttonOffsetX = buttonsRef.current[index].offsetLeft || 0
    let buttonWidth = buttonsRef.current[index].offsetWidth || 0

    let newOffsetX = 0
    if (width <= 960) {
      newOffsetX = width / 2 - buttonOffsetX - buttonWidth / 2
    } else {
      let containerWidth = buttonsContainerRef.current.offsetWidth
      let pageContainerWidth = pageContainerRef.current.offsetWidth

      newOffsetX = -buttonOffsetX

      let maxOffsetX = -(containerWidth - pageContainerWidth)

      if (newOffsetX < maxOffsetX) {
        newOffsetX = maxOffsetX
      }
    }
    setOffsetX({ offsetX: newOffsetX })
  }, [index, setOffsetX, width])

  const previousSlide = usePrevious(index)

  const dir = index < previousSlide ? -1 : 1
  const transition = useTransition(index, {
    initial: { opacity: 1, transform: `translate3d(0, 0, 0)` },
    from: {
      opacity: 0,
      transform: `translate3d(${30 * dir}%, 0, 0)`,
    },
    enter: { opacity: 1, transform: `translate3d(0, 0, 0)` },
    leave: {
      opacity: 0,
      position: "absolute",
      transform: `translate3d(${-30 * dir}%, 0, 0)`,
    },
    config: {
      duration: 400,
      easing: easings.easeCubicOut,
    },
  })

  return (
    <div tw="mt-24 sm:mt-48 overflow-hidden">
      <PageContainer tw="px-6 sm:px-0" ref={pageContainerRef}>
        {transition((props, index) => {
          return (
            <animated.div tw="inset-0" style={props}>
              {items[index].content}
            </animated.div>
          )
        })}
      </PageContainer>
      <div tw="mt-8 py-2 overflow-hidden">
        <PageContainer>
          <animated.div
            style={{
              transform: interpolate([offsetX], offsetX => {
                return `translate3d(${offsetX}px, 0, 0)`
              }),
            }}
            tw="whitespace-no-wrap"
            ref={buttonsContainerRef}
          >
            {items.map(({ label, color }, keyIndex) => {
              return (
                <span
                  tw="px-2"
                  key={keyIndex}
                  ref={el => (buttonsRef.current[keyIndex] = el)}
                >
                  <TabButton
                    onClick={() => setIndex(keyIndex)}
                    selectedKey={index}
                    thisKey={keyIndex}
                    style={
                      index === keyIndex ? { backgroundColor: color } : null
                    }
                  >
                    {label}
                  </TabButton>
                </span>
              )
            })}
          </animated.div>
        </PageContainer>
      </div>
    </div>
  )
}

export default BottomTab
