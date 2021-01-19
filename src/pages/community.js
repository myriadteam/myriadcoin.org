import React from "react"
import tw from "twin.macro"
import SEO from "../components/seo"
import SvgIcon from "../components/svg-icon"
import IconArrowBlack from "../svgs/icons/arrow-forward.inline.svg"
import SymbolBox from "../components/symbol-box"

import {
  PageContainer,
  BigText,
  MediumBoldText,
  BodyText,
} from "../common/elements"
import { useTranslation } from "react-i18next"

const communities = [
  {
    text: "Facebook",
    url: "https://www.facebook.com/themyriadplatform",
  },
  {
    text: "Reddit",
    url: "https://www.reddit.com/r/myriadcoin/",
  },
  {
    text: "Discord",
    url: "https://t.me/https://www.instagram.com/myriadcoin",
  },
  {
    text: "Telegram",
    url: "https://t.me/Myriadcoinofficial",
  },
  {
    text: "Twitter",
    url: "https://twitter.com/myriadcoin",
  },
  { text: "Slack", url: "https://slack.myralicious.com/" },
]

const CommunityLink = ({ text, url }) => {
  return (
    <a
      href={url}
      title={text}
      target="_blank"
      rel="noopener noreferrer"
      tw="hover:text-purple transition ease-in duration-150 mr-10"
    >
      <SvgIcon name={text} size="lg" />
    </a>
  )
}

const CommunityPage = () => {
  const { t } = useTranslation()
  return (
    <>
      <SEO title={t("community.title")} />
      <PageContainer>
        <div tw="mt-16 mb-24 sm:mt-20 sm:mb-56 px-6">
          <BigText tw="mb-8">{t("community.title")}</BigText>
          <IconArrowBlack alt=">" tw="transform rotate-90" />
        </div>
      </PageContainer>
      <div tw="bg-light-grey dark:bg-dark-light-bg py-24 px-6 sm:py-30 ">
        <PageContainer>
          <div tw="flex flex-row">
            <SymbolBox symbol="control" left alternate />
            <div>
              <MediumBoldText>{t("community.top.title")}</MediumBoldText>
              <BodyText>{t("community.top.body")}</BodyText>
            </div>
          </div>
        </PageContainer>
      </div>
      <PageContainer tw="py-24 px-6 sm:py-30 ">
        <div tw="max-w-2xl">
          <MediumBoldText tw="mb-12">
            {t("community.social_media.title")}
          </MediumBoldText>
          <div tw="flex mb-12">
            {communities.map(({ text, url }) => (
              <CommunityLink
                text={text}
                url={url}
                key={`community-link-${text}`}
              />
            ))}
          </div>
          <BodyText>{t("community.social_media.body")}</BodyText>
        </div>
      </PageContainer>
      <hr tw="border-black border-opacity-25 dark:border-opacity-75" />
    </>
  )
}

export default CommunityPage
