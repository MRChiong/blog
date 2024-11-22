import React from 'react';

const Login = ({ navigate }) => {
  return (
    <div>
      <h1>Login Page</h1>
      <button onClick={() => navigate('home')}>Go Back</button>
    </div>
  );
};

export default Login;
