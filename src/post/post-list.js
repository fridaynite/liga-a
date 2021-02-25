import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'

import Post from './post'
import { getPosts } from './actions'
import { getUsers } from '../user/actions'

function PostList(props) {
  const dispatch = useDispatch()
  const posts = useSelector((state) => {
    const data = state.post.posts.map((post) => {
      const author = state.user.users.find((user) => user.id === post.userId)

      if (author) {
        return { ...post, name: author.name, username: author.username }
      }

      return post
    })

    return data.filter((post) => {
      return (
        post.body.includes(state.search.value) ||
        post.title.includes(state.search.value)
      )
    })
  })

  useEffect(() => {
    dispatch(getPosts())
    dispatch(getUsers())
  }, [dispatch])

  return posts.map((post) => (
    <Post
      name={post.name}
      username={post.username}
      title={post.title}
      body={post.body}
    />
  ))
}

export default PostList
