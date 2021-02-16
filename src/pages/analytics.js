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

import { PageContainer } from "../common/elements"

const AnalyticsPage = () => {
  const { t } = useTranslation()

  return (
    <>
      <SEO title={t("analytics.title")} />
      <PageContainer>
        <Cover showArrow>{t("analytics.title")}</Cover>
      </PageContainer>
      <div tw="bg-light-grey dark:bg-dark-light-bg py-24 sm:py-30 overflow-hidden">
        <PageContainer tw="px-6">
          <SeedNodeMapSection />
        </PageContainer>
      </div>
      <div tw="py-24 sm:py-30 overflow-hidden">
        <PageContainer tw="px-6">
          <div tw="bg-light-grey dark:bg-dark-light-bg shadow-wide px-6 py-6 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-18 rounded">
            <BlocksMinedGraph
              overlayStyle={tw`absolute inset-0 bg-light-grey dark:bg-dark-light-bg`}
            />
          </div>
        </PageContainer>
      </div>
      <div tw="bg-light-grey dark:bg-dark-light-bg py-24 sm:py-30 overflow-hidden">
        <div tw="px-6">
          <BottomTab
            items={algoNames.map((a, i) => ({
              label: a,
              color: algoColors[i],
              content: (
                <div tw="bg-white dark:bg-dark-bg shadow-wide px-6 py-6 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-18 rounded relative">
                  <DifficultyGraph
                    algo={i}
                    scale={algoDiffScale[i]}
                    overlayStyle={tw`absolute inset-0 bg-white dark:bg-dark-bg`}
                  />
                </div>
              ),
            }))}
          />
        </div>
      </div>
      <div tw="py-24 sm:py-30 overflow-hidden">
        <div tw="px-6">
          <BottomTab
            items={algoNames.map((a, i) => ({
              label: a,
              color: algoColors[i],
              content: (
                <div tw="bg-light-grey dark:bg-dark-light-bg shadow-wide px-6 py-6 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-18 rounded">
                  <HashrateGraph
                    algo={i}
                    scale={hashrateScale[i]}
                    overlayStyle={tw`absolute inset-0 bg-light-grey dark:bg-dark-light-bg`}
                  />
                </div>
              ),
            }))}
          />
        </div>
      </div>
      <div tw="bg-light-grey dark:bg-dark-light-bg py-24 sm:py-30 overflow-hidden">
        <PageContainer tw="px-6">
          <div tw="bg-white dark:bg-dark-bg shadow-wide px-6 py-6 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-18 rounded">
            <TransactionsGraph
              overlayStyle={tw`absolute inset-0 bg-white dark:bg-dark-bg`}
            />
          </div>
        </PageContainer>
      </div>
      <div tw="py-24 sm:py-30 overflow-hidden">
        <PageContainer tw="px-6">
          <div tw="bg-light-grey dark:bg-dark-light-bg shadow-wide px-6 py-6 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-18 rounded">
            <MinedCoinsGraph
              overlayStyle={tw`absolute inset-0 bg-light-grey dark:bg-dark-light-bg`}
            />
          </div>
        </PageContainer>
      </div>
      <div tw="bg-light-grey dark:bg-dark-light-bg py-24 sm:py-30 overflow-hidden">
        <PageContainer tw="px-6">
          <div tw="bg-white dark:bg-dark-bg shadow-wide px-6 py-6 sm:px-8 sm:py-10 md:px-12 md:py-14 lg:px-16 lg:py-18 rounded">
            <InflationGraph
              overlayStyle={tw`absolute inset-0 bg-white dark:bg-dark-bg`}
            />
          </div>
        </PageContainer>
      </div>
    </>
  )
}

export default AnalyticsPage
