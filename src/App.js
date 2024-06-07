import React from 'react';
import PostList from './PostList';
import './App.css'; 

const App = () => {
  return (
    <div className="app-container">
      <div className="app-header">
        <h1>Posts</h1>
      </div>
      <div className="post-list-container">
        <PostList />
      </div>
    </div>
  );
};

export default App;