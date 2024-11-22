// src/components/PostList.js
import React from 'react';

const PostList = ({ posts, navigate }) => {
  return (
    <div className="home-page">
      <h2>All Posts</h2>
      {posts.length === 0 ? (
        <p>No posts available. Add a new post!</p>
      ) : (
        <ul>
          {posts.map((post) => (
            <li key={post.id}>
              <h3>{post.title}</h3>
              <p>{post.content}</p>
              <div>
                <button onClick={() => navigate('post-details', post)}>View Details</button>
                <button onClick={() => navigate('editpost', post)}>Edit</button>
                <button onClick={() => navigate('deletepost', post.id)}>Delete</button>
              </div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default PostList;
