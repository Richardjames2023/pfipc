
import React from 'react';
import './LatestPosts.css';

const posts = [
  {
    category: 'Global',
    title: '5 Reasons Why Nigeria Is a Top Emerging Market for Investment',
    excerpt: 'Discover why global investors are increasingly turning to Nigeria — from resource wealth to youthful demographics...',
    image: './images/serv1.jpg',
    time: '6 mins ago',
    comments: 39,
  },
  {
    category: 'Global',
    title: 'Top Investment Trends for 2025',
    excerpt: 'Discover why global investors are increasingly turning to Nigeria — from resource wealth to youthful demographics...',
    image: './images/serv2.jpg',
    time: '10 days ago',
    comments: 0,
  },
  {
    category: 'Global',
    title: 'Why Foreign Investors Are Choosing Nigeria',
    excerpt: 'Discover why global investors are increasingly turning to Nigeria — from resource wealth to youthful demographics...',
    image: './images/serv3.jpg',
    time: '16 hours ago',
    comments: 9,
  },
];

const LatestPosts = () => {
  return (
    <section className="latest-posts-container">
      <div className="latest-posts">
        <div className="posts-header">
          <h2 className="section-title">Latest Blog Posts</h2>
          <p className="latest-posts-section-subtitle">
            Stay up to date with PFIPC’s latest insights, investment trends, and global economic news.
          </p>
        </div>
        <div className="latest-posts-grid">
          {posts.map((post, index) => (
            <a href="/blog" className="post-card" key={index}>
              <div className="post-image-wrapper">
                <img src={post.image} alt={post.title} className="post-image" />
                <span className="badge">{post.category}</span>
              </div>
              <div className="post-body">
                <h3 className="post-title">{post.title}</h3>
                <p className="post-excerpt">{post.excerpt}</p>
                <div className="post-footer">
                  <span className="post-time">🕒 {post.time}</span>
                  <span className="post-comments">💬 {post.comments} Comments</span>
                </div>
                <button className="read-more-button">Read More</button>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LatestPosts;



