import { connect } from 'react-redux'

import { RootState } from 'src/types/RootState'
import { TemplateList } from './TemplateList'
import { templateActions } from '../../actions'
import { getTodos } from '../../selectors'
import { apiActions } from '../../../../api'

export type StateProps = {
  todos: ReturnType<typeof getTodos>
}

const mapStateToProps = (state: RootState): StateProps => ({
  todos: getTodos(state),
})

const mapDispatchToProps = {
  addTodo: templateActions.addItem,
  removeTodo: templateActions.deleteItem,
  getAPODTrigger: apiActions.getAPOD.trigger,
}

export type DispatchProps = typeof mapDispatchToProps

export const TemplateListContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(TemplateList)
