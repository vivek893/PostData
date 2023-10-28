import React, { useState} from 'react';
import Loader from './loadig';
import axios from 'axios';
import '../App.css'
import { NavLink } from 'react-router-dom';

const Post = () => {

  const [loading, setLoading] = useState(true);
  const [posts, setPosts] = useState([]);
const handlePost =async()=>{

    const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
    setPosts(response.data)
    setLoading(false)
}
handlePost().then(()=>{
    // console.log(posts)
})
const itemsPerPage = 10;
const totalSlides = Math.ceil(posts.length / itemsPerPage);
const [currentPage, setCurrentPage] = useState(1);
const goToPage = (page) => {
    setCurrentPage(page);
};
const currentData = posts.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
);
  return (
    <div>
      {loading ? (
        <Loader />
      ) : (
        <ul id="postsList">
          {currentData.map((post, index) => (
            <li key={post.id} className={index % 2 === 0 ? 'even' : 'odd'} >
                <NavLink to={`/posts/${post.id}`}>{post.title}</NavLink>
            </li>
          ))}
        </ul>
      )}
    <div>
    {Array.from({ length: totalSlides }).map((_, index) => (
      <button key={index} onClick={() => goToPage(index + 1)}>
        {index + 1}
      </button>
    ))}
  </div>
  </div>
  );
}
export default Post