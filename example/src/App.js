import React from 'react'

import { TradingViewMarketWidget, TradingViewStockChartWidget } from 'react-tradingview-components'
import 'react-tradingview-components/dist/index.css'

const App = () => {
  const style = {
    textAlign: 'center'
  };

  return (
  <div style={style}>
    <h1>Advanced Real-Time Chart Widget</h1>
    <p>
      <TradingViewStockChartWidget />
    </p>
    <h1>Stock Market Widget</h1>
    <p>
      <TradingViewMarketWidget width={900}/>
    </p>
  </div>
  )
}

export default App
