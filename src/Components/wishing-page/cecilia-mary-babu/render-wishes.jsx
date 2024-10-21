import WishItemcard from "./wish-item-card";
import getAllWishes from "../../../modules/firestore/get-all-wishes";
import { useEffect, useState } from "react";

function RenderWishes(props) {
  let { renderProfilePic } = props;
  const [wishes, setWishes] = useState([]);

  useEffect(() => {
    async function fetchWishes() {
      let fetchedWishes = await getAllWishes();
      console.log(fetchedWishes);
      setWishes(fetchedWishes);
    }
    fetchWishes();
  },[]);

  return wishes.map((wish, index) => {
    return (
      <div className="col-9 col-md-5 m-3 d-inline-block" key={index}>
        <WishItemcard renderProfilePic={renderProfilePic} wish={wish} />
      </div>
    );
  });
}

export default RenderWishes;
