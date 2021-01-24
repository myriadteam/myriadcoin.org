import React, { useState } from "react"
import { useTransition } from "react-spring"
import { useTranslation } from "react-i18next"
import tw, { styled } from "twin.macro"
import { BigText, MediumText, PageContainer } from "../../../common/elements"
import NonsenseBox from "./nonsense-box"
import usePrevious from "../../../hooks/use-previous"

const NonsenseButton = styled.button`
  ${tw`px-4 py-2 whitespace-no-wrap transition duration-100 ease-in transform rounded-full hover:opacity-75`}
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

  const previousSlide = usePrevious(index)

  const dir = index < previousSlide ? -1 : 1
  const transitions = useTransition([index], item => item, {
    from: { opacity: 0, transform: `translate3d(${80 * dir}%, 0, 0)` },
    enter: { opacity: 1, transform: `translate3d(0px, 0, 0)` },
    leave: { opacity: 0, transform: `translate3d(${-100 * dir}%, 0, 0)` },
    config: {
      duration: 400,
    },
  })

  return (
    <div tw="mt-24 sm:mt-48">
      <PageContainer tw="px-6 sm:px-0">
        <BigText tw="mt-20 mb-20">{t("home.nonsense.title")}</BigText>
        <MediumText tw="mb-24">{t("home.nonsense.caption")}</MediumText>
        <div tw="h-112 overflow-hidden relative">
          {transitions.map(({ props }) => (
            <NonsenseBox
              keyName={dataKeys[index]}
              key={dataKeys[index]}
              style={props}
            />
          ))}
        </div>
      </PageContainer>
      <div tw="flex mt-10 xl:justify-center">
        {dataKeys.map((key, keyIndex) => {
          return (
            <span tw="px-2" key={`nonsense-btn-${key}`}>
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
      </div>
    </div>
  )
}

export default Nonsense
