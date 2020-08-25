import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Bubble from "../components/bubble"
import Lines from "../components/lines"
import LinkWithHover from "../components/link-with-hover"
import HomeLinks from "../components/pages/home/links"
import tw, { css } from "twin.macro"
import { withTrans } from "../i18n/withTrans"
import StartParalaxBackground from "../images/start-paralax.png"

const PageContainer = tw.div`container`

const BigText = tw.h2`text-massive font-bold leading-extra-tight`
const MediumText = tw.h3`text-7xl font-medium leading-extra-tight text-grey max-w-xl`
const MediumBoldText = tw.h3`text-7xl font-bold leading-extra-tight mb-10`
const BodyText = tw.p`text-larger font-normal`
const PurpleGrad = tw.div`bg-gradient-b-purple h-screen w-full absolute inset-0`
const OrangeGrad = tw.div`bg-gradient-tr-orange h-screen w-full absolute inset-0`

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
          tw="mt-20 mb-56"
          dangerouslySetInnerHTML={{ __html: t("home.coverText") }}
        />
      </div>
    </PageContainer>
    <div
      tw="h-screen relative py-40"
      style={{
        backgroundImage: `url(${StartParalaxBackground})`,
        backgroundSize: "cover",
        backgroundPosition: "center center",
      }}
    >
      <PageContainer>
        <p
          tw="relative text-2xl font-normal text-white z-10 max-w-sm"
          dangerouslySetInnerHTML={{ __html: t("home.animation") }}
        />
      </PageContainer>
      <OrangeGrad />
      <PurpleGrad />
    </div>
    <PageContainer>
      <div tw="mt-48">
        <BigText tw="mt-20 mb-20">{t("home.nonsense.title")}</BigText>
        <MediumText tw="mb-24">{t("home.nonsense.caption")}</MediumText>
        <div tw="flex flex-row flex-wrap justify-center">
          <Bubble tw="mx-16 mt-8 mb-8">
            {t("home.nonsense.bubbles.asic_farms")}
          </Bubble>
          <Bubble tw="mx-16 mb-16">
            {t("home.nonsense.bubbles.pre_mining")}
          </Bubble>
          <Bubble tw="mx-16 mt-12">
            {t("home.nonsense.bubbles.secure_storing")}
          </Bubble>
          <Bubble tw="mx-16 mt-4 mb-8">{t("home.nonsense.bubbles.ico")}</Bubble>
          <Bubble tw="mx-16 mt-16">
            {t("home.nonsense.bubbles.no_development")}
          </Bubble>
          <Bubble tw="mx-4 mt-24">
            {t("home.nonsense.bubbles.pump_and_dump")}
          </Bubble>
          <Bubble tw="mx-4 mt-16 mb-8">
            {t("home.nonsense.bubbles.non_vibrant_communities")}
          </Bubble>
          <Bubble tw="mx-16 mt-16 max-w-3xl">
            {t("home.nonsense.bubbles.instant_transactions")}
          </Bubble>
        </div>
      </div>
    </PageContainer>
    <div tw="relative overflow-hidden">
      <Lines />
      <PageContainer>
        <BigText tw="mt-48 mb-32">{t("home.myriadIs.title")}</BigText>
        <div tw="flex flex-col max-w-screen-md mx-auto relative">
          <div tw="mb-40">
            <MediumBoldText
              dangerouslySetInnerHTML={{
                __html: t("home.myriadIs.trusted.title"),
              }}
            />
            <BodyText tw="mb-6">{t("home.myriadIs.trusted.body")}</BodyText>
            <LinkWithHover to="/about">{t("common.readMore")}</LinkWithHover>
          </div>
          <div tw="mb-40">
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
          <div tw="mb-40">
            <MediumBoldText>{t("home.myriadIs.fair.title")}</MediumBoldText>
            <BodyText tw="mb-6">{t("home.myriadIs.fair.body")}</BodyText>
            <LinkWithHover to="/mine">{t("common.readMore")}</LinkWithHover>
          </div>
        </div>
      </PageContainer>
    </div>
    <div tw="bg-black py-48">
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
    <PageContainer tw="py-48">
      <BigText tw="mb-32">{t("home.links.title")}</BigText>
      <HomeLinks />
    </PageContainer>
  </Layout>
)

export default withTrans(IndexPage)
