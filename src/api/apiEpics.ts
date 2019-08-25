import { combineEpics } from 'redux-observable'

import { epic as getAPODEpic } from './getAPOD/api/epic'

export const apiEpics = combineEpics(getAPODEpic)
