import { useEffect, useState, useCallback } from "react"
import tw from "twin.macro"

export const useGroupInfo = group => {
  const [groupInfo, setGroupInfo] = useState({ startTimestamp: 0 })

  useEffect(() => {
    fetch(
      `https://xmy-history.coinid.org/processeddata/groupInfo/${group}.json`
    )
      .then(r => r.json())
      .then(setGroupInfo)
  }, [group])

  const getTimestamp = useCallback(
    day => {
      return groupInfo.startTimestamp + 24 * 60 * 60 * day
    },
    [groupInfo.startTimestamp]
  )

  return { ...groupInfo, getTimestamp }
}
