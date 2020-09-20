import React from "react"
import { Link } from "gatsby"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bubble from "../components/bubble"
import Lines from "../components/lines"
import LinkWithHover from "../components/link-with-hover"
import HomeLinks from "../components/pages/home/links"
import tw, { css } from "twin.macro"
import { withTrans } from "../i18n/withTrans"
import StartParalaxBackground from "../images/start-paralax.png"
import StartEsperantoBackground from "../images/start-esperanto.png"
import iconArrowWhite from "../images/icons/arrow-forward-white.svg"
import iconArrowBlack from "../images/icons/arrow-forward.svg"

const PageContainer = tw.div`container`

const BigText = tw.h2`text-mobile-big sm:text-massive font-bold leading-extra-tight`
const MediumText = tw.h3`text-4xl sm:text-7xl font-medium leading-extra-tight text-grey max-w-xl`
const MediumBoldText = tw.h3`text-4xl sm:text-7xl font-bold leading-extra-tight mb-10`
const BodyText = tw.p`text-2xl sm:text-larger font-normal`
const PurpleGrad = tw.div`bg-gradient-b-purple absolute inset-0`
const OrangeGrad = tw.div`bg-gradient-tr-orange absolute inset-0`

const gradientTextStyle = css`
  background: -webkit-linear-gradient(60deg, #ffd17f, #ff5aa9);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
`

const IndexPage = ({ t, i18n }) => (
  <Layout>
    <SEO title="Home" />
    <PageContainer>
      <div>
        <BigText
          tw="mt-16 mb-24 sm:mt-20 sm:mb-56 px-6 sm:px-0"
          dangerouslySetInnerHTML={{ __html: t("home.coverText") }}
        />
      </div>
    </PageContainer>
    <div
      tw="sm:h-screen relative py-40"
      style={{
        backgroundImage: `url(${StartParalaxBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <PageContainer>
        <p
          tw="relative text-2xl font-normal text-white z-10 max-w-sm px-6 sm:px-0"
          dangerouslySetInnerHTML={{ __html: t("home.animation") }}
        />
      </PageContainer>
      <OrangeGrad />
      <PurpleGrad />
    </div>
    <PageContainer>
      <div tw="mt-24 sm:mt-48 px-2 sm:px-0">
        <BigText tw="mt-20 mb-20">{t("home.nonsense.title")}</BigText>
        <MediumText tw="mb-24">{t("home.nonsense.caption")}</MediumText>
        <div tw="flex flex-row flex-wrap justify-center">
          <Bubble tw="mt-8 mx-2 sm:mx-16 sm:mt-8 sm:mb-8">
            {t("home.nonsense.bubbles.asic_farms")}
          </Bubble>
          <Bubble tw="mt-8 mx-2 sm:mx-16 sm:mb-16">
            {t("home.nonsense.bubbles.pre_mining")}
          </Bubble>
          <Bubble tw="mt-8 mx-2 sm:mx-16 sm:mt-12">
            {t("home.nonsense.bubbles.secure_storing")}
          </Bubble>
          <Bubble tw="mt-8 mx-2 sm:mx-16 sm:mt-4 sm:mb-8">
            {t("home.nonsense.bubbles.ico")}
          </Bubble>
          <Bubble tw="mt-8 mx-2 sm:mx-16 sm:mt-16">
            {t("home.nonsense.bubbles.no_development")}
          </Bubble>
          <Bubble tw="mt-8 mx-2 sm:mx-4 sm:mt-24">
            {t("home.nonsense.bubbles.pump_and_dump")}
          </Bubble>
          <Bubble tw="mt-8 mx-2 sm:mx-4 sm:mt-16 sm:mb-8">
            {t("home.nonsense.bubbles.non_vibrant_communities")}
          </Bubble>
          <Bubble tw="mt-8 mx-2 sm:mx-16 sm:mt-16 sm:max-w-3xl">
            {t("home.nonsense.bubbles.instant_transactions")}
          </Bubble>
        </div>
      </div>
    </PageContainer>
    <div tw="relative overflow-hidden px-6 sm:px-0">
      <Lines />
      <PageContainer>
        <BigText tw="my-24 sm:mt-48 sm:mb-32">
          {t("home.myriadIs.title")}
        </BigText>
        <div tw="flex flex-col max-w-screen-md mx-auto relative">
          <div tw="mb-24 sm:mb-40">
            <MediumBoldText
              dangerouslySetInnerHTML={{
                __html: t("home.myriadIs.trusted.title"),
              }}
            />
            <BodyText tw="mb-6">{t("home.myriadIs.trusted.body")}</BodyText>
            <LinkWithHover to="/about">{t("common.readMore")}</LinkWithHover>
          </div>
          <div tw="mb-24 sm:mb-40">
            <MediumBoldText
              dangerouslySetInnerHTML={{
                __html: t("home.myriadIs.community.title"),
              }}
            />
            <BodyText tw="mb-6">{t("home.myriadIs.community.body")}</BodyText>
            <LinkWithHover to="/community">
              {t("common.readMore")}
            </LinkWithHover>
          </div>
          <div tw="mb-24 sm:mb-40">
            <MediumBoldText>{t("home.myriadIs.fair.title")}</MediumBoldText>
            <BodyText tw="mb-6">{t("home.myriadIs.fair.body")}</BodyText>
            <LinkWithHover to="/mine">{t("common.readMore")}</LinkWithHover>
          </div>
        </div>
      </PageContainer>
    </div>
    <div tw="bg-black py-24 sm:py-48 px-6 sm:px-0">
      <PageContainer>
        <BigText tw="text-orange mb-24" css={[gradientTextStyle]}>
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
    <PageContainer tw="py-24 sm:py-48 px-6 sm:px-0">
      <BigText tw="mb-32">{t("home.links.title")}</BigText>
      <HomeLinks />
    </PageContainer>
    <div
      tw="py-24 sm:py-48 px-6 sm:px-0"
      style={{
        backgroundImage: `url(${StartEsperantoBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <PageContainer tw="py-48 text-right text-white">
        <BigText tw="italic">{t("home.esperanto.title")}</BigText>
        <BigText tw="mb-24">{t("home.esperanto.body")}</BigText>
        <span tw="inline-flex">
          <Link
            to="/community"
            tw="underline text-4xl sm:text-7xl font-bold leading-extra-tight hover:text-black"
          >
            {t("home.esperanto.join")}
          </Link>
          <img src={iconArrowWhite} alt=">" tw="ml-4 text-white" />
        </span>
      </PageContainer>
    </div>
    <PageContainer tw="py-24 sm:py-48 px-6 sm:px-0">
      <div tw="max-w-3xl">
        <Bubble tw="mb-8 sm:mb-16" color="blue">
          {t("home.telegram.bubble")}
        </Bubble>
        <BigText tw="mb-8 sm:mb-16">{t("home.telegram.title")}</BigText>
        <span tw="inline-flex">
          <a
            href="https://t.me/Myriadcoinofficial"
            tw="underline text-4xl sm:text-7xl font-bold leading-extra-tight hover:text-black"
          >
            {t("home.telegram.join")}
          </a>
          <img src={iconArrowBlack} alt=">" tw="ml-4" />
        </span>
      </div>
    </PageContainer>
  </Layout>
)

export default withTrans(IndexPage)
