import React from "react";
import { useState, useEffect } from "react";

import { api } from "../../service/api";

import PostItem from "../PostItem";

import './styles.css'

const Posts = () => {
  const [posts, setPosts] = useState([]);
  const [newPost, setNewPost] = useState('');

  useEffect(() => {
    api.get("/posts").then((response) => {
      setPosts(response.data);
    });
  }, []);

  return (
    <>
      <section>
        <input 
          onChange={e => setNewPost(e.target.value)} 
          value={newPost} 
          placeholder="Pesquise"
          className="post-input"
        />

        <ul className="post-card">
          {posts.map((post) => (
            <PostItem key={post.id} post={post}/>
          )) }
        </ul>
      </section>
    </>
  );
};

export default Posts;
