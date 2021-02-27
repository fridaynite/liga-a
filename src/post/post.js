import React from 'react'

import { Card } from '../ui/card'
import { CardTitle } from '../ui/card-title'
import { Paragraph } from '../ui/paragraph'
import { CardName } from '../ui/card-name'

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
