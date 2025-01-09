import React from "react";
import PostCard from "../components/PostCard"
import { usePostContext } from "../context/PostContext";




const HomePage: React.FC = () => {
  const {posts} = usePostContext();

  console.log('form home page');
  return (
    <div>
      <h1>List of Post</h1>
      <ul className="PostCard">
        {posts.map(post => (
          <PostCard key ={post.id} post ={post}/>
        ))}
      </ul>
    </div>
  );
};

export default HomePage;
