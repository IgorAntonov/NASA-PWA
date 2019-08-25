import { createReducer } from 'typesafe-actions'

import { StatusAPI } from '../../../types/StatusAPI'
import { types } from './actions'

type State = TStateAPI

const initialState: State = {
  status: StatusAPI.INITIAL,
  error: null,
}

export const reducer = createReducer(initialState, {
  [types.START]: () => ({
    status: StatusAPI.LOADING,
    error: null,
  }),
  [types.SUCCESS]: () => ({
    status: StatusAPI.SUCCESS,
    error: null,
  }),
  [types.FAILURE]: (_, action) => ({
    status: StatusAPI.FAILURE,
    error: action.payload.error,
  }),
  [types.RESET]: () => ({
    status: StatusAPI.INITIAL,
    error: null,
  }),
})
