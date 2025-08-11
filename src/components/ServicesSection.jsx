// import React from 'react';
// import './ServicesSection.css';

// /**
//  * ServicesSection
//  * - Static data inside for now (icon, title, excerpt)
//  * - Responsive: 2 columns on desktop, stacked on smaller screens
//  * - Highlighted CTA card (yellow) sits in grid like reference
//  */
// const services = [
//   {
//     id: 1,
//     icon: 'wallet',
//     title: 'Forces de Ventes',
//     excerpt: 'Accompagner vos équipes commerciales pour convertir plus de prospects.',
//   },
//   {
//     id: 2,
//     icon: 'chart',
//     title: 'Marketing',
//     excerpt: 'Campagnes, automation et analytics pour accélérer la croissance.',
//   },
//   {
//     id: 3,
//     icon: 'customers',
//     title: 'Gestion commerciale',
//     excerpt: 'Piloter ventes, prix et facturation depuis une interface unifiée.',
//   },
//   {
//     id: 4,
//     icon: 'support',
//     title: 'Service Après-Vente',
//     excerpt: 'Gestion des tickets, SLA et satisfaction client intégrés.',
//   },
//   {
//     id: 5,
//     icon: 'insight',
//     title: "Aide à la décision",
//     excerpt: "Dashboards et KPIs pour orienter les décisions opérationnelles.",
//   },
//   // CTA card will be rendered separately to match design
// ];

// const Icon = ({ name }) => {
//   // small inline SVG icons - unobtrusive and easily themeable
//   switch (name) {
//     case 'wallet':
//       return (
//         <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden focusable="false">
//           <path fill="currentColor" d="M21 7H3c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h18V7zM21 5v-.5C21 3.12 19.88 2 18.5 2h-12C5.12 2 4 3.12 4 4.5V5h17z"/>
//         </svg>
//       );
//     case 'chart':
//       return (
//         <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden focusable="false">
//           <path fill="currentColor" d="M3 13h2v8H3v-8zM8 6h2v15H8V6zM13 10h2v11h-2V10zM18 2h2v19h-2V2z"/>
//         </svg>
//       );
//     case 'customers':
//       return (
//         <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden focusable="false">
//           <path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zM8 13c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zM16 13c-.29 0-.62.02-.97.05 1.16.84 1.97 1.96 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-6-3.5z"/>
//         </svg>
//       );
//     case 'support':
//       return (
//         <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden focusable="false">
//           <path fill="currentColor" d="M12 1C7.03 1 3 5.03 3 10v3H1v4h2v4h4v-4h10v4h4v-4h2v-4h-2v-3c0-4.97-4.03-9-9-9z"/>
//         </svg>
//       );
//     case 'insight':
//       return (
//         <svg width="28" height="28" viewBox="0 0 24 24" aria-hidden focusable="false">
//           <path fill="currentColor" d="M12 6a9 9 0 100 18 9 9 0 000-18zM11 11h2v6h-2v-6zM11 7h2v2h-2V7z"/>
//         </svg>
//       );
//     default:
//       return null;
//   }
// };

// const ServicesSection = () => {
//   return (
//     <section className="services-section" aria-labelledby="services-heading">
//       <div className="services-inner">
//         <div className="services-left">
//           <h3 id="services-heading" className="services-small">Gestion de la relation client</h3>
//           <p className="services-lead">
//             Avec une interface intuitive et connectée, nous proposons des modules complets couvrant les opérations de
//             marketing, forces de vente, gestion commerciale et suivi client.
//           </p>
//           <div className="services-stars" aria-hidden>
//             ★★★★★
//           </div>
//         </div>

//         <div className="services-grid" role="list">
//           {services.map((s) => (
//             <article key={s.id} className="service-card" role="listitem" tabIndex="0" aria-labelledby={`svc-${s.id}`}>
//               <div className="service-icon"><Icon name={s.icon} /></div>
//               <h4 id={`svc-${s.id}`} className="service-title">{s.title}</h4>
//               <p className="service-excerpt">{s.excerpt}</p>
//             </article>
//           ))}

//           {/* Highlighted CTA card */}
//           <article className="service-card cta-card" role="listitem" tabIndex="0" aria-label="Plus de détails">
//             <div className="cta-content">
//               <h4 className="cta-title">Lire plus de détails</h4>
//               <p className="cta-sub">Sur toutes les fonctionnalités de notre CRM</p>
//               <a href="#contact" className="cta-button" aria-label="Voir plus de détails">Voir plus de détails</a>
//             </div>
//           </article>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ServicesSection;


