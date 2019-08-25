import { combineEpics } from 'redux-observable'

import { apiEpics } from '../api'

export const rootEpic = combineEpics(apiEpics)
