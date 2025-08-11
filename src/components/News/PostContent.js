// PostContent.js
import React from 'react';
import './PostContent.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const posts = [
  // Investment Category
  { id: 1, category: 'INVESTMENT', title: 'Investment Strategy 2024', tag: 'INVESTMENT', image: '../images/read.png', date: '2024-11-13' },
  { id: 2, category: 'INVESTMENT', title: 'Finding Capital for Your Startup', tag: 'INVESTMENT', image: '../images/read.png', date: '2024-11-12' },
  { id: 3, category: 'INVESTMENT', title: 'Tips for First-Time Investors', tag: 'INVESTMENT', image: '../images/read.png', date: '2024-11-11' },
  { id: 4, category: 'INVESTMENT', title: 'Evaluating Risk in Investment', tag: 'INVESTMENT', image: '../images/read.png', date: '2024-11-10' },

  // Agriculture Category
  { id: 5, category: 'AGRICULTURE', title: 'Organic Farming Techniques', tag: 'AGRICULTURE', image: '../images/read.png', date: '2024-11-09' },
  { id: 6, category: 'AGRICULTURE', title: 'Future of Sustainable Agriculture', tag: 'AGRICULTURE', image: '../images/read.png', date: '2024-11-08' },
  { id: 7, category: 'AGRICULTURE', title: 'Using Tech in Crop Management', tag: 'AGRICULTURE', image: '../images/read.png', date: '2024-11-07' },
  { id: 8, category: 'AGRICULTURE', title: 'Maximizing Yield with New Methods', tag: 'AGRICULTURE', image: '../images/read.png', date: '2024-11-06' },

  // Technology Category
  { id: 9, category: 'TECHNOLOGY', title: 'AI Trends in Finance', tag: 'TECHNOLOGY', image: '../images/read.png', date: '2024-11-05' },
  { id: 10, category: 'TECHNOLOGY', title: 'Blockchain Security Solutions', tag: 'TECHNOLOGY', image: '../images/read.png', date: '2024-11-04' },
  { id: 11, category: 'TECHNOLOGY', title: 'Cybersecurity Essentials', tag: 'TECHNOLOGY', image: '../images/read.png', date: '2024-11-03' },
  { id: 12, category: 'TECHNOLOGY', title: 'Automation in Industry 4.0', tag: 'TECHNOLOGY', image: '../images/read.png', date: '2024-11-02' },

  // Finance Category
  { id: 13, category: 'FINANCE', title: 'Personal Finance Tips', tag: 'FINANCE', image: '../images/read.png', date: '2024-11-01' },
  { id: 14, category: 'FINANCE', title: 'Tax Planning for 2024', tag: 'FINANCE', image: '../images/read.png', date: '2024-10-31' },
  { id: 15, category: 'FINANCE', title: 'Retirement Planning Essentials', tag: 'FINANCE', image: '../images/read.png', date: '2024-10-30' },
  { id: 16, category: 'FINANCE', title: 'Debt Management Strategies', tag: 'FINANCE', image: '../images/read.png', date: '2024-10-29' },

  // Global Category
  { id: 17, category: 'GLOBAL', title: 'Global Economic Trends', tag: 'GLOBAL', image: '../images/read.png', date: '2024-10-28' },
  { id: 18, category: 'GLOBAL', title: 'Impact of Trade Tariffs', tag: 'GLOBAL', image: '../images/read.png', date: '2024-10-27' },
  { id: 19, category: 'GLOBAL', title: 'International Trade Policies', tag: 'GLOBAL', image: '../images/read.png', date: '2024-10-26' },
  { id: 20, category: 'GLOBAL', title: 'Sustainable Global Development', tag: 'GLOBAL', image: '../images/read.png', date: '2024-10-25' },
];

const PostContent = ({ selectedCategory, excludeLatestPost }) => {
  const filteredPosts = selectedCategory === 'ALL'
    ? posts.filter(post => post.id !== excludeLatestPost?.id)
    : posts.filter(post => post.category === selectedCategory && post.id !== excludeLatestPost?.id);

  return (
    <div className="post-content">
      <div className="posts-grid">
        {filteredPosts.map(post => (
          <div key={post.id} className="post-card">
            <img src={post.image} alt={post.title} className="post-image" />
            <div className="post-details">
              <div className="post-tag">{post.tag}</div>
              <h3 className="post-title">{post.title}</h3>
              <button className="read-button">
                Read <FontAwesomeIcon icon={faArrowRight} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PostContent;
