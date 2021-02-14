import { useEffect, useState, useCallback } from "react"
import tw from "twin.macro"
import { useTranslation } from "react-i18next"
import millify from "millify"
import { GROUP_NAMES } from "../../common/graph"

export const useGroupInfo = group => {
  const groupName = GROUP_NAMES[group]
  const [groupInfo, setGroupInfo] = useState({ startTimestamp: 0 })

  useEffect(() => {
    fetch(
      `https://xmy-history.coinid.org/processeddata/groupInfo/${groupName}.json`
    )
      .then(r => r.json())
      .then(setGroupInfo)
  }, [groupName])

  const getTimestamp = useCallback(
    i => {
      return groupInfo.startTimestamp + Math.round(i) * group
    },
    [group, groupInfo.startTimestamp]
  )

  return { ...groupInfo, getTimestamp }
}

export const useRenderValues = ({
  data,
  group,
  yAxisOptions = { shorten: { precision: 0 } },
  yValueOptions = {},
  keyValueOptions = {},
  scale = 1,
}) => {
  const { getTimestamp } = useGroupInfo(group)

  const { t } = useTranslation()

  const getDatapoint = useCallback(x => data[Math.round(x)] || {}, [data])

  const renderXAxis = useCallback(
    x => t("dayMonth", { date: new Date(getTimestamp(x) * 1000) }),
    [getTimestamp, t]
  )

  const renderXValue = useCallback(
    x =>
      t("dayMonthYear", {
        date: new Date((getTimestamp(x) + 12 * 60 * 60) * 1000),
      }),
    [getTimestamp, t]
  )

  const formatValue = useCallback(
    (value, options) => {
      const getValue = () => {
        if (options.shorten) {
          return millify(value * scale, options.shorten)
        }

        return t("formattedNumber", { number: value * scale })
      }

      if (options.suffix) {
        return getValue() + options.suffix
      }

      return getValue()
    },
    [scale, t]
  )

  const renderYAxis = useCallback(y => formatValue(y, yAxisOptions), [
    formatValue,
    yAxisOptions,
  ])

  const renderYValue = useCallback(
    x => {
      const d = getDatapoint(x)
      const y = d.y || 0
      return formatValue(y, yValueOptions)
    },
    [formatValue, getDatapoint, yValueOptions]
  )

  const renderKeyValue = useCallback(
    key => x => {
      const d = getDatapoint(x)
      const v = d[key] || 0
      return formatValue(v, keyValueOptions)
    },
    [formatValue, getDatapoint, keyValueOptions]
  )

  return {
    renderXAxis,
    renderXValue,
    renderYAxis,
    renderYValue,
    renderKeyValue,
  }
}
