# react-tradingview-components

> React components for rendering the TradingView Widgets

[![NPM](https://img.shields.io/npm/v/react-tradingview-components.svg)](https://www.npmjs.com/package/react-tradingview-components) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
yarn add react-tradingview-components
```

OR

```bash
npm install --save react-tradingview-components
```

## Usage

```jsx
import React, { Component } from 'react'

import TradingViewStockChartWidget from 'react-tradingview-components'

class Example extends Component {
  render() {
    return <TradingViewStockChartWidget 
              symbol='NSDQ:AAPL'
              theme='Dark' 
              range='1d'
            />
  }
}
```

<img width="988" alt="Screen Shot 2021-04-12 at 3 22 54" src="https://user-images.githubusercontent.com/2074884/114363857-6fbf0780-9b3e-11eb-8e93-a4d550335f00.png">


## License

MIT © [hugoduar](https://github.com/hugoduar)
