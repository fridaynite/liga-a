import React from 'react'

import { Card, CardTitle, CardName } from './styles'
import { Paragraph } from '../../ui/paragraph'

function Post(props) {
  return (
    <Card>
      <CardName>
        {props.name} ({props.username})
      </CardName>

      <CardTitle>{props.title}</CardTitle>
      <Paragraph>{props.body}</Paragraph>
    </Card>
  )
}

export default Post
