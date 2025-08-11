/// NewsHeader.js
import React from 'react';
import './NewsHeader.css';

const NewsHeader = ({ selectedCategory, setSelectedCategory }) => {
  const categories = ['ALL', 'INVESTMENT', 'AGRICULTURE', 'TECHNOLOGY', 'OTHER'];

  return (
    <div className="news-header">
      <div className="category-filter">
        {categories.map((category) => (
          <span
            key={category}
            className={`category-item ${selectedCategory === category ? 'active' : ''}`}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </span>
        ))}
      </div>
      <div className="search-container">
        <input type="text" placeholder="Search" className="search-input" />
      </div>
    </div>
  );
};

export default NewsHeader;
