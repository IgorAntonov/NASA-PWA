/* eslint-disable @typescript-eslint/explicit-function-return-type */

import { combineReducers } from 'redux'
import { History } from 'history'
import { connectRouter } from 'connected-react-router'

import { templateReducer } from '@features/template'
import { apiReducer } from '../api'

export const createRootReducer = (history: History) =>
  combineReducers({
    router: connectRouter(history),
    template: templateReducer,
    api: apiReducer,
  })
