
import React from 'react';
import './GoverningCouncil.css';

const GoverningCouncil = () => {
  return (
    <section className="governing-council-section" id="governingCouncil">
      {/* Header Section */}
      <div className="governing-council-header">
        <h2>Governing Council</h2>
        <p>
          The Presidential Foreign Investment Promotion Council operates under the guidance of its Governing Council,
          responsible for steering the agency's policies and strategic direction. The Council consists of government leaders and
          industry experts who ensure PFIPC's efforts align with Nigeria's economic goals.
        </p>
      </div>

      {/* Council Members Section */}
      <div className="council-member council-member-first">
        <div className="council-member-image">
          <div className="image-placeholder"></div>
        </div>
        <div className="council-member-info">
          <h3>His Excellency, the Vice President of Nigeria</h3>
          <p className="council-member-role">Chairman of the Governing Council</p>
          <p>
            PFIPC’s Governing Council is chaired by His Excellency, the Vice President of Nigeria, who oversees the strategic
            direction of the agency. His Excellency's leadership ensures that PFIPC’s initiatives align with national priorities,
            fostering an investment-friendly climate that attracts global investors.
          </p>
        </div>
      </div>

      {/* Second Council Member */}
      <div className="council-member">
        <div className="council-member-image">
          <div className="image-placeholder"></div>
        </div>
        <div className="council-member-info">
          <h3>Prince Adeniyi Adeyemi</h3>
          <p className="council-member-role">Director General</p>
          <p>
            As the Director General, Prince Adeniyi Adeyemi leads the operational and strategic efforts of PFIPC. He brings
            extensive experience in foreign investment promotion and economic development, ensuring the agency remains at the
            forefront of global investment trends. Prince Adeyemi plays a key role in building international partnerships and
            positioning Nigeria as a premier investment destination.
          </p>
        </div>
      </div>
    </section>
  );
};

export default GoverningCouncil;
