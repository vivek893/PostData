import React, { useState } from 'react'
import { NavLink, useParams } from 'react-router-dom';
import Loader from './loadig'
import axios from 'axios';
const PostData = () => {
    const {postId} = useParams()
    const [post,setPost] = useState([])
    const [loading,setLoading] = useState(true)
    const [user,setUser] = useState([]);
    const [userId,setUserId] = useState('');
    const getData = async()=>{
      
        const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
        setPost(response.data)
        setUserId(response.data.userId)
        getData2().then(()=>{setLoading(false)})
         

    }
    const getData2 = async()=>{
      
      // const response = await axios.get(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      // setPost(response.data)
      // console.log(post)
      const resUser = await axios.get(`https://jsonplaceholder.typicode.com/users/${userId}`)
      setUser(resUser.data)
      setLoading(false) 
      
    }
    getData().then(()=>{
    });
  return (

    <div>
      {loading ? (
        <Loader />
      ) : (
        <div className="post-preview">
            <h1 className="postId">Post Id: {postId}</h1>
            <h2 className="postTitle">{post.title}</h2>
            <p className="postBody">{post.body}</p>
            <p className="postUser">By: {user.name}</p>
            <NavLink to='/'>Back to post</NavLink>
        </div>

      )}
    </div>
  )
}

export default PostData