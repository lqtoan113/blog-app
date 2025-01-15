import React, { useState, useEffect } from "react";
import { usePostContext } from "../context/PostContext";
import TextareaAutosize from "react-textarea-autosize";

interface FormCreateProps {
  onClose: () => void; // Callback đóng form
}

const FormCreate: React.FC<FormCreateProps> = ({ onClose }) => {
  const { addPost, updatePost, editPost } = usePostContext();
  
  // Các state cho form
  const [title, setTitle] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [date, setDate] = useState<string>(new Date().toISOString().split("T")[0]);
  const [category, setCategory] = useState<string>("");

  useEffect(() => {
    if (editPost) {
      setTitle(editPost.title);
      setDescription(editPost.description);
      setDate(editPost.date);
      setCategory(editPost.category);
    } else {
      setTitle("");
      setDescription("");
      setDate("");
      setCategory("");
    }
  }, [editPost]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (editPost) {
      updatePost({
        id: editPost.id,
        title,
        description,
        date,
        category,
      });
    } else {
      addPost({
        id: Date.now(),
        title,
        description,
        date,
        category,
      });
    }
    onClose(); // Đóng form sau khi submit
  };

  return (
    <div className="Form">
      <h1>{editPost ? "Edit Post" : "Add New Post"}</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="title">Title:</label>
          <input type="text" id="title" value={title} onChange={(e) => setTitle(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <TextareaAutosize id="description" value={description} onChange={(e) => setDescription(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="category">Category:</label>
          <input type="text" id="category" value={category} onChange={(e) => setCategory(e.target.value)} required />
        </div>
        <div>
          <label htmlFor="date">Date:</label>
          <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
        </div>
        <div className="Button">
            <button type="submit">Save Post</button>
          <button type="button" onClick={onClose}>Cancel</button>
        </div>
      </form>
    </div>
  );
};

export default FormCreate;
