import React from "react";
import { useState, useEffect } from "react";

import { api } from "../../service/api";

import PostItem from "../PostItem";

import './styles.css'

const Posts = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api.get("/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <>
      <ul className="post-card">
        {posts.map((post) => (
          <PostItem key={post.id} post={post}/>
        )) }
      </ul>
    </>
  );
};

export default Posts;
