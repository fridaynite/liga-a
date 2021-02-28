import { useSelector } from 'react-redux'

import Post from './index'

function PostList(props) {
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

  return posts.map((post) => (
    <Post
      key={post.id}
      name={post.name}
      username={post.username}
      title={post.title}
      body={post.body}
    />
  ))
}

export default PostList
