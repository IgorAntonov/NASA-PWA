import { connect } from 'react-redux'

import { apiActions } from '../../../api'
import { Home } from '../pages'

const mapDispatchToProps = {
  getAPODTrigger: apiActions.getAPOD.trigger,
}

export type ContainerProps = typeof mapDispatchToProps

export const HomeContainer = connect(
  null,
  mapDispatchToProps,
)(Home)
