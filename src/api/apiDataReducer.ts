import { combineReducers } from 'redux'

import { reducer as apiGetAPODDataReducer } from './getAPOD/apiData/reducer'

export const apiDataReducer = combineReducers({
  getAPOD: apiGetAPODDataReducer,
})
