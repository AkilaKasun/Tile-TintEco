import React from 'react';
import '../Crads/Badges.css'; // Make sure to create this CSS file and import it

const Badges = ({ imageUrl, text }) => {
  return (
    <div className="badge">
      <img src={imageUrl} alt={text} className="badge-image" />
      <span className="badge-text">{text}</span>
    </div>
  );
};

export default Badges;
