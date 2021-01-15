import React from "react"
import { Link } from "gatsby"
import { useTranslation } from "react-i18next"

import SEO from "../components/seo"
import BgImage from "../components/bg-image"
import HandsParallax from "../components/hands-parallax"
import Nonsense from "../components/pages/home/nonsense"
import LinkWithHover from "../components/link-with-hover"
import Links from "../components/shared/links"
import tw, { css } from "twin.macro"
import IconArrowWhite from "../svgs/icons/arrow-forward.inline.svg"
import AnimatedLine from "../components/animated-line"
import { gradientTextStylePink } from "../common/gradients"

import {
  PageContainer,
  BigText,
  MediumText,
  MediumBoldText,
  BodyText,
} from "../common/elements"

const IndexPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <SEO title="Home" />
      <PageContainer>
        <div>
          <BigText
            tw="mt-16 mb-24 sm:mt-20 sm:mb-56 px-6 sm:px-0"
            dangerouslySetInnerHTML={{ __html: t("home.coverText") }}
          />
        </div>
      </PageContainer>

      <HandsParallax />

      <Nonsense />
      <div tw="relative overflow-hidden px-6 sm:px-0">
        <PageContainer>
          <BigText tw="my-24 sm:mt-48 sm:mb-32">
            {t("home.myriadIs.title")}
          </BigText>
          <div tw="flex flex-col max-w-screen-md mx-auto">
            <div tw="mb-24 sm:mb-40">
              <MediumBoldText
                dangerouslySetInnerHTML={{
                  __html: t("home.myriadIs.trusted.title"),
                }}
              />
              <div tw="absolute left-0 right-0 mt--5 transform -translate-y-1/2 text-white dark:text-dark-bg -z-10">
                <AnimatedLine name="Line1" />
              </div>
              <BodyText tw="mb-6">{t("home.myriadIs.trusted.body")}</BodyText>
              <LinkWithHover to="/about">{t("common.readMore")}</LinkWithHover>
            </div>
            <div tw="mb-24 sm:mb-40">
              <div tw="absolute left-0 right-0 mt--12 sm:mt--20 transform -translate-y-1/2 text-white dark:text-dark-bg -z-10">
                <AnimatedLine name="Line2" />
              </div>
              <MediumBoldText
                dangerouslySetInnerHTML={{
                  __html: t("home.myriadIs.community.title"),
                }}
              />
              <BodyText tw="mb-6">{t("home.myriadIs.community.body")}</BodyText>
              <LinkWithHover to="/community" tw="relative">
                {t("common.readMore")}
              </LinkWithHover>
              <div tw="absolute left-0 right-0 transform -translate-y-1/2 text-white dark:text-dark-bg -z-10">
                <AnimatedLine name="Line3" />
              </div>
            </div>
            <div tw="mb-24 sm:mb-40">
              <MediumBoldText>{t("home.myriadIs.fair.title")}</MediumBoldText>
              <div tw="absolute left-0 right-0 mt--8 text-white dark:text-dark-bg -z-10">
                <AnimatedLine name="Line4" />
              </div>
              <BodyText tw="mb-6">{t("home.myriadIs.fair.body")}</BodyText>
              <LinkWithHover to="/mine">{t("common.readMore")}</LinkWithHover>
              <div tw="absolute left-0 right-0 transform -translate-y-1/2 text-white dark:text-dark-bg -z-10">
                <AnimatedLine name="Line5" />
              </div>
            </div>
          </div>
        </PageContainer>
      </div>
      <div tw="bg-black py-24 sm:py-30 px-6 sm:px-0">
        <PageContainer>
          <BigText tw="text-orange mb-24" css={[gradientTextStylePink]}>
            {t("home.security.title")}
          </BigText>
          <div tw="flex flex-col max-w-screen-md mx-auto relative">
            <div tw="mb-24 max-w-none md:max-w-2xl">
              <BigText tw="text-white mb-8">
                {t("home.security.attacks.title")}
              </BigText>
              <MediumText tw="max-w-none">
                {t("home.security.attacks.body")}
              </MediumText>
            </div>
            <div tw="mb-24 self-end max-w-none md:max-w-2xl">
              <BigText tw="text-white mb-8 text-right">
                {t("home.security.multi-algo.title")}
              </BigText>
              <MediumText tw="max-w-none text-right">
                {t("home.security.multi-algo.body")}
              </MediumText>
            </div>
            <div tw="max-w-none md:max-w-2xl">
              <BigText tw="text-white mb-8">
                {t("home.security.longblocks.title")}
              </BigText>
              <MediumText tw="max-w-none">
                {t("home.security.longblocks.body")}
              </MediumText>
            </div>
          </div>
        </PageContainer>
      </div>
      <PageContainer tw="py-24 sm:py-30 px-6 sm:px-0">
        <BigText tw="mb-32">{t("home.links.title")}</BigText>
        <Links />
      </PageContainer>
      <BgImage filename="start-esperanto.png">
        <PageContainer tw="py-48 px-6 sm:px-0 text-right text-white">
          <BigText tw="italic">{t("home.esperanto.title")}</BigText>
          <BigText tw="mb-24">{t("home.esperanto.body")}</BigText>
          <span tw="inline-flex hover:text-black">
            <Link
              to="/community"
              tw="underline text-xl sm:text-2xl font-bold leading-extra-tight flex flex-row"
            >
              {t("home.esperanto.join")}
              <IconArrowWhite tw="ml-4" />
            </Link>
          </span>
        </PageContainer>
      </BgImage>
    </>
  )
}
export default IndexPage
