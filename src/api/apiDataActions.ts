import { types as getAPODTypes, actions as getAPODActions, TGetAPODDataAction } from './getAPOD/apiData/actions'

export const apiDataTypes = {
  getAPOD: getAPODTypes,
}

export const apiDataActions = {
  getAPOD: getAPODActions,
}

export type ApiDataAction = TGetAPODDataAction
