import { filter, mapTo } from 'rxjs/operators'
import { isOfType } from 'typesafe-actions'

import { types, actions } from './actions'

export const epic: TEpic = action$ =>
  action$.pipe(
    filter(isOfType(types.TRIGGER)),
    mapTo(actions.success()),
  )
