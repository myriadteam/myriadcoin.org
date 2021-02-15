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

import { algoNames, algoColors } from "../common/graph"

import { PageContainer } from "../common/elements"

const AnalyticsPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO title={t("analytics.title")} />
      <PageContainer>
        <Cover showArrow>{t("analytics.title")}</Cover>
      </PageContainer>
      <div tw="bg-light-grey dark:bg-dark-light-bg py-24 px-6 sm:py-30 overflow-hidden">
        <PageContainer>
          <div tw="bg-white dark:bg-dark-bg shadow-wide px-6 py-6 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-18 rounded">
            <BlocksMinedGraph />
          </div>
        </PageContainer>
      </div>
      <div tw="py-24 px-6 sm:py-30 overflow-hidden">
        <BottomTab
          items={algoNames.map((a, i) => ({
            label: a,
            color: algoColors[i],
            content: (
              <div tw="bg-light-grey dark:bg-dark-light-bg shadow-wide px-6 py-6 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-18 rounded relative">
                <DifficultyGraph algo={i} />
              </div>
            ),
          }))}
        />
      </div>
      <div tw="bg-light-grey dark:bg-dark-light-bg py-24 px-6 sm:py-30 overflow-hidden">
        <BottomTab
          items={algoNames.map((a, i) => ({
            label: a,
            color: algoColors[i],
            content: (
              <div tw="bg-white dark:bg-dark-bg shadow-wide px-6 py-6 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-18 rounded">
                <HashrateGraph algo={i} />
              </div>
            ),
          }))}
        />
      </div>
      <div tw="py-24 px-6 sm:py-30 overflow-hidden">
        <PageContainer>
          <div tw="bg-light-grey dark:bg-dark-light-bg shadow-wide px-6 py-6 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-18 rounded">
            <TransactionsGraph />
          </div>
        </PageContainer>
      </div>
      <div tw="bg-light-grey dark:bg-dark-light-bg py-24 px-6 sm:py-30 overflow-hidden">
        <PageContainer>
          <div tw="bg-white dark:bg-dark-bg shadow-wide px-6 py-6 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-18 rounded">
            <MinedCoinsGraph />
          </div>
        </PageContainer>
      </div>
      <div tw="py-24 px-6 sm:py-30 overflow-hidden">
        <PageContainer>
          <div tw="bg-light-grey dark:bg-dark-light-bg shadow-wide px-6 py-6 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-18 rounded">
            <InflationGraph />
          </div>
        </PageContainer>
      </div>
    </>
  )
}

export default AnalyticsPage
