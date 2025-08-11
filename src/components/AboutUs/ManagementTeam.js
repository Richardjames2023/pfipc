import React from 'react';
import './ManagementTeam.css';

const ManagementTeam = () => {
  return (
    <section className="management-team-section" id="managementTeam">
      {/* Header Section */}
      <div className="management-team-header">
        <h2>Management Team</h2>
        <p>
          The Management Team at PFIPC consists of dedicated professionals with expertise in foreign investment, economic development,
          and international partnerships. They are responsible for implementing strategic initiatives and ensuring the agency achieves
          its objectives.
        </p>
      </div>

      {/* Team Member Section 1 */}
      <div className="team-member team-member-first">
        <div className="team-member-image">
          {/* Placeholder for image */}
          <div className="image-placeholder"></div>
        </div>
        <div className="team-member-info">
          <h3>Prince Adeniyi Adeyemi</h3>
          <p className="team-member-role">Director General</p>
          <p>
            Prince Adeniyi Adeyemi leads investment operations at PFIPC, focusing on attracting and retaining foreign investments across
            Nigeria's key economic sectors. Her extensive experience in international finance and investment has been crucial in
            strengthening Nigeria's global investment profile.
          </p>
        </div>
      </div>

      {/* Team Member Section 2 */}
      <div className="team-member">
        <div className="team-member-image">
          {/* Placeholder for image */}
          <div className="image-placeholder"></div>
        </div>
        <div className="team-member-info">
          <h3>Mr. John Doe</h3>
          <p className="team-member-role">Director of Strategic Partnerships</p>
          <p>
            Mr. John Doe oversees strategic partnerships at PFIPC, establishing relationships with international and local stakeholders
            to create a supportive ecosystem for foreign investments. His efforts play a vital role in fostering collaboration across
            borders, ensuring that Nigeria remains a competitive investment destination.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ManagementTeam;
