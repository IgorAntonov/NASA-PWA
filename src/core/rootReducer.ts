/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'

import { apiReducer, apiDataReducer } from '../api'

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    api: apiReducer,
    apiData: apiDataReducer,
  })
