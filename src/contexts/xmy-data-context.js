import React, { useEffect, useState, useCallback } from "react"
import exchangeHelper from "../common/exchange-helper"

const defaultState = {
  blocks: 3191373,
  transactions: 3191373 * 3.5,
  fullNodes: 75,
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
    const { backend } = await fetch(
      "https://xmy-blockbook1.coinid.org/api"
    ).then(r => r.json())

    setState(c => ({
      ...c,
      blocks: backend.blocks,
      transactions: backend.blocks * 3.5,
    }))
  }, [])

  useEffect(() => {
    const updateData = () => {
      updatePrice("USD")
      updateBlockchain()
    }

    updateData()
    setInterval(updateData, 30000)
  }, [updateBlockchain, updatePrice])

  return (
    <XmyDataContext.Provider value={state}>{children}</XmyDataContext.Provider>
  )
}

export default XmyDataContext
export { XmyDataProvider }
