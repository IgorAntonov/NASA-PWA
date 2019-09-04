import { Epic } from 'redux-observable'
import { RootState } from './RootState'
import { RootAction } from './RootAction'
import { StatusAPI } from './StatusAPI'

declare global {
  type TStatusAPI = StatusAPI
  type TStateAPI = {
    status: TStatusAPI
    error: object | null
  }

  type TEpic = Epic<RootAction, RootAction, RootState>

  type TApiGetAPODResponse = {
    date: string
    explanation: string
    hdurl: string
    media_type: string
    service_version: string
    title: string
    url: string
  }
}
