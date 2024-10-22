import React from "react";
import "../../../styles/wish-item-card.css";

function WishItemcard(props) {
  let { renderProfilePic, wish } = props;

  return (
    <div className="wish-item-card h-100">
      <div className="wish-item-card-header">
        <img src={wish.profilePic} alt="Profile" className="profile-pic" />
        <h2 className="wish-item-card-title">{wish.creator}</h2>
      </div>
      <div className="wish-item-card-content">
        <p className="wish-item-card-text">{wish.text}</p>
      </div>
    </div>
  );
}

export default WishItemcard;
