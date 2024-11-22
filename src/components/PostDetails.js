import React from 'react';

const PostDetails = ({ post, deletePost, navigate }) => {
  if (!post) return <p>No post selected.</p>;

  return (
    <div>
      <h1>{post.title}</h1>
      <p>{post.content}</p>
      <button onClick={() => navigate('edit-post', post)}>Edit</button>
      <button
        onClick={() => {
          deletePost(post.id);
          navigate('home');
        }}
      >
        Delete
      </button>
    </div>
  );
};

export default PostDetails;
