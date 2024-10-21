import "../../../styles/wish-item-card.css";

function WishItemcard(props) {
  let { renderProfilePic, wish } = props;

  return (
    <div className="wish-item-card">
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
