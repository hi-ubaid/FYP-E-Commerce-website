import React, { useContext} from 'react';
import { ShopContext } from '../context/shop-context';
import './SearchBar.css'; 

const SearchBar = () => {
  const { searchTerm, setSearchTerm} = useContext(ShopContext);

  const handleSearch = e => {
    setSearchTerm(e.target.value);
  };


  return (
    <div className="search-bar">
      <input
        type="text"
        className="search-input"
        placeholder="Search products..."
        value={searchTerm}
        onChange={handleSearch}
      />
      
    </div>
  );
};

export default SearchBar;