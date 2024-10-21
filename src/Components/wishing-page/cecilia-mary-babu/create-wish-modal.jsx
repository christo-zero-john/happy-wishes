function CreateWishModal(props) {
  let {
    wishData,
    updateWishText,
    updateWishCreator,
    renderProfilePic,
    renderBoyPics,
    renderGirlPics,
    updateProfilePic,
    setIsConfirmMode,
  } = props;

  return (
    <>
      <div className="modal-body">
        <textarea
          type="text"
          className="d-block col-11 mx-auto border border-2 m-2"
          placeholder="Type Your Wish"
          rows={8}
          value={wishData.text}
          onChange={(e) => updateWishText(e.target.value)}
        />
        <input
          type="text"
          className="d-block col-11 mx-auto border border-2"
          placeholder="Your Name"
          value={wishData.creator}
          onChange={(e) => updateWishCreator(e.target.value)}
        />
        <div className="border border-2 m-2 rounded">
          <div className="m-2 border-bottom border-2 w-fit px-3 mx-auto text-center">
            <p className="text-primary fs-5 w-fit d-inline">Choose Your Pick</p>
            {renderProfilePic(wishData.profilePic)}
          </div>
          <div className="">
            <p className="fw-100 m-2 text-success fs-5">Boys</p>
            {renderBoyPics(updateProfilePic)}
          </div>
          <div className="">
            <p className="fw-100 m-2 text-success fs-5">Girls</p>
            {renderGirlPics(updateProfilePic)}
          </div>
        </div>
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          data-bs-dismiss="modal"
        >
          Close
        </button>
        <button
          type="button"
          className="btn btn-success"
          onClick={() => setIsConfirmMode(true)}
        >
          Send Wish
        </button>
      </div>
    </>
  );
}

export default CreateWishModal;
