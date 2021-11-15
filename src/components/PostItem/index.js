import React, { memo } from 'react'

import './styles.css'

const PostItem = ({ post }) => {
  return (
    <li className="post-item-list">
      <strong>{post.title}</strong>
      <p>{post.body}</p>
    </li>
  )
}

export default memo(PostItem)
