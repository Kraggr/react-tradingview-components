import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { RangeTypes, Themes } from './types'

const SCRIPT_ID = 'tradingview-market-widget-script'
const CONTAINER_ID = 'tradingview-market-widget'

export class TradingViewMarketWidget extends PureComponent {
  static propTypes = {
    colorTheme: PropTypes.oneOf([Themes.LIGHT, Themes.DARK]),
    dateRange: PropTypes.oneOf([
      '1d',
      '5d',
      '1m',
      '3m',
      '6m',
      RangeTypes.YTD,
      '12m',
      '60m',
      RangeTypes.ALL
    ]),
    exchange: PropTypes.string,
    showChart: PropTypes.bool,
    locale: PropTypes.string,
    largeChartUrl: PropTypes.string,
    isTransparent: PropTypes.bool,
    showSymbolLogo: PropTypes.bool,
    width: PropTypes.string,
    height: PropTypes.string,
    plotLineColorGrowing: PropTypes.string,
    plotLineColorFalling: PropTypes.string,
    gridLineColor: PropTypes.string,
    scaleFontColor: PropTypes.string,
    belowLineFillColorGrowing: PropTypes.string,
    belowLineFillColorFalling: PropTypes.string,
    symbolActiveColor: PropTypes.string
  }

  static defaultProps = {
    colorTheme: 'Light',
    dateRange: '12m',
    exchange: 'US',
    showChart: true,
    locale: 'en',
    largeChartUrl: 'http://localhost/symbol/',
    isTransparent: false,
    showSymbolLogo: false,
    width: '980',
    height: '600',
    plotLineColorGrowing: 'rgba(25, 118, 210, 1)',
    plotLineColorFalling: 'rgba(25, 118, 210, 1)',
    gridLineColor: 'rgba(42, 46, 57, 1)',
    scaleFontColor: 'rgba(120, 123, 134, 1)',
    belowLineFillColorGrowing: 'rgba(33, 150, 243, 0.12)',
    belowLineFillColorFalling: 'rgba(33, 150, 243, 0.12)',
    symbolActiveColor: 'rgba(33, 150, 243, 0.12)'
  }

  containerId = `${CONTAINER_ID}-${Math.random()}`

  componentDidMount = () => setTimeout(this.appendScript, 100)

  appendScript = (onload) => {
    const script = document.createElement('script')

    script.id = SCRIPT_ID
    script.type = 'text/javascript'
    script.async = true
    script.src =
      'https://s3.tradingview.com/external-embedding/embed-widget-hotlists.js'
    script.onload = onload
    script.innerHTML = JSON.stringify({
      ...TradingViewMarketWidget.defaultProps,
      ...this.props
    })

    document.getElementById(this.containerId).appendChild(script)
  }

  getStyle = () => {
    if (!this.props.autosize) return {}
    return {
      width: '100%',
      height: '100%'
    }
  }

  render = () => <article id={this.containerId} style={this.getStyle()} />
}
