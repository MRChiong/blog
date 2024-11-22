import React from 'react';

const Signup = ({ navigate }) => {
  return (
    <div>
      <h1>Signup Page</h1>
      <button onClick={() => navigate('home')}>Go Back</button>
    </div>
  );
};

export default Signup;
