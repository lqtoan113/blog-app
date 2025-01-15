import React, { useEffect, useState } from "react";
import FormCreate from "../components/FormCreate";
import PostCard from "../components/PostCard";
import { usePostContext } from "../context/PostContext";

const CreatePostPage: React.FC = () => {
  const { posts, editPost } = usePostContext();
  const [showForm, setShowForm] = useState<boolean>(false); 

  const toggleForm = () => {
    setShowForm(!showForm);
    if(!showForm){
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  };
  useEffect(() => {
    if (editPost) {
      setShowForm(true); 
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
  }, [editPost]);
  return (
    <div>
      <button className="CreateButton" onClick={toggleForm}>
        {showForm ? "Close Form" : "Add Post"}
      </button>

      {showForm && <FormCreate onClose={toggleForm} />}

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
