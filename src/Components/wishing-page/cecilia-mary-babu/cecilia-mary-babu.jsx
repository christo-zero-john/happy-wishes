import React, { useEffect, useState, useRef } from "react";
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
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";

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
  const [backgroundImage, setBackgroundImage] = useState("");

  useEffect(() => {
    const bgImg = getRandomBgImg();
    setBackgroundImage(bgImg);
  }, []);

  useEffect(() => {
    if (database) {
      console.log("Successfully created database instance.");
    } else {
      console.log("Error connecting database");
    }
  });

  useEffect(() => {
    // Initialize Bootstrap modals
    const initializeModals = () => {
      if (typeof window !== "undefined" && window.bootstrap) {
        const modals = document.querySelectorAll(".modal");
        modals.forEach((modalEl) => {
          new window.bootstrap.Modal(modalEl);
        });
      }
    };

    // Wait for Bootstrap to be loaded
    if (document.readyState === "complete") {
      initializeModals();
    } else {
      window.addEventListener("load", initializeModals);
    }

    return () => {
      window.removeEventListener("load", initializeModals);
    };
  }, []);

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
      <div className="content-container">
        <header className="birthday-header">
          <div className="header-content">
            <h1 className="birthday-title" tabIndex="0">
              Happy 19th Cecilia!
            </h1>
            <p className="birthday-subtitle" tabIndex="0">
              October 23 | Celebrate this joyous day with your friends and family!
            </p>
            <div className="birthday-decorations" aria-hidden="true">
              {["🎉", "🎂", "🎈", "🎁", "🥳"].map((emoji, index) => (
                <span
                  key={index}
                  className="decoration"
                  role="img"
                  aria-label={`Decoration ${index + 1}`}
                >
                  {emoji}
                </span>
              ))}
            </div>
          </div>
        </header>
        <div
          className="wishes no-scrollbar overflow-auto"
          style={{
            backgroundImage: `url(${backgroundImage})`,
            backgroundAttachment: 'fixed',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
          }}
          id="wishes"
        >
          <RenderWishes
            renderProfilePic={renderProfilePic}
            setMessage={setMessage}
          />
        </div>
      </div>
      <button
        className="wish-button"
        type="button"
        data-bs-toggle="modal"
        data-bs-target="#wishModal"
        aria-label="Add a wish"
      >
        <span className="wish-button-text">Wish Her!</span>
        <span className="wish-button-icon">🎉</span>
      </button>
      {renderModal()}
    </div>
  );
}

export default CeciliaMaryBabu;
