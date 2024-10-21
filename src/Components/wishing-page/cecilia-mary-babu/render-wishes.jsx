import React from "react";
import WishItemcard from "./wish-item-card";
import getAllWishes from "../../../modules/localStore/get-all-wishes";

function RenderWishes(props) {
  let {renderProfilePic } = props;

  let wishes = getAllWishes();
  console.log(wishes);

  return wishes.map((wish, index) => {
    return (
      <div className="col-9 col-md-5 m-3 d-inline-block" key={index}>
        <WishItemcard renderProfilePic={renderProfilePic} wish={wish} />
      </div>
    );
  });
}

export default RenderWishes;
