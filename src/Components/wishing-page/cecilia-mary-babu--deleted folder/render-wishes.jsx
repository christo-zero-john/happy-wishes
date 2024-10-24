import React, { useEffect, useState } from "react";
import WishItemcard from "./wish-item-card";
import getAllWishes from "../../../modules/firestore/get-all-wishes";

function RenderWishes({ renderProfilePic, setMessage }) {
  const [wishes, setWishes] = useState([]);

  useEffect(() => {
    async function fetchWishes() {
      let fetchedWishes = await getAllWishes();
      setWishes(fetchedWishes);
    }
    fetchWishes().then(() => {
      console.log("Wishes Fetched successfully");
      setMessage("Connected and Everything Perfect.");
      setTimeout(() => {
        document.getElementById("homePageLoader")?.remove();
      }, 1000);
    });
  }, [setMessage]);

  return (
    <div className="row">
      {wishes.map((wish, index) => (
        <div key={index} className="col-11 col-md-5 m-2 mx-auto">
          <WishItemcard renderProfilePic={renderProfilePic} wish={wish} />
        </div>
      ))}
    </div>
  );
}

export default RenderWishes;
