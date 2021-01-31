/* global window */
import React, { useState, useRef, useEffect } from "react"
import { useTransition, useSpring, animated } from "react-spring"
import { useTranslation } from "react-i18next"
import tw, { styled } from "twin.macro"
import { BigText, MediumText, PageContainer } from "../../../common/elements"
import NonsenseBox from "./nonsense-box"
import usePrevious from "../../../hooks/use-previous"
import * as easings from "d3-ease"

const NonsenseButton = styled.button`
  ${tw`px-2 py-1 whitespace-no-wrap transition duration-100 ease-in transform rounded-full text-xxs sm:px-4 sm:py-2 sm:text-xs hover:opacity-75 focus:outline-none`},
  ${({ thisKey, selectedKey }) =>
    thisKey === selectedKey
      ? tw`text-white bg-bubble-blue`
      : tw`bg-light-grey dark:bg-dark-box text-grey`}
`

const dataKeys = [
  "asic_farms",
  "pre_mining",
  "secure_storing",
  "ico",
  "no_development",
  "pump_and_dump",
  "non_vibrant_communities",
  "instant_transactions",
]

const Nonsense = () => {
  let { t } = useTranslation()
  const [index, setIndex] = useState(0)

  let pageContainerRef = useRef(null)
  let buttonsContainerRef = useRef(null)
  const buttonsRef = useRef([])

  useEffect(() => {
    buttonsRef.current = buttonsRef.current.slice(0, dataKeys.length)
  }, [])

  const previousSlide = usePrevious(index)

  const dir = index < previousSlide ? -1 : 1
  const boxTransitions = useTransition(index, item => item, {
    initial: { opacity: 1, transform: `translate3d(0, 0, 0)` },
    from: { opacity: 0, transform: `translate3d(${30 * dir}%, 0, 0)` },
    enter: { opacity: 1, transform: `translate3d(0, 0, 0)` },
    leave: { opacity: 0, transform: `translate3d(${-30 * dir}%, 0, 0)` },
    unique: true,
    reset: true,
    config: {
      duration: 400,
      easing: easings.easeCubicOut,
    },
  })

  let buttonOffsetX =
    (buttonsRef.current[index] && buttonsRef.current[index].offsetLeft) || 0
  let buttonWidth =
    (buttonsRef.current[index] && buttonsRef.current[index].offsetWidth) || 0
  let windowWidth = window.innerWidth

  let offsetX = 0
  if (windowWidth <= 1024) {
    offsetX = windowWidth / 2 - buttonOffsetX - buttonWidth / 2
  } else {
    let containerWidth =
      buttonsContainerRef.current && buttonsContainerRef.current.offsetWidth
    let pageContainerWidth =
      pageContainerRef.current && pageContainerRef.current.offsetWidth

    offsetX = -buttonOffsetX

    let maxOffsetX = -(containerWidth - pageContainerWidth)

    if (offsetX < maxOffsetX) {
      offsetX = maxOffsetX
    }
  }

  console.log("offsetX", {
    offsetX,
    windowWidth,
    buttonOffsetX,
    buttonWidth,
  })

  const buttonContainerProps = useSpring({
    transform: `translate3d(${offsetX}px, 0, 0)`,
    config: {
      duration: 400,
      easing: easings.easeCubicOut,
    },
  })

  return (
    <div tw="mt-24 sm:mt-48 overflow-hidden">
      <PageContainer tw="px-6 sm:px-0" ref={pageContainerRef}>
        <BigText tw="mt-20 mb-20">{t("home.nonsense.title")}</BigText>
        <MediumText tw="mb-24">{t("home.nonsense.caption")}</MediumText>
        <div tw="h-112 relative">
          {boxTransitions.map(({ props, key }) => (
            <NonsenseBox keyName={dataKeys[key]} key={key} style={props} />
          ))}
        </div>
      </PageContainer>
      <div tw="mt-8 py-2 overflow-hidden">
        <PageContainer>
          <animated.div
            style={buttonContainerProps}
            tw="inline-flex"
            ref={buttonsContainerRef}
          >
            {dataKeys.map((key, keyIndex) => {
              return (
                <span
                  tw="px-2"
                  key={keyIndex}
                  ref={el => (buttonsRef.current[keyIndex] = el)}
                >
                  <NonsenseButton
                    onClick={() => setIndex(keyIndex)}
                    selectedKey={index}
                    thisKey={keyIndex}
                  >
                    {t(`home.nonsense.bubbles.${key}.title`)}
                  </NonsenseButton>
                </span>
              )
            })}
          </animated.div>
        </PageContainer>
      </div>
    </div>
  )
}

export default Nonsense
