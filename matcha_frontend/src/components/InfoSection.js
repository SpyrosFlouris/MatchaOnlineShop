import React from 'react';

const InfoSection = ({ title, children }) => {
  return (
    <section className="info-section">
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default InfoSection;