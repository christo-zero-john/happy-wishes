import { boyPics, girlPics } from "./profile-pic-imports";

function renderBoyPics() {
  return boyPics;
}

function renderGirlPics() {
  return girlPics;
}

function renderProfilePic(src) {
  return <img src={src} alt="Profile" className="profile-pic" />;
}

export { renderBoyPics, renderGirlPics, renderProfilePic };
