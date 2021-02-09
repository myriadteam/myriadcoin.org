import React from "react"
import { algoritms } from "../../../common/algoritms"
import {
  MediumBoldText,
  BodyText,
  Code,
  LinkButton,
} from "../../../common/elements"
import Dropdown from "../../dropdown"
import { animated, useSpring } from "react-spring"
import tw from "twin.macro"

import { useTranslation } from "react-i18next"

const AlgorithmInfo = ({
  algoritm: { value, softwares = null },
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
        {t("components.algoritm.recommended_for")}{" "}
        {t(`algoritms.${value}.purpose`)}.
      </BodyText>
      <BodyText tw="mb-16">{t(`algoritms.${value}.description`)}</BodyText>
      {softwares && (
        <MediumBoldText>
          2.{" "}
          {t("components.algoritm.available_software", {
            name: t(`algoritms.${value}.label`),
          })}
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
  const { t } = useTranslation()
  return (
    <div>
      <LinkButton href={software.url} tw="mb-4">
        {software.label}
        {software.icon && (
          <>
            <img
              src={software.icon}
              alt={`Icon ${software.label}`}
              tw="ml-4 -my-1"
            />
          </>
        )}
      </LinkButton>
      {software.example && (
        <div tw="mb-16">
          <BodyText tw="font-bold mt-2 mb-4">
            {t("components.algoritm.suggested_command_line")}
          </BodyText>
          <Code>{software.example.code}</Code>
        </div>
      )}
    </div>
  )
}

const MineAlgoritm = ({ title, selected, onChange = () => {} }) => {
  const { t } = useTranslation()
  return (
    <div tw="px-6">
      <MediumBoldText>
        {title || t("components.algoritm.choose_algoritm")}
      </MediumBoldText>
      <Dropdown
        options={algoritms}
        labelPrefix="algoritms"
        defaultValue={selected}
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
