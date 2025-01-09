import React from "react";
import FormCreate from "../components/FormCreate";
import PostCard from "../components/PostCard";
import { usePostContext } from "../context/PostContext";


const CreatePostPage: React.FC = () => {
  const {posts} = usePostContext();
  return (
      <div>
        <FormCreate/>
        <h1>List of Post</h1>
        <ul className="PostCard">
        {posts.map((post) => (
          <PostCard key={post.id} post={post} />
        ))}
      </ul>
      </div>
    );
};

export default CreatePostPage;
