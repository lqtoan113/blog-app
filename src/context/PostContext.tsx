import React, { createContext, useContext, useState, ReactNode } from 'react';

interface Post {
  id: number;
  title: string;
  description: string;
  date: string;
  category: string;
}

interface PostContextType {
  posts: Post[];
  addPost: (newPost: Post) => void;
  updatePost: (updatePost: Post) => void;
  editPost: Post | null;
  setEditPost: (post: Post | null) => void;
}

const PostContext = createContext<PostContextType | undefined>(undefined);

const PostProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [posts, setPosts] = useState<Post[]>([
    { id: 1, title: 'Bài viết 1', description: 'Mô tả ngắn về bài viết 1.', date: '2025-01-09', category: 'Thể loại 1' },
    { id: 2, title: 'Bài viết 2', description: 'Mô tả ngắn về bài viết 2.', date: '2025-01-08', category: 'Thể loại 1' },
    { id: 3, title: 'Bài viết 3', description: 'Mô tả ngắn về bài viết 3.', date: '2025-01-07', category: 'Thể loại 2' },
    { id: 4, title: 'Bài viết 4', description: 'Mô tả ngắn về bài viết 4.', date: '2025-01-06', category: 'Thể loại 3' },
    { id: 5, title: 'Bài viết 5', description: 'Mô tả ngắn về bài viết 5.', date: '2025-01-05', category: 'Thể loại 3' },
    { id: 6, title: 'Bài viết 6', description: 'Mô tả ngắn về bài viết 6.', date: '2025-01-04', category: 'Thể loại 2' },
    { id: 7, title: 'Bài viết 7', description: 'Mô tả ngắn về bài viết 7.', date: '2025-01-03', category: 'Thể loại 3' },
    { id: 8, title: 'Bài viết 8', description: 'Mô tả ngắn về bài viết 8.', date: '2025-01-02', category: 'Thể loại 1' },
    { id: 9, title: 'Bài viết 9', description: 'Mô tả ngắn về bài viết 9.', date: '2025-01-01', category: 'Thể loại 2' },
  ]);

  const [editPost, setEditPost] = useState<Post | null>(null);

  const addPost = (newPost: Post) => {
    setPosts((prevPosts) => [...prevPosts, newPost]);
  };

  const updatePost = (updatePost: Post) => {
    setPosts((prevPosts) =>
      prevPosts.map((post) => (post.id === updatePost.id ? updatePost : post))
    );
    setEditPost(null);
  };




  return (
    <PostContext.Provider value={{ posts, addPost, updatePost, editPost, setEditPost }}>
      {children}
    </PostContext.Provider>
  );
};

const usePostContext = (): PostContextType => {
  const context = useContext(PostContext);
  if (!context) {
    throw new Error('usePostContext must be used within a PostProvider');
  }
  return context;
};

export { PostProvider, usePostContext };
