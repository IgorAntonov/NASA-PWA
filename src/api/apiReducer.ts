import { combineReducers } from 'redux'

import { reducer as apiGetAPODReducer } from './getAPOD/api/reducer'

export const apiReducer = combineReducers({
  getAPOD: apiGetAPODReducer,
})
