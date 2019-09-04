import { createStandardAction, createAction, ActionType } from 'typesafe-actions'

export enum types {
  UPDATE = 'getAPOD/data->UPDATE',
  RESET = 'getAPOD/data->RESET',
}

export const actions = {
  update: createStandardAction(types.UPDATE)<{ data: TApiGetAPODResponse }>(),
  reset: createAction(types.RESET),
}

export type TGetAPODDataAction = ActionType<typeof actions>
