// src/components/AddPost.js
import React, { useState } from 'react';

const AddPost = ({ addPost, navigate }) => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addPost({ title, content });
    navigate('home');
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Add New Post</h2>
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
      <button type="submit">Add Post</button>
    </form>
  );
};

export default AddPost;
