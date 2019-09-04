import { RootState } from 'RootState'

export const getData = (state: RootState) => state.apiData.getAPOD.data

export const getLastDay = (state: RootState) =>
  state.apiData.getAPOD.data.length > 0
    ? state.apiData.getAPOD.data[state.apiData.getAPOD.data.length - 1].date
    : ''
