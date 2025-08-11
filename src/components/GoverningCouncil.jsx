import React from 'react';
import "./GoverningCouncil.css";
import image1 from "../assets/bola-ahmed-tinunbu.jpg"
import image2 from "../assets/georgeakume.jpg"
import image3 from "../assets/dg.png"
import image4 from "../assets/golden.jpg"
import image5 from "../assets/cardoso.jpg"
import image6 from "../assets/waleedun.jpg"
import image7 from "../assets/keyamo.jpg"
import image8 from "../assets/kyariabubakar.jpg"

const councilMembers = [
  {
    name: "His Excellency, President Bola Ahmed Tinubu (GCFR) President and Commander-in-Chief of the Armed Forces of Nigeria",
    imgSrc: image1,
    alt: "Portrait of His Excellency, President Bola Ahmed Tinubu wearing traditional Nigerian attire and cap, standing in front of Nigerian flags"
  },
  {
    name: "Senator Dr. George Akume, Secretary to the Government of the Federation",
    imgSrc: image2,
    alt: "Portrait of Senator Dr. George Akume wearing blue traditional cap and clothing with Nigerian flag in background"
  },
  {
    name: "Prince Adeniyi Adeyemi, Director General, Presidential Economic Advisory Council / Presidential Foreign Intervention Promotion Council",
    imgSrc: image3,
    alt: "Portrait of Prince Adeniyi Adeyemi smiling wearing maroon traditional cap and white attire with Nigerian flag background"
  },
  {
    name: "Mrs. Didi Esther Walson-Jack, OON, MNI, Head of the Civil Service of the Federation",
    imgSrc:image4,
    alt: "Portrait of Mrs. Didi Esther Walson-Jack with short hair and pearl necklace, dark green blouse, standing in front of Nigerian flag"
  },
  {
    name: "Mr. Olayemi Cardoso, Governor, Central Bank of Nigeria",
    imgSrc: image5,
    alt: "Formal portrait of council member with dark suit, white shirt and red tie, neutral gray background"
  },
  {
    name: "Mr Olawale Edun, Honourable Minister of Finance & Coordinating Minister of the Economy",
    imgSrc:image6,
    alt: "Formal portrait of council member wearing a traditional striped blue and green cap with a white background and Nigerian flag visible"
  },
  {
    name: "Festus Keyamo SAN, CON, FCIArb(UK), Honourable Minister of Aviation and Aerospace Development",
    imgSrc: image7,
    alt: "Portrait of council member wearing black hat and black outfit, neutral background with Nigerian flag"
  },
  {
    name: "Abubakar Kyari CON, Honourable Minister of Agriculture & Food Security",
    imgSrc: image8,
    alt: "Council member with grey beard wearing traditional green and white attire with matching green striped cap, Nigerian flag in background"
  },
];

function GoverningCouncil() {
  return (
    <section className="GoverningCouncil-container">
      <h2 className="GoverningCouncil-title">Governing Council</h2>
      <p className="GoverningCouncil-description">
        The Presidential Foreign Intervention Promotion Council operates under the guidance of its Governing Council, responsible for steering the agency's policies and strategic direction. The Council consists of government leaders and industry experts who ensure PFIPC's efforts align with Nigeria's economic goals.
      </p>
      <div className="GoverningCouncil-grid">
        {councilMembers.map((member, index) => (
          <div key={index} className="GoverningCouncil-card">
            <img
              src={member.imgSrc}
              alt={member.alt}
              className="GoverningCouncil-image"
              onError={(e) => {
                e.target.onerror = null;
                e.target.src = "https://storage.googleapis.com/workspace-0f70711f-8b4e-4d94-86f1-2a93ccde5887/image/d95dd04e-f98c-4416-bde9-c8b47e425ce9.png";
              }}
            />
            <div className="GoverningCouncil-captionBox">
              <p className="GoverningCouncil-caption">{member.name}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default GoverningCouncil;


