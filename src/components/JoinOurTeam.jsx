import React from "react";
import "./JoinOurTeam.css";

const jobs = [
  { type: "Full Time / Part Time", title: "Marketing Advisor" },
  { type: "Full Time", title: "Supervisor" },
  { type: "Part Time", title: "Field Agent" },
  { type: "Full Time / Part Time", title: "Receptionist" },
];

const JoinOurTeam = () => {
  return (
    <section className="join-section">
      <div className="join-header">
        <span className="small-label">VACANCY/CAREER</span>
        <h2>
          Join <span>Our Team!</span>
        </h2>
        <p>
          Sint nascetur facere, delectus conubia consequuntur, nonummy
          distinctio! Non officiis, id natus non nisl provident justo.
        </p>
      </div>

      <div className="join-content">
        <div className="job-cards">
          {jobs.map((job, index) => (
            <div className="job-card" key={index}>
              <span className="job-type">{job.type}</span>
              <h3>{job.title}</h3>
              <p>
                Magna voluptatum dolorem! Dolores! Sociosqu commodo nobis
                imperdiet lacinia? Magnis Felis, elementum.
              </p>
              <button className="apply-btn">APPLY NOW</button>
            </div>
          ))}
        </div>

        <form className="join-form">
          <div className="form-header">Join Our Team</div>
          <input type="text" placeholder="Your Name*" required />
          <input type="email" placeholder="Your Email*" required />
          <input type="text" placeholder="Your Position*" required />
          <textarea placeholder="Enter your message"></textarea>
          <button type="submit" className="send-btn">
            SEND APPLICATION
          </button>
        </form>
      </div>
    </section>
  );
};

export default JoinOurTeam;
