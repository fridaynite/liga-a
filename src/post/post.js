import React from 'react'

import { Card } from '../ui/card'
import { CardBody } from '../ui/card-body'
import { CardTitle } from '../ui/card-title'
import { Paragraph } from '../ui/paragraph'
import { CardNameWrapper } from '../ui/card-name-wrapper'
import { CardName } from '../ui/card-name'

function Post(props) {
  return (
    <Card>
      <CardNameWrapper>
        <CardBody>
          <CardName>{props.name}</CardName>
          <CardName>({props.username})</CardName>
        </CardBody>
      </CardNameWrapper>
      <CardBody>
        <CardTitle>{props.title}</CardTitle>
        <Paragraph>{props.body}</Paragraph>
      </CardBody>
    </Card>
  )
}

export default Post
