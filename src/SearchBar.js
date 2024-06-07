import React, { useState } from 'react';
import { InputAdornment } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import ClearIcon from '@mui/icons-material/Clear';
import './SearchBar.css';

const SearchBar = ({ onSearch }) => {
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearch = (event) => {
    setSearchQuery(event.target.value);
    onSearch(event.target.value);
  };

  const handleClear = () => {
    setSearchQuery('');
    onSearch('');
  };

  return (
    <div className="search-bar">
      <div>
        {!searchQuery && (<InputAdornment position="start" className="search-icon">
          <SearchIcon />
        </InputAdornment>)}
        {searchQuery && (
          <InputAdornment position="end" onClick={handleClear} className="clear-icon">
            <ClearIcon />
          </InputAdornment>
        )}
        <input
          type="text"
          value={searchQuery}
          onChange={handleSearch}
          placeholder="Search..."
        />
      </div>
    </div>
  );
};

export default SearchBar;