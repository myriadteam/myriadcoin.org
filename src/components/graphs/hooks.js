import { useEffect, useState, useCallback } from "react"
import tw from "twin.macro"

export const useGroupInfo = (group, groupName) => {
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
