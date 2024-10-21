import { useEffect, useState } from "react";
import "../../../styles/cecilia-mary-babu.css";
import saveWish from "../../../modules/localStore/saveWish";

import { boyPics, girlPics } from "./profile-pic-imports";
import {
  renderBoyPics,
  renderGirlPics,
  renderProfilePic,
} from "./render-pics.jsx";
import ConfirmModal from "./confirm-modal.jsx";
import CreateWishModal from "./create-wish-modal.jsx";
import RenderWishes from "./render-wishes.jsx";

function CeciliaMaryBabu() {
  const [wishData, setWishData] = useState({
    text: "",
    creator: "",
    profilePic: "",
  });
  const [isConfirmMode, setIsConfirmMode] = useState(false);

  useEffect(() => {
    console.log("Data updated: ", wishData);
  }, [wishData]);

  useEffect(() => {
    // Initialize Bootstrap modals
    const modals = document.querySelectorAll(".modal");
    modals.forEach((modalEl) => {
      new window.bootstrap.Modal(modalEl);
    });
  }, []);

  let emogy = ["🎉", "🎊", "💃", "🪩", "🎂"];

  function getRandomImogy() {
    let randomIndex = Math.floor(Math.random() * 10) % 4;
    console.log(randomIndex);
    return emogy[randomIndex];
  }

  function updateProfilePic(src) {
    setWishData({ ...wishData, profilePic: src });
  }

  function updateWishText(inputWish) {
    setWishData({ ...wishData, text: inputWish });
  }

  function updateWishCreator(creatorname) {
    setWishData({ ...wishData, creator: creatorname });
  }

  function saveAndPostWish() {
    saveWish(wishData);
    console.log("Wish posted:", wishData);
    window.location.reload();
  }

  function renderModalContent() {
    if (isConfirmMode) {
      return (
        <ConfirmModal
          renderProfilePic={renderProfilePic}
          wishData={wishData}
          setIsConfirmMode={setIsConfirmMode}
          saveAndPostWish={saveAndPostWish}
        />
      );
    } else {
      return (
        <CreateWishModal
          wishData={wishData}
          updateWishText={updateWishText}
          updateWishCreator={updateWishCreator}
          renderProfilePic={renderProfilePic}
          renderBoyPics={renderBoyPics}
          renderGirlPics={renderGirlPics}
          updateProfilePic={updateProfilePic}
          setIsConfirmMode={setIsConfirmMode}
        />
      );
    }
  }

  function renderModal() {
    return (
      <div
        className="modal fade"
        id="wishModal"
        tabIndex="-1"
        aria-labelledby="wishModalLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="wishModalLabel">
                {isConfirmMode ? "Confirm Post" : "Wish Cecilia Happy Birthday"}
              </h5>
              <button
                type="button"
                className="btn-close"
                data-bs-dismiss="modal"
                aria-label="Close"
              ></button>
            </div>
            {renderModalContent()}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="">
      <div className="body">
        <div className="header mx-auto text-center">
          <p className="imogy text-center">{getRandomImogy()}</p>
        </div>
        <div
          className="wishes no-scrollbar overflow-auto no-scrollbar"
          id="wishes"
        >
          <RenderWishes
            renderProfilePic={renderProfilePic}
          />
        </div>
      </div>

      <button
        className="btn btn-success position-fixed bottom-0 end-0 m-3"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#wishModal"
      >
        Wish Em!
      </button>

      {renderModal()}
    </div>
  );
}

export default CeciliaMaryBabu;
