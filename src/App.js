// src/App.js
import React, { useState } from 'react';
import PostList from './components/PostList'; // Import PostList component
import AddPost from './components/AddPost'; // Correct import for AddPost
import EditPost from './components/EditPost'; // Correct import for EditPost
import PostDetails from './components/PostDetails'; // Correct import for PostDetails
import Navbar from './components/Navbar'; // Import Navbar
import Login from './pages/Login'; // Import Login
import Signup from './pages/Signup'; // Import Signup
import Delete from './components/Delete';

import './App.css';


const App = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const [posts, setPosts] = useState([
    { id: 1, title: 'First Post', content: 'This is the first post.' },
    { id: 2, title: 'Second Post', content: 'This is the second post.' },
  ]);
  const [selectedPost, setSelectedPost] = useState(null);

  // Function to navigate between pages
  const navigate = (page, post = null) => {
    setCurrentPage(page);
    setSelectedPost(post);
  };

  // Function to add a new post
  const handleAddPost = (newPost) => {
    setPosts([...posts, { ...newPost, id: Date.now() }]);
  };

  // Function to edit an existing post
  const editPost = (updatedPost) => {
    setPosts(posts.map((post) => (post.id === updatedPost.id ? updatedPost : post)));
  };

  // Function to delete a post
  const deletePost = (id) => {
    setPosts(posts.filter((post) => post.id !== id));
  };

  return (
    <div>
      <Navbar navigate={navigate} />
      {currentPage === 'home' && <PostList posts={posts} navigate={navigate} />} {/* Render PostList component */}
      {currentPage === 'login' && <Login navigate={navigate} />}
      {currentPage === 'signup' && <Signup navigate={navigate} />}
      {currentPage === 'addpost' && <AddPost addPost={handleAddPost} navigate={navigate} />}
      {currentPage === 'editpost' && <EditPost post={selectedPost} editPost={editPost} navigate={navigate} />}
      {currentPage === 'postdetails' && (
        <PostDetails post={selectedPost} deletePost={deletePost} navigate={navigate} />
      )}
       {currentPage === 'delete-post' && ( 
      <Delete post={selectedPost} deletePost={deletePost} navigate={navigate} />
    )} {/* Render Delete component */}
    </div>
  );
};

export default App;
