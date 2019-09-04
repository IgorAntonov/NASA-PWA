import React from 'react'
import Container from '@material-ui/core/Container'

import { DataCard } from '..'
import { ContainerProps } from '../../containers/CardListContainer'

type Props = {} & ContainerProps

export const CardList: React.FC<Props> = ({ apodData }) => {
  if (!apodData) {
    return <div>Loading...</div>
  }
  return (
    <Container>
      {apodData.map(item => (
        <DataCard
          key={item.date}
          date={item.date}
          explanation={item.explanation}
          url={item.url}
          title={item.title}
        />
      ))}
    </Container>
  )
}
