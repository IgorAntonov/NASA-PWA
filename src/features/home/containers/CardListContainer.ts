import { connect } from 'react-redux'

import { RootState } from 'RootState'

import { apiDataSelectors } from '../../../api'

import { CardList } from '../organisms'

const mapStateToProps = (state: RootState) => ({
  apodData: apiDataSelectors.getAPOD.getData(state),
})

export type ContainerProps = ReturnType<typeof mapStateToProps>

export const CardListContainer = connect(mapStateToProps)(CardList)
