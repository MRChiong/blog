// src/components/EditPost.js
import React, { useState, useEffect } from 'react';

const EditPost = ({ post, editPost, navigate }) => {
  const [title, setTitle] = useState(post?.title || '');
  const [content, setContent] = useState(post?.content || '');

  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setContent(post.content);
    }
  }, [post]);

  const handleSubmit = (e) => {
    e.preventDefault();
    editPost({ id: post.id, title, content });
    navigate('home');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Edit Post</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        required
      />
      <textarea
        placeholder="Content"
        value={content}
        onChange={(e) => setContent(e.target.value)}
        required
      />
      <button type="submit">Update Post</button>
    </form>
  );
};

export default EditPost;
