import React from 'react'
import styled from 'styled-components'

import { Header } from '../../atoms'
import { AddInput, TodoItem } from '../../molecules'
import { StateProps, DispatchProps } from './TemplateList.connect'

type Props = {} & StateProps & DispatchProps

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70%;
`

export const TemplateList: React.FC<Props> = ({
  todos,
  addTodo,
  removeTodo,
  getAPODTrigger,
}) => (
  <Container>
    <Header>Typicaal TODO</Header>
    <button type="button" onClick={getAPODTrigger}>
      TRIGGER
    </button>
    <AddInput addTodo={addTodo} />
    {todos.map(item => (
      <TodoItem key={item.id} onClick={() => removeTodo(item.id)}>
        {item.value}
      </TodoItem>
    ))}
  </Container>
)
