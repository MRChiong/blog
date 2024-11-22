import React from 'react';
import PostList from '../components/PostList';

const Home = ({ posts, navigate }) => <PostList posts={posts} navigate={navigate} />;

export default Home;
