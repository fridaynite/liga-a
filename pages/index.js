import Head from 'next/head'
import { wrapper } from '../store'

import { getPosts } from '../components/post/actions'
import { getUsers } from '../components/user/actions'

import { Container } from '../ui'
import { CardListWrapper } from '../components/post/styles'

import { SearchBar, PostList } from '../components/'

export default function Home() {
  return (
    <>
      <Head>
        <title>Posts app</title>
      </Head>

      <Container>
        <SearchBar />
        <CardListWrapper>
          <PostList />
        </CardListWrapper>
      </Container>
    </>
  )
}

export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  const { dispatch } = store

  await dispatch(getPosts())
  await dispatch(getUsers())
})
