import React from "react";
import { usePostContext } from "../context/PostContext";

interface Post {
    id: number;
    title: string;
    description: string;
    date: string;
    category: string;
}
interface PostCartProps {
    post: Post;
}
const PostCard: React.FC<PostCartProps> = ({ post }) => {

    const { setEditPost } = usePostContext();
    
    return (
        <li className="PostCardItem">
            <h2>{post.title}</h2>
            <p>{post.description}</p>
            <small>Ngày đăng: {post.date}</small>
            <p className="Category">{post.category}</p>
            <button onClick={() => setEditPost(post)}>Edit</button>
        </li>
    );
};
export default PostCard;