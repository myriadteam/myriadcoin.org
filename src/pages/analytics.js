import React from "react"
import tw from "twin.macro"
import { useTranslation } from "react-i18next"

import SEO from "../components/seo"
import Cover from "../components/shared/cover"

import BlocksMinedGraph from "../components/graphs/blocks-mined-graph"
import TransactionsGraph from "../components/graphs/transactions-graph"
import DifficultyGraph from "../components/graphs/difficulty-graph"
import HashrateGraph from "../components/graphs/hashrate-graph"
import MinedCoinsGraph from "../components/graphs/mined-coins-graph"
import InflationGraph from "../components/graphs/inflation-graph"
import BottomTab from "../components/shared/bottom-tab"

import SeedNodeMapSection from "../components/pages/analytics/seed-node-map-section"

import {
  algoNames,
  algoColors,
  algoDiffScale,
  hashrateScale,
} from "../common/graph"

import { PageContainer, BodyText, MediumBoldText } from "../common/elements"

const AnalyticsPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO title={t("analytics.title")} />
      <PageContainer>
        <Cover showArrow>{t("analytics.title")}</Cover>
      </PageContainer>
      <div tw="bg-light-grey dark:bg-dark-light-bg py-14 sm:py-30 overflow-hidden">
        <PageContainer tw="px-6">
          <SeedNodeMapSection />
        </PageContainer>
      </div>
      <div tw="py-14 sm:py-30 overflow-hidden">
        <PageContainer tw="px-6">
          <MediumBoldText tw="mb-10">
            {t("analytics.blocks_mined.title")}
          </MediumBoldText>
          <BodyText tw="mb-14">
            {t("analytics.blocks_mined.description")}
          </BodyText>

          <div tw="mx--6 sm:mx-0 sm:bg-light-grey sm:dark:bg-dark-light-bg sm:shadow-wide px-6 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-18 rounded">
            <BlocksMinedGraph theme="graph1" />
          </div>
        </PageContainer>
      </div>
      <div tw="bg-light-grey dark:bg-dark-light-bg py-14 sm:py-30 overflow-hidden">
        <PageContainer tw="px-6">
          <MediumBoldText tw="mb-10">
            {t("analytics.mining_difficulty.title")}
          </MediumBoldText>
          <BodyText tw="mb-14">
            {t("analytics.mining_difficulty.description")}
          </BodyText>
          <BottomTab
            theme="graph2"
            items={algoNames.map((a, i) => ({
              label: a,
              color: algoColors[i],
              content: (
                <div tw="mx--6 sm:mx-0 sm:bg-white sm:dark:bg-dark-bg sm:shadow-wide px-6 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-18 rounded relative">
                  <DifficultyGraph
                    algo={i}
                    scale={algoDiffScale[i]}
                    theme="graph2"
                  />
                </div>
              ),
            }))}
          />
        </PageContainer>
      </div>
      <div tw="py-14 sm:py-30 overflow-hidden">
        <PageContainer tw="px-6">
          <MediumBoldText tw="mb-10">
            {t("analytics.hash_rate.title")}
          </MediumBoldText>
          <BodyText tw="mb-14">{t("analytics.hash_rate.description")}</BodyText>

          <BottomTab
            theme="graph1"
            items={algoNames.map((a, i) => ({
              label: a,
              color: algoColors[i],
              content: (
                <div tw="mx--6 sm:mx-0 sm:bg-light-grey sm:dark:bg-dark-light-bg sm:shadow-wide px-6 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-18 rounded">
                  <HashrateGraph
                    algo={i}
                    scale={hashrateScale[i]}
                    theme="graph1"
                  />
                </div>
              ),
            }))}
          />
        </PageContainer>
      </div>
      <div tw="bg-light-grey dark:bg-dark-light-bg py-14 sm:py-30 overflow-hidden">
        <PageContainer tw="px-6">
          <MediumBoldText tw="mb-10">
            {t("analytics.transactions.title")}
          </MediumBoldText>
          <BodyText tw="mb-14">
            {t("analytics.transactions.description")}
          </BodyText>

          <div tw="mx--6 sm:mx-0 sm:bg-white sm:dark:bg-dark-bg sm:shadow-wide px-6 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-18 rounded">
            <TransactionsGraph theme="graph2" />
          </div>
        </PageContainer>
      </div>
      <div tw="py-14 sm:py-30 overflow-hidden">
        <PageContainer tw="px-6">
          <MediumBoldText tw="mb-10">
            {t("analytics.mined_coins.title")}
          </MediumBoldText>
          <BodyText tw="mb-14">
            {t("analytics.mined_coins.description")}
          </BodyText>

          <div tw="mx--6 sm:mx-0 sm:bg-light-grey sm:dark:bg-dark-light-bg sm:shadow-wide px-6 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-18 rounded">
            <MinedCoinsGraph theme="graph1" />
          </div>
        </PageContainer>
      </div>
      <div tw="bg-light-grey dark:bg-dark-light-bg py-14 sm:py-30 overflow-hidden">
        <PageContainer tw="px-6">
          <MediumBoldText tw="mb-10">
            {t("analytics.inflation.title")}
          </MediumBoldText>
          <BodyText tw="mb-14">{t("analytics.inflation.description")}</BodyText>

          <div tw="mx--6 sm:mx-0 sm:bg-white sm:dark:bg-dark-bg sm:shadow-wide px-6 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-18 rounded">
            <InflationGraph theme="graph2" />
          </div>
        </PageContainer>
      </div>
    </>
  )
}

export default AnalyticsPage
