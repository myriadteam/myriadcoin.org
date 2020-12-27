import React, { createContext, Component } from "react"
import ExchangeHelper from "../common/exchange-helper"

const defaultState = {
  blocks: 0,
  transactions: 0,
  fullNodes: 0,
  currentPrice: null,
  startPrice: null,
}

const XmyDataContext = createContext(defaultState)

class XmyDataProvider extends Component {
  state = {
    blocks: 12345,
    transactions: 654321,
    fullNodes: 75,
    currentPrice: null,
    startPrice: null,
  }

  exchangeHelper = null

  componentDidMount() {
    this.exchangeHelper = ExchangeHelper("XMY")
    this.fetchStartPrice()
    this.fetchCurrentPrice()
  }

  fetchStartPrice = () => {
    var timeStamp = new Date()
    timeStamp.setHours(0, 0, 0, 0)
    return this.exchangeHelper
      .fetchHistoricPrice("USD", timeStamp.getTime())
      .then(startPrice => {
        this.setState({ startPrice })
      })
  }

  fetchCurrentPrice = () => {
    this.exchangeHelper.fetchCurrentPrice("USD").then(currentPrice => {
      this.setState({ currentPrice })
    })
  }

  render() {
    const { children } = this.props
    const {
      blocks,
      transactions,
      currentPrice,
      startPrice,
      fullNodes,
    } = this.state
    return (
      <XmyDataContext.Provider
        value={{
          blocks,
          transactions,
          currentPrice,
          startPrice,
          fullNodes,
        }}
      >
        {children}
      </XmyDataContext.Provider>
    )
  }
}
export default XmyDataContext
export { XmyDataProvider }
