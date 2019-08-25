import { TemplateAction } from '../features/template/actions'
import { TApiAction } from '../api'

export type RootAction = TemplateAction | TApiAction
