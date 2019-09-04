import { from, of } from 'rxjs'
import { filter, switchMap, catchError, startWith, concatMap } from 'rxjs/operators'
import { isOfType } from 'typesafe-actions'
import axios from 'axios'
import { format, addDays } from 'date-fns'

import { types, actions } from './actions'
import { actions as apiDataActions } from '../apiData/actions'
import { getLastDay } from '../apiData/selectors'

export const epic: TEpic = (action$, store) =>
  action$.pipe(
    filter(isOfType(types.TRIGGER)),
    switchMap(action => {
      const lastDay = getLastDay(store.value)
      const date =
        action.payload.date || lastDay
          ? format(addDays(new Date(lastDay), -1), 'yyyy-MM-dd')
          : format(new Date(), 'yyyy-MM-dd')

      return from(
        axios.get(
          `https://api.nasa.gov/planetary/apod?api_key=2eHEb49CKyMovTmrIckr3ufpaT0bVDU63PiJShD7&date=${date}`,
        ),
      ).pipe(
        concatMap(res => of(actions.success(), apiDataActions.update({ data: res.data }))),
        startWith(actions.start()),
        catchError(error => of(actions.failure({ error }))),
      )
    }),
  )
