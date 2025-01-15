import React, { useEffect, useState } from "react";
import PostCard from "../components/PostCard"
import { usePostContext } from "../context/PostContext";
import FormCreate from "../components/FormCreate";




const HomePage: React.FC = () => {
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

  console.log('form home page');
  return (
    <div className="Container">
    <aside className="SideBar">Something</aside>
    <div className="Content">
      
    <button className="CreateButton" onClick={toggleForm}>
        {showForm ? "Close Form" : "Add Post"}
      </button>

      {showForm && <FormCreate onClose={toggleForm} />}
      <h1>List of Post</h1>
      <ul className="PostCard">
        {posts.map(post => (
          <PostCard key={post.id} post={post} />
        ))}
      </ul>
    </div>
    </div>
  );
};

export default HomePage;
