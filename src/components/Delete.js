import React from 'react';

const Delete = ({ post, deletePost, navigate }) => {
  const handleDelete = () => {
    deletePost(post.id);
    navigate('home');
  };

  const handleCancel = () => {
    navigate('home');
  };

  return (
    <div className="delete-confirmation">
      <h2>Delete Post</h2>
      <p>Are you sure you want to delete the post titled "{post.title}"?</p>
      <div className="delete-buttons">
        <button className="delete-confirm" onClick={handleDelete}>
          Yes, Delete
        </button>
        <button className="delete-cancel" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default Delete;
