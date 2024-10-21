import WishItemcard from "./wish-item-card";
import getAllWishes from "../../../modules/firestore/get-all-wishes";
import { useEffect, useState } from "react";
import { CSSTransition, TransitionGroup } from "react-transition-group";

function RenderWishes(props) {
  let { renderProfilePic, setMessage } = props;
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
    <TransitionGroup className="row">
      {wishes.map((wish, index) => (
        <CSSTransition
          key={wish.id || index}
          timeout={500}
          classNames="wish-item"
        >
          <div className="col-11 col-md-5 m-2 mx-auto">
            <WishItemcard renderProfilePic={renderProfilePic} wish={wish} />
          </div>
        </CSSTransition>
      ))}
    </TransitionGroup>
  );
}

export default RenderWishes;
