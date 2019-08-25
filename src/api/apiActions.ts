import {
  types as getAPODTypes,
  actions as getAPODActions,
  TGetAPODAction,
} from './getAPOD/api/actions'

export const apiTypes = {
  getAPOD: getAPODTypes,
}

export const apiActions = {
  getAPOD: getAPODActions,
}

export type ApiAction = TGetAPODAction
