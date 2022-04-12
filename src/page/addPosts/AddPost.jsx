import React from 'react'

import './addpost.css'
import AddPostForm from './../../features/posts/AddPostForm';
import PostList from './../../features/posts/PostList';

const AddPost = () => {
  return (
    <div>
        <AddPostForm/>
        <PostList/>

    </div>
  )
}

export default AddPost