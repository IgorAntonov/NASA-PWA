import React, { useEffect } from 'react'
import { Button, Box } from '@material-ui/core'

import { HomeTemplate } from '../../templates'
import { CardListContainer } from '../../containers'
import { ContainerProps } from '../../containers/HomeContainer'

type Props = {} & ContainerProps

export const Home: React.FC<Props> = ({ getAPODTrigger }) => {
  useEffect(() => {
    getAPODTrigger({})
  }, [])

  return (
    <HomeTemplate>
      <CardListContainer />
      <Box style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <Button variant="contained" color="primary" onClick={() => getAPODTrigger({})}>
          Показать предыдущее
        </Button>
      </Box>
    </HomeTemplate>
  )
}
