import { createReducer } from 'typesafe-actions'

import { types } from './actions'

type State = { data: TApiGetAPODResponse[] }

const initialState: State = {
  data: [],
}

export const reducer = createReducer(initialState, {
  [types.UPDATE]: (state, action) => ({ data: [...state.data, action.payload.data] }),
  [types.RESET]: () => ({
    data: [],
  }),
})
