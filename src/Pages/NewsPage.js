// NewsPage.js
import React, { useState } from 'react';
import NewsHeader from '../components/News/NewsHeader';
import PostContent from '../components/News/PostContent';
import NewsImage from '../components/News/NewsImage'

// Sample posts data (included directly in PostContent.js, but shown here for clarity)
const posts = [
  { id: 1, category: 'INVESTMENT', title: 'Investment Strategy 2024', tag: 'INVESTMENT', image: 'path/to/image.jpg', date: '2024-11-13' },
  { id: 2, category: 'INVESTMENT', title: 'Finding Capital for Your Startup', tag: 'INVESTMENT', image: 'path/to/image.jpg', date: '2024-11-12' },
  { id: 3, category: 'INVESTMENT', title: 'Tips for First-Time Investors', tag: 'INVESTMENT', image: 'path/to/image.jpg', date: '2024-11-11' },
  { id: 4, category: 'INVESTMENT', title: 'Evaluating Risk in Investment', tag: 'INVESTMENT', image: 'path/to/image.jpg', date: '2024-11-10' },
  { id: 5, category: 'AGRICULTURE', title: 'Organic Farming Techniques', tag: 'AGRICULTURE', image: 'path/to/image.jpg', date: '2024-11-09' },
  { id: 6, category: 'AGRICULTURE', title: 'Future of Sustainable Agriculture', tag: 'AGRICULTURE', image: 'path/to/image.jpg', date: '2024-11-08' },
  { id: 7, category: 'AGRICULTURE', title: 'Using Tech in Crop Management', tag: 'AGRICULTURE', image: 'path/to/image.jpg', date: '2024-11-07' },
  { id: 8, category: 'AGRICULTURE', title: 'Maximizing Yield with New Methods', tag: 'AGRICULTURE', image: 'path/to/image.jpg', date: '2024-11-06' },
  { id: 9, category: 'TECHNOLOGY', title: 'AI Trends in Finance', tag: 'TECHNOLOGY', image: 'path/to/image.jpg', date: '2024-11-05' },
  { id: 10, category: 'TECHNOLOGY', title: 'Blockchain Security Solutions', tag: 'TECHNOLOGY', image: 'path/to/image.jpg', date: '2024-11-04' },
  { id: 11, category: 'TECHNOLOGY', title: 'Cybersecurity Essentials', tag: 'TECHNOLOGY', image: 'path/to/image.jpg', date: '2024-11-03' },
  { id: 12, category: 'TECHNOLOGY', title: 'Automation in Industry 4.0', tag: 'TECHNOLOGY', image: 'path/to/image.jpg', date: '2024-11-02' },
  { id: 13, category: 'FINANCE', title: 'Personal Finance Tips', tag: 'FINANCE', image: 'path/to/image.jpg', date: '2024-11-01' },
  { id: 14, category: 'FINANCE', title: 'Tax Planning for 2024', tag: 'FINANCE', image: 'path/to/image.jpg', date: '2024-10-31' },
  { id: 15, category: 'FINANCE', title: 'Retirement Planning Essentials', tag: 'FINANCE', image: 'path/to/image.jpg', date: '2024-10-30' },
  { id: 16, category: 'FINANCE', title: 'Debt Management Strategies', tag: 'FINANCE', image: 'path/to/image.jpg', date: '2024-10-29' },
  { id: 17, category: 'GLOBAL', title: 'Global Economic Trends', tag: 'GLOBAL', image: 'path/to/image.jpg', date: '2024-10-28' },
  { id: 18, category: 'GLOBAL', title: 'Impact of Trade Tariffs', tag: 'GLOBAL', image: 'path/to/image.jpg', date: '2024-10-27' },
  { id: 19, category: 'GLOBAL', title: 'International Trade Policies', tag: 'GLOBAL', image: 'path/to/image.jpg', date: '2024-10-26' },
  { id: 20, category: 'GLOBAL', title: 'Sustainable Global Development', tag: 'GLOBAL', image: 'path/to/image.jpg', date: '2024-10-25' },
];

const NewsPage = () => {
  const [selectedCategory, setSelectedCategory] = useState('ALL');

  // Sort posts by date in descending order and get the most recent post
  const sortedPosts = [...posts].sort((a, b) => new Date(b.date) - new Date(a.date));
  const latestPost = sortedPosts[0];

  return (
    <div>
        <NewsImage />
      <NewsHeader selectedCategory={selectedCategory} setSelectedCategory={setSelectedCategory} />
      <PostContent selectedCategory={selectedCategory} excludeLatestPost={latestPost} />
    </div>
  );
};

export default NewsPage;
