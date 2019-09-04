import React from 'react'

type Props = {}

export const HomeTemplate: React.FC<Props> = ({ children }) => (
  <div style={{ paddingBottom: 100 }}>{children}</div>
)
