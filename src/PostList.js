import React, { useState, useEffect } from "react";
import axios from "axios";
import { List, ListItem, ListItemText } from "@mui/material";
import SearchBar from "./SearchBar";
import "./PostList.css"; // Import the CSS file

const PostList = () => {
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/posts")
      .then((response) => {
        setPosts(response.data);
        setFilteredPosts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching posts:", error);
      });
  }, []);

  const handleSearch = (searchQuery) => {
    const filtered = posts.filter((post) =>
      post.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
    setFilteredPosts(filtered);
  };

  return (
    <div className="post-list-container">
      <div className="search-bar">
        <SearchBar onSearch={handleSearch} />
      </div>
      <List className="post-list">
        {filteredPosts.map((post) => (
          <ListItem key={post.id} className="post-item">
            <ListItemText
              primary={<span className="post-title">{post.title}</span>}
              secondary={<span className="post-body">{post.body}</span>}
            />
          </ListItem>
        ))}
      </List>
    </div>
  );
};

export default PostList;