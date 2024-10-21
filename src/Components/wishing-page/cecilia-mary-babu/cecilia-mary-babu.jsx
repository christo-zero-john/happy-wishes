import { useEffect, useState } from "react";
import "../../../styles/cecilia-mary-babu.css";
import saveWish from "../../../modules/firestore/save-wish.js";

import {
  renderBoyPics,
  renderGirlPics,
  renderProfilePic,
} from "./render-pics.jsx";

import ConfirmModal from "./confirm-modal.jsx";
import CreateWishModal from "./create-wish-modal.jsx";
import RenderWishes from "./render-wishes.jsx";
import { database } from "../../../modules/firestore/connectFirestore.js";
import HomePageLoading from "../../loading/home-page-loading.jsx";
import getRandomBgImg from "./background-image-imports.js";

function CeciliaMaryBabu() {
  setTimeout(() => {
    setMessage(
      "Connection Timeout. Check your network Connection or contact Support"
    );
  }, 20000);

  const [wishData, setWishData] = useState({
    text: "",
    creator: "",
    profilePic: "",
  });
  const [isConfirmMode, setIsConfirmMode] = useState(false);
  const [message, setMessage] = useState("Connecting");
  const [loading, setLoading] = useState(true);
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const bgImg = getRandomBgImg();
    setBackgroundImage(bgImg);
  }, []);

  useEffect(() => {
    // console.log("Data updated: ", wishData);
    if (database) {
      console.log("Successfully created database instance.");
    } else {
      console.log("Error connecting database");
    }
  });

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

  async function saveAndPostWish() {
    await saveWish(wishData).then(() => window.location.reload());
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
    <div className="bg-dark text-light">
      <div id="homePageLoader">
        <HomePageLoading message={message} />
      </div>
      <header className="birthday-header">
        <div className="header-content">
          <h1 className="birthday-title">Happy Birthday Cecilia!</h1>
          <p className="birthday-subtitle">Celebrate with love and joy</p>
          <div className="birthday-decorations">
            <span className="decoration">🎉</span>
            <span className="decoration">🎂</span>
            <span className="decoration">🎈</span>
            <span className="decoration">🎁</span>
            <span className="decoration">🥳</span>
          </div>
        </div>
      </header>
      <div className="body">
        <div
          className="wishes no-scrollbar overflow-auto no-scrollbar"
          style={{ backgroundImage: `url(${backgroundImage})` }}
          id="wishes"
        >
          <RenderWishes
            renderProfilePic={renderProfilePic}
            setMessage={setMessage}
          />
        </div>
      </div>

      <button
        className="btn btn-success position-fixed bottom-0 end-0 m-3"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#wishModal"
        style={{ zIndex: 3 }}
      >
        Wish Em!
      </button>

      {renderModal()}
    </div>
  );
}

export default CeciliaMaryBabu;
