import React, { useEffect, useState, useCallback } from "react"
import exchangeHelper from "../common/exchange-helper"

const defaultState = {
  blocks: 3192785,
  transactions: 2184920,
  fullNodes: 24,
  circulatingSupply: 1765875500,
  blockCountLast24Hour: 500,
  USD: { opening: 0, current: 0 },
}

const XmyDataContext = React.createContext(defaultState)

function XmyDataProvider({ children }) {
  const [state, setState] = useState(defaultState)

  const updatePrice = useCallback(async currency => {
    const timeStamp = new Date()
    timeStamp.setHours(0, 0, 0, 0)

    const [current, opening] = await Promise.all([
      exchangeHelper("XMY").fetchCurrentPrice("USD"),
      exchangeHelper("XMY").fetchHistoricPrice(currency, timeStamp.getTime()),
    ])

    setState(c => ({ ...c, [currency]: { current, opening } }))
  }, [])

  const updateBlockchain = useCallback(async () => {
    const backend = await fetch(
      "https://xmy-history.coinid.org/gettxoutsetinfo/latest.json"
    ).then(r => r.json())

    setState(c => ({
      ...c,
      blocks: backend.height,
      transactions: backend.transactions,
      circulatingSupply: backend.total_amount,
    }))
  }, [])

  const updateConnectionCount = useCallback(async () => {
    const connectionCount = await fetch(
      "https://xmy-history.coinid.org/getconnectioncount/latest.json"
    ).then(r => r.json())

    setState(c => ({
      ...c,
      fullNodes: connectionCount,
    }))
  }, [])

  const update24HourBlockCount = useCallback(async () => {
    const blocktimes = await fetch(
      "https://xmy-history.coinid.org/latestblocks/10000/time.json"
    ).then(r => r.json())

    const blockCount = blocktimes.filter(
      t => t > Date.now() / 1000 - 24 * 60 * 60
    ).length

    setState(c => ({
      ...c,
      blockCountLast24Hour: blockCount,
    }))
  }, [])

  useEffect(() => {
    const updateData = () => {
      updatePrice("USD")
      updateBlockchain()
      updateConnectionCount()
      update24HourBlockCount()
    }

    updateData()
    setInterval(updateData, 30000)
  }, [
    updatePrice,
    updateBlockchain,
    updateConnectionCount,
    update24HourBlockCount,
  ])

  return (
    <XmyDataContext.Provider value={state}>{children}</XmyDataContext.Provider>
  )
}

export default XmyDataContext
export { XmyDataProvider }
