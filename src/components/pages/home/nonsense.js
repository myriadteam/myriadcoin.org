import React, { useState, useRef, useEffect } from "react"
import { useTransition, useSpring, animated } from "react-spring"
import { useTranslation } from "react-i18next"
import tw, { styled } from "twin.macro"
import { BigText, MediumText, PageContainer } from "../../../common/elements"
import NonsenseBox from "./nonsense-box"
import usePrevious from "../../../hooks/use-previous"

const NonsenseButton = styled.button`
  ${tw`px-4 py-2 whitespace-no-wrap transition duration-100 ease-in transform rounded-full hover:opacity-75 focus:outline-none focus:shadow-outline`},
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
  const boxTransitions = useTransition([index], null, {
    initial: { opacity: 1, transform: `translate3d(0, 0, 0)` },
    from: { opacity: 0, transform: `translate3d(${100 * dir}%, 0, 0)` },
    enter: { opacity: 1, transform: `translate3d(0, 0, 0)` },
    leave: { opacity: 0, transform: `translate3d(${-100 * dir}%, 0, 0)` },
    unique: true,
    reset: true,
    config: {
      duration: 400,
    },
  })

  let buttonOffsetX =
    (buttonsRef.current[index] && buttonsRef.current[index].offsetLeft) || 0
  let containerWidth =
    buttonsContainerRef.current && buttonsContainerRef.current.offsetWidth
  let pageContainerWidth =
    pageContainerRef.current && pageContainerRef.current.offsetWidth
  let pageContainerOffsetX =
    pageContainerRef.current && pageContainerRef.current.offsetLeft

  let offsetX = pageContainerOffsetX - buttonOffsetX
  let maxOffsetX = -(containerWidth - pageContainerWidth - pageContainerOffsetX)

  if (offsetX > pageContainerOffsetX) {
    offsetX = pageContainerOffsetX
  }

  if (offsetX < maxOffsetX) {
    offsetX = maxOffsetX
  }

  const buttonContainerProps = useSpring({
    transform: `translate3d(${offsetX}px, 0, 0)`,
  })

  return (
    <div tw="mt-24 sm:mt-48">
      <PageContainer tw="px-6 sm:px-0" ref={pageContainerRef}>
        <BigText tw="mt-20 mb-20">{t("home.nonsense.title")}</BigText>
        <MediumText tw="mb-24">{t("home.nonsense.caption")}</MediumText>
        <div tw="h-112 relative">
          {boxTransitions.map(({ props, key }) => (
            <NonsenseBox keyName={dataKeys[index]} key={key} style={props} />
          ))}
        </div>
      </PageContainer>
      <div tw="mt-8 overflow-hidden py-2">
        <animated.div
          style={buttonContainerProps}
          tw="inline-flex"
          ref={buttonsContainerRef}
        >
          {dataKeys.map((key, keyIndex) => {
            return (
              <span
                tw="px-2 first:pl-0 last:pr-0"
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
      </div>
    </div>
  )
}

export default Nonsense
