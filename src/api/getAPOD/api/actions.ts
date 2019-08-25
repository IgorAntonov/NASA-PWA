import {
  createAction,
  createStandardAction,
  ActionType,
} from 'typesafe-actions'

export enum types {
  TRIGGER = 'getAPOD->TRIGGER',
  START = 'getAPOD->START',
  SUCCESS = 'getAPOD->SUCCESS',
  FAILURE = 'getAPOD->FAILURE',
  RESET = 'getAPOD->RESET',
}

export const actions = {
  trigger: createAction(types.TRIGGER),
  start: createAction(types.START),
  success: createAction(types.SUCCESS),
  failure: createStandardAction(types.FAILURE)<{ error: object }>(),
  reset: createAction(types.RESET),
}

export type TGetAPODAction = ActionType<typeof actions>
