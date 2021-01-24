import React from "react"
import { useTranslation } from "react-i18next"

import SEO from "../components/seo"
import BgImage from "../components/bg-image"
import HandsParallax from "../components/hands-parallax"
import Nonsense from "../components/pages/home/nonsense"
import LinkWithHover from "../components/link-with-hover"
import Links from "../components/shared/links"
import Link from "../components/shared/link"
import tw, { css } from "twin.macro"
import AnimatedLine from "../components/animated-line"
import { gradientTextStylePink } from "../common/gradients"
import SymbolBox from "../components/symbol-box"
import Cover from "../components/shared/cover"

import Loooong from "../svgs/icons/loooong.inline.svg"
import FunkyPercent from "../svgs/icons/funky-percent.inline.svg"
import IconArrowForward from "../svgs/icons/arrow-forward.inline.svg"

import {
  PageContainer,
  BigText,
  MediumText,
  MediumBoldText,
  BodyText,
} from "../common/elements"

const multiColor = title => {
  const [colorable, rest] = title.split("-")
  const colors = ["#FED17F", "#C376FF", "#27E0B4", "#F971A2", "#23D0E8"]

  const colored = colorable.split("").map((letter, i) => {
    return (
      <span style={{ color: colors[i % colors.length] }} key={i}>
        {letter}
      </span>
    )
  })

  return [colored, "-" + rest]
}

const resistanceSpecial = title => {
  if (title.indexOf("51%") !== 0) {
    return title
  }

  return (
    <span tw="items-baseline">
      51
      <FunkyPercent
        alt="%"
        tw="inline"
        style={{ position: "relative", top: "-0.25em" }}
      />
      {title.split("51%")[1]}
    </span>
  )
}

const longblocksSpecial = title => {
  if (title !== "Longblocks") {
    return title
  }

  return (
    <span tw="items-baseline flex flex-row">
      L
      <Loooong alt="o" tw="inline" />
      ngblocks
    </span>
  )
}
const IndexPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <SEO title="Home" />
      <PageContainer>
        <Cover>{t("home.coverText")}</Cover>
      </PageContainer>

      <HandsParallax />

      <Nonsense />
      <div tw="relative overflow-hidden px-6">
        <PageContainer>
          <div tw="absolute left-0 right-0 mt-30 sm:mt-24 transform -translate-y-1/2 text-white dark:text-dark-bg -z-10">
            <AnimatedLine name="Line1" />
          </div>
          <BigText tw="my-24 sm:mt-48 sm:mb-32">
            {t("home.myriadIs.title")}
          </BigText>

          <div tw="flex flex-col max-w-screen-md mx-auto">
            <div tw="flex flex-row">
              <SymbolBox symbol="trusted" left />

              <div tw="mb-24 sm:mb-40">
                <MediumBoldText
                  dangerouslySetInnerHTML={{
                    __html: t("home.myriadIs.trusted.title"),
                  }}
                />
                <div tw="absolute left-0 right-0 mt--6 sm:mt--10 transform -translate-y-1/2 text-white dark:text-dark-bg -z-10">
                  <AnimatedLine name="Line2" />
                </div>
                <BodyText tw="mb-6">{t("home.myriadIs.trusted.body")}</BodyText>
                <Link
                  uri="/about"
                  tw="inline-flex font-normal leading-tight sm:text-md"
                >
                  {t("common.readMore")}
                </Link>
                <div tw="absolute left-0 right-0 transform -translate-y-1/2 text-white dark:text-dark-bg -z-10 mt-4 sm:mt-8">
                  <AnimatedLine name="Line3" />
                </div>
              </div>
            </div>
            <div tw="flex flex-row">
              <div tw="mb-24 sm:mb-40">
                <MediumBoldText
                  dangerouslySetInnerHTML={{
                    __html: t("home.myriadIs.community.title"),
                  }}
                />
                <BodyText tw="mb-6">
                  {t("home.myriadIs.community.body")}
                </BodyText>
                <Link
                  uri="/community"
                  tw="inline-flex font-normal leading-tight sm:text-md"
                >
                  {t("common.readMore")}
                </Link>
                <div tw="absolute left-0 right-0 mt--12 sm:mt--16 text-white dark:text-dark-bg -z-10">
                  <AnimatedLine name="Line4" />
                </div>
              </div>

              <SymbolBox symbol="community" right />
            </div>
            <div tw="flex flex-row">
              <SymbolBox symbol="fair" left />

              <div tw="mb-24 sm:mb-40">
                <MediumBoldText>{t("home.myriadIs.fair.title")}</MediumBoldText>
                <BodyText tw="mb-6">{t("home.myriadIs.fair.body")}</BodyText>
                <Link
                  uri="mine"
                  tw="inline-flex font-normal leading-tight sm:text-md"
                >
                  {t("common.readMore")}
                </Link>
                <div tw="absolute left-0 right-0 transform -translate-y-1/2 text-white dark:text-dark-bg -z-10 mt--10 sm:mt--12">
                  <AnimatedLine name="Line5" />
                </div>
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
      <div tw="bg-black py-24 sm:py-30 px-6">
        <PageContainer>
          <BigText tw="text-orange mb-24" css={[gradientTextStylePink]}>
            {t("home.security.title")}
          </BigText>
          <div tw="flex flex-col max-w-screen-md mx-auto relative">
            <div tw="mb-24 max-w-none md:max-w-2xl">
              <BigText tw="text-white mb-8">
                {resistanceSpecial(t("home.security.attacks.title"))}
              </BigText>
              <MediumText tw="max-w-none">
                {t("home.security.attacks.body")}
              </MediumText>
            </div>
            <div tw="mb-24 self-end max-w-none md:max-w-2xl">
              <BigText tw="text-white mb-8 text-right">
                {multiColor(t("home.security.multi-algo.title"))}
              </BigText>
              <MediumText tw="max-w-none text-right">
                {t("home.security.multi-algo.body")}
              </MediumText>
            </div>
            <div tw="max-w-none md:max-w-2xl">
              <BigText tw="text-white mb-8">
                {longblocksSpecial(t("home.security.longblocks.title"))}
              </BigText>
              <MediumText tw="max-w-none">
                {t("home.security.longblocks.body")}
              </MediumText>
            </div>
          </div>
        </PageContainer>
      </div>
      <PageContainer tw="py-24 sm:py-30 px-6 ">
        <BigText tw="mb-32">{t("home.links.title")}</BigText>
        <Links />
      </PageContainer>
      <BgImage filename="start-esperanto.png">
        <PageContainer tw="py-48 px-6 text-right text-white">
          <BigText tw="italic">{t("home.esperanto.title")}</BigText>
          <BigText tw="mb-24">{t("home.esperanto.body")}</BigText>
          <span tw="inline-flex hover:text-black">
            <Link
              uri="/community"
              tw="text-xl sm:text-2xl font-bold leading-extra-tight flex flex-row hover:text-black"
            >
              {t("home.esperanto.join")}
              <IconArrowForward tw="ml-4" />
            </Link>
          </span>
        </PageContainer>
      </BgImage>
    </>
  )
}
export default IndexPage
