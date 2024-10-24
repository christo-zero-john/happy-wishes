import React from "react";
import WishItemcard from "./wish-item-card";

function ConfirmModal(props) {
  let { renderProfilePic, wishData, setIsConfirmMode, saveAndPostWish } = props;
  return (
    <>
      <div className="modal-body">
        Your Post will look like this after posting
        <WishItemcard renderProfilePic={renderProfilePic} wish={wishData} />
      </div>
      <div className="modal-footer">
        <button
          type="button"
          className="btn btn-secondary"
          onClick={() => setIsConfirmMode(false)}
        >
          Edit
        </button>
        <button
          type="button"
          className="btn btn-primary"
          onClick={saveAndPostWish}
        >
          Save and post
        </button>
      </div>
    </>
  );
}

export default ConfirmModal;
