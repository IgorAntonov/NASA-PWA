import React from 'react'
import { Provider } from 'react-redux'
import styled from 'styled-components'
import { createBrowserHistory } from 'history'
import { ConnectedRouter } from 'connected-react-router'

import { HomeContainer } from '@features/home'
import { Header } from '@features/commonHeader'
import { configureStore } from './store'

type Props = {}

const history = createBrowserHistory()
const store = configureStore(history)

export const App: React.FC<Props> = (): JSX.Element => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <Header />

      <HomeContainer />
    </ConnectedRouter>
  </Provider>
)
