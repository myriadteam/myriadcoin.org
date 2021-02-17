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

import {
  PageContainer,
  BodyText,
  MediumBoldText,
  GraphContainer,
} from "../common/elements"

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

          <GraphContainer theme="graph1">
            <BlocksMinedGraph theme="graph1" />
          </GraphContainer>
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
                <GraphContainer theme="graph2">
                  <DifficultyGraph
                    algo={i}
                    scale={algoDiffScale[i]}
                    theme="graph2"
                  />
                </GraphContainer>
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
                <GraphContainer theme="graph1">
                  <HashrateGraph
                    algo={i}
                    scale={hashrateScale[i]}
                    theme="graph1"
                  />
                </GraphContainer>
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

          <GraphContainer theme="graph2">
            <TransactionsGraph theme="graph2" />
          </GraphContainer>
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

          <GraphContainer theme="graph1">
            <MinedCoinsGraph theme="graph1" />
          </GraphContainer>
        </PageContainer>
      </div>
      <div tw="bg-light-grey dark:bg-dark-light-bg py-14 sm:py-30 overflow-hidden">
        <PageContainer tw="px-6">
          <MediumBoldText tw="mb-10">
            {t("analytics.inflation.title")}
          </MediumBoldText>
          <BodyText tw="mb-14">{t("analytics.inflation.description")}</BodyText>

          <GraphContainer theme="graph2">
            <InflationGraph theme="graph2" />
          </GraphContainer>
        </PageContainer>
      </div>
    </>
  )
}

export default AnalyticsPage
