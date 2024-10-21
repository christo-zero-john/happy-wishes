import { boyPics, girlPics } from "./profile-pic-imports";

function renderBoyPics(updateProfilePic) {
  return boyPics.map((pic, index) => {
    return (
      <img
        className="col-1 m-2 border rounded"
        key={index}
        src={pic}
        alt="This will be your profile picture"
        onClick={() => {
          updateProfilePic("boy," + index);
        }}
      />
    );
  });
}

function renderGirlPics(updateProfilePic) {
  return girlPics.map((pic, index) => {
    return (
      <img
        className="col-1 m-2 border rounded"
        key={index}
        src={pic}
        alt="This will be your profile picture"
        onClick={() => {
          updateProfilePic("girl," + index);
        }}
      />
    );
  });
}

function renderProfilePic(picId) {
  if (picId !== "") {
    let parts = picId.split(",");
    if (parts[0] === "boy") {
      console.log("Boy Pic Found");
      let index = +parts[1];
      return (
        <img
          src={boyPics[index]}
          alt="Select one picture from below"
          className=" d-inline col-1"
        />
      );
    } else if (parts[0] === "girl") {
      console.log("Girl Pic Found");
      let index = +parts[1];
      return (
        <img
          src={girlPics[index]}
          alt="Select one picture from below"
          className=" d-inline col-1"
        />
      );
    } else {
      console.log("Neither girl nor boy found. Ultimate error detected");
      return (
        <p className="text-danger small m-3 d-inline">
          Choose a Picture from below
        </p>
      );
    }
  } else {
    console.log(
      "Neither girl nor boy found. Ultimate error detected; No splitting performed"
    );
    return (
      <p className="text-danger small m-3 d-inline">
        Choose a Picture from below
      </p>
    );
  }
}

export { renderBoyPics, renderGirlPics, renderProfilePic };
