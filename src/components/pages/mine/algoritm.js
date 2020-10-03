import React from "react"
import { algoritms } from "../../../common/algoritms"
import { MediumBoldText, BodyText, Code } from "../../../common/elements"
import Dropdown from "../../dropdown"
import { animated, useSpring } from "react-spring"
import tw from "twin.macro"

import { useTranslation } from "react-i18next"

const AlgorithmInfo = ({
  algoritm: { value, label, description, purpose, softwares = null },
  isVisible,
}) => {
  const { t } = useTranslation()

  const style = useSpring({
    overflow: "hidden",
    opacity: isVisible ? 1 : 0,
    height: isVisible ? "auto" : 0,
  })
  return (
    <animated.div style={style}>
      <BodyText tw="font-bold mt-10 mb-8">
        {t("components.algoritm.recommended_for")} {purpose}.
      </BodyText>
      <BodyText tw="mb-16">{description}</BodyText>
      {softwares && (
        <MediumBoldText>
          2. {t("components.algoritm.available_software")}
          <br />
          {label}
        </MediumBoldText>
      )}
      {softwares &&
        softwares.map((software, key) => (
          <Software software={software} key={key} />
        ))}
    </animated.div>
  )
}

const Software = ({ software }) => {
  return (
    <div>
      <a
        href={software.url}
        tw="inline-flex items-center justify-center bg-black hover:bg-purple text-white font-bold text-lg py-3 px-10 rounded-md mb-8"
      >
        {software.label}
        {software.icon && (
          <>
            <img src={software.icon} alt={`Icon ${software.label}`} tw="ml-4" />
          </>
        )}
      </a>
      {software.example && (
        <>
          <BodyText tw="font-bold mt-2 mb-4">{software.example.label}</BodyText>
          <Code>{software.example.code}</Code>
        </>
      )}
    </div>
  )
}

const MineAlgoritm = ({ title, selected, onChange = () => {} }) => {
  const { t } = useTranslation()
  return (
    <div class="px-6 sm:px-0">
      <MediumBoldText>
        {title || t("components.algoritm.choose_algoritm")}
      </MediumBoldText>
      <Dropdown
        options={algoritms}
        selected={selected}
        onChange={({ value }) => onChange(value)}
      />
      {algoritms.map((algoritm, key) => (
        <AlgorithmInfo
          algoritm={algoritm}
          isVisible={selected === algoritm.value}
          key={key}
        />
      ))}
    </div>
  )
}

export default MineAlgoritm
