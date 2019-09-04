import { createAction, createStandardAction, ActionType } from 'typesafe-actions'

export enum types {
  TRIGGER = 'getAPOD/api->TRIGGER',
  START = 'getAPOD/api->START',
  SUCCESS = 'getAPOD/api->SUCCESS',
  FAILURE = 'getAPOD/api->FAILURE',
  RESET = 'getAPOD/api->RESET',
}

export const actions = {
  trigger: createStandardAction(types.TRIGGER)<{ date?: string }>(),
  start: createAction(types.START),
  success: createAction(types.SUCCESS),
  failure: createStandardAction(types.FAILURE)<{ error: object }>(),
  reset: createAction(types.RESET),
}

export type TGetAPODAction = ActionType<typeof actions>
