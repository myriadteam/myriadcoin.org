import { useEffect, useState, useCallback } from "react"
import tw from "twin.macro"
import { useTranslation } from "react-i18next"
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
  yAxisOptions = { shorten: { precision: 1 } },
  yValueOptions = {},
  keyValueOptions = {},
  scale = 1,
  valueMultiplier = 1,
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
        date: new Date((getTimestamp(x) + group / 2) * 1000),
      }),
    [getTimestamp, group, t]
  )

  const getRealValue = useCallback(
    value => {
      return value * scale * valueMultiplier
    },
    [scale, valueMultiplier]
  )

  const shorten = useCallback((v, c) => {
    const denomitors = ["Z", "E", "P", "T", "G", "M", "K"]
    const step = 3
    const start = denomitors.length * 3

    for (var i = 0; i < denomitors.length; i += 1) {
      const exp = start - i * step
      if (v > Math.pow(10, exp - 1)) {
        return (
          (v / Math.pow(10, exp)).toFixed(c.precision) +
          (c.space ? " " : "") +
          denomitors[i]
        )
      }
    }

    return v.toFixed(c.precision) + (c.space ? " " : "")
  }, [])

  const formatValue = useCallback(
    (value, options) => {
      const getValue = () => {
        if (options.shorten) {
          return shorten(getRealValue(value), options.shorten)
        }

        return t("formattedNumber", { number: getRealValue(value) })
      }

      if (options.suffix) {
        return getValue() + options.suffix
      }

      return getValue()
    },
    [getRealValue, shorten, t]
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
    getDatapoint,
    renderXAxis,
    renderXValue,
    renderYAxis,
    renderYValue,
    renderKeyValue,
    formatValue,
  }
}