import React from 'react';
import './ServicesSection.css';

const services = [
  {
    id: 1,
    icon: 'wallet',
    title: 'Integrity',
    excerpt: 'We uphold the highest ethical standards in all investment dealings.',
  },
  {
    id: 2,
    icon: 'chart',
    title: 'Transparency',
    excerpt: 'Providing clear processes and open communication with all stakeholders.',
  },
  {
    id: 3,
    icon: 'customers',
    title: 'Collaboration',
    excerpt: 'Working together with local and international partners for mutual growth.',
  },
  {
    id: 4,
    icon: 'support',
    title: 'Service Excellence',
    excerpt: 'Delivering efficient, timely, and reliable support to investors.',
  },
  {
    id: 5,
    icon: 'insight',
    title: 'Innovation',
    excerpt: 'Encouraging creative solutions to attract and sustain investments.',
  },
];

const Icon = ({ name }) => {
  switch (name) {
    case 'wallet':
      return <svg width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M21 7H3c-1.1 0-2 .9-2 2v7c0 1.1.9 2 2 2h18V7zM21 5v-.5C21 3.12 19.88 2 18.5 2h-12C5.12 2 4 3.12 4 4.5V5h17z"/></svg>;
    case 'chart':
      return <svg width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M3 13h2v8H3v-8zM8 6h2v15H8V6zM13 10h2v11h-2V10zM18 2h2v19h-2V2z"/></svg>;
    case 'customers':
      return <svg width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M16 11c1.66 0 2.99-1.34 2.99-3S17.66 5 16 5s-3 1.34-3 3 1.34 3 3 3zM8 11c1.66 0 2.99-1.34 2.99-3S9.66 5 8 5 5 6.34 5 8s1.34 3 3 3zM8 13c-2.33 0-7 1.17-7 3.5V19h14v-2.5C15 14.17 10.33 13 8 13zM16 13c-.29 0-.62.02-.97.05 1.16.84 1.97 1.96 1.97 3.45V19h6v-2.5c0-2.33-4.67-3.5-6-3.5z"/></svg>;
    case 'support':
      return <svg width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M12 1C7.03 1 3 5.03 3 10v3H1v4h2v4h4v-4h10v4h4v-4h2v-4h-2v-3c0-4.97-4.03-9-9-9z"/></svg>;
    case 'insight':
      return <svg width="28" height="28" viewBox="0 0 24 24"><path fill="currentColor" d="M12 6a9 9 0 100 18 9 9 0 000-18zM11 11h2v6h-2v-6zM11 7h2v2h-2V7z"/></svg>;
    default:
      return null;
  }
};

const ServicesSection = () => {
  return (
    <section className="services-section" aria-labelledby="services-heading">
      <div className="services-inner">
        <div className="services-left">
          <h3 id="services-heading" className="services-small">
            About Us
          </h3>
          <p className="services-lead">
            Welcome to the Presidential Foreign Investment Promotion Council (PFIPC). 
            The PFIPC is dedicated to promoting, facilitating, and developing foreign 
            investments in Nigeria. With a mandate to create a secure and transparent 
            investment environment, PFIPC ensures that foreign investors enjoy the same 
            rights and protections as local businesses under the Foreign Investment Promotion Act (FIPA).
          </p>
          <div className="services-stars" aria-hidden>
            ★★★★★
          </div>
          <button className="aboutus-button" aria-label="Learn more about PFIPC">
                Learn More
          </button>
        </div>

        <div className="services-grid" role="list">
          {services.map((s) => (
            <article 
              key={s.id} 
              className="service-card" 
              role="listitem" 
              tabIndex="0" 
              aria-labelledby={`svc-${s.id}`}
            >
              <div className="service-icon"><Icon name={s.icon} /></div>
              <h4 id={`svc-${s.id}`} className="service-title">{s.title}</h4>
              <p className="service-excerpt">{s.excerpt}</p>
            </article>
          ))}

          {/* Highlighted CTA card */}
          <article className="service-card cta-card" role="listitem" tabIndex="0">
            <div className="cta-content">
              <h4 className="cta-title">Learn More</h4>
              <p className="cta-sub">Discover more about our core values and mission</p>
              <button className="cta-button" aria-label="Learn more about PFIPC">
                Learn More
              </button>
            </div>
          </article>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

