// shop.jsx
import React, { useContext, useState } from 'react';
import { PRODUCTS } from '../../components/products.js';
import { Product } from './product';
import './shop.css';
import { ShopContext } from '../../context/shop-context';
import SearchBar from '../../components/SearchBar';

export const Shop = () => {
  const { searchTerm } = useContext(ShopContext);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [currentPage, setCurrentPage] = useState(1);

  // Function to filter products based on search query
  const filterProducts = (products) => {
    return products.filter(product =>
      product.productName.toLowerCase().includes(searchTerm.toLowerCase())
    );
  };

  // Function to filter products by price range
  const filterProductsByPriceRange = (products) => {
    let min = parseFloat(minPrice);
    let max = parseFloat(maxPrice);
    if (!isNaN(min) && !isNaN(max)) {
      return products.filter(product =>
        product.price >= min && product.price <= max
      );
    } else {
      return products;
    }
  };

  // Calculate total number of pages based on number of products
  const totalPages = Math.ceil(filterProducts(PRODUCTS).length / 12);

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  // Calculate start and end index of products to display based on current page
  const startIndex = (currentPage - 1) * 12;
  const endIndex = startIndex + 12;

  const filteredProducts = filterProducts(PRODUCTS);
  const filteredProductsByPrice = filterProductsByPriceRange(filteredProducts);

  return (
    <div className="shop">
      <div className="search-filter">
        <SearchBar />
        <div className="price-filter">
          <input
            type="number"
            placeholder="Min Price"
            value={minPrice}
            onChange={e => setMinPrice(e.target.value)}
          />
          <span>-</span>
          <input
            type="number"
            placeholder="Max Price"
            value={maxPrice}
            onChange={e => setMaxPrice(e.target.value)}
          />
          <button onClick={() => setMinPrice('') & setMaxPrice('')}>Clear</button>
        </div>
      </div>

      <div className="shopTitle">
        <h1>Buy Product</h1>
      </div>

      <div className="products">
        {searchTerm ? (
          filteredProductsByPrice.map((product) => (
            <Product key={product.id} data={product} />
          ))
        ) : (
          filteredProductsByPrice.slice(startIndex, endIndex).map((product) => (
            <Product key={product.id} data={product} />
          ))
        )}
      </div>

      {/* Pagination */}
      {!searchTerm && (
        <div className="pagination">
          {Array.from({ length: totalPages }, (_, i) => (
            <button
              key={i + 1}
              className={currentPage === i + 1 ? 'active' : ''}
              onClick={() => handlePageChange(i + 1)}
            >
              {i + 1}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Shop;
