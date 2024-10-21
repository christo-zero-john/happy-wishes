function WishItemcard(props) {
  let { renderProfilePic, wish } = props;

  return (
    <div className="card ">
      <div className="card-header">
        {renderProfilePic(wish.profilePic)}
        <p className="d-inline mx-3">{wish.creator}</p>
      </div>
      <div className="card-body">
        <p className="card-text">{wish.text}</p>
      </div>
    </div>
  );
}

export default WishItemcard;
