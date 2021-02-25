import React from 'react'

import SearchBar from './search/search-bar'
import PostList from './post/post-list'

import { AppWrapper } from './ui/app-wrapper'
import { Container } from './ui/container'
import { CardListWrapper } from './ui/card-list-wrapper'

function App() {
  return (
    <AppWrapper>
      <Container>
        <SearchBar />
        <CardListWrapper>
          <PostList />
        </CardListWrapper>
      </Container>
    </AppWrapper>
  )
}

export default App
