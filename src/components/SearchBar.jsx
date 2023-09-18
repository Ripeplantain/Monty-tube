import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Paper, IconButton } from '@mui/material';
import { Search } from '@mui/icons-material';

const SearchBar = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (searchTerm) {
      navigate(`/search/${searchTerm}`);
      setSearchTerm('');
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSubmit}
      sx={{
        borderRadius: 20,
        border: '1px solid #e3e3e3',
        pl: 2,
        boxShadow: 'none',
        mr: { sm: 5 },
        width: '100%',
        display: 'flex', 
        flexDirection: 'row', 
        alignItems: 'center', 
        boxSizing: 'border-box', 
        justifyContent: 'space-between',
        padding: { xs: '5px', sm: '10px' }, 
      }}
    >
      <input
        className="search-bar"
        placeholder="Search..."
        value={searchTerm}
        onChange={(e) => {
          setSearchTerm(e.target.value);
        }}
        style={{
          flex: 1, 
          border: 'none',
          outline: 'none',
          fontSize: '14px',
        }}
      />

      <IconButton type="submit" sx={{ p: '7px', color: 'red', flexShrink: 0 }}>
        <Search />
      </IconButton>
    </Paper>
  );
};

export default SearchBar;
