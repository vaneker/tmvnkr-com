import React, { Fragment } from 'react'
import NextApp, { AppProps } from 'next/app'
import { Global } from '@emotion/core'

import { globalStyle } from '@style'

export default class MyApp extends NextApp<AppProps> {
  render() {
    const { Component, pageProps } = this.props

    return (
      <Fragment>
        <Global styles={globalStyle} />
        <Component {...pageProps} />
      </Fragment>
    )
  }
}
