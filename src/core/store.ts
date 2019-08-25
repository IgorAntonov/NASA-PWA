import { createStore, applyMiddleware, compose, Store } from 'redux'
import { createEpicMiddleware } from 'redux-observable'
import { routerMiddleware } from 'connected-react-router'
import { History } from 'history'

import { createRootReducer } from './rootReducer'
import { rootEpic } from './rootEpic'
import { RootState } from '../types/RootState'

export const configureStore = (history: History): Store<RootState> => {
  const composeEnchancers =
    (process.env.NODE_ENV === 'development' &&
      // @ts-ignore
      window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || // eslint-disable-line
    compose

  const epicMiddleware = createEpicMiddleware()

  const middlewares = [routerMiddleware(history), epicMiddleware]

  const store = createStore(
    createRootReducer(history),
    composeEnchancers(applyMiddleware(...middlewares)),
  )

  epicMiddleware.run(rootEpic)

  return store
}
