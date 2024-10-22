import "../../../styles/wish-item-card.css";
import getRandomAOSEffect from "../../../modules/animate-on-scroll/get-random-effect";
import aosInit from "../../../modules/animate-on-scroll/aos-init";
import { useEffect } from "react";

function WishItemcard(props) {
  let { renderProfilePic, wish } = props;
  useEffect(() => {
    aosInit();
  }, []);

  return (
    <div className="wish-item-card h-100">
      <div className="wish-item-card-header">
        {renderProfilePic(wish.profilePic)}
        <h2 className="wish-item-card-title">{wish.creator}</h2>
      </div>
      <div className="wish-item-card-content">
        <p className="wish-item-card-text">{wish.text}</p>
      </div>
    </div>
  );
}

export default WishItemcard;
