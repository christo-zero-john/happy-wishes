import React, { useEffect, useState } from "react";
import { FixedSizeList as List } from "react-window";
import AutoSizer from "react-virtualized-auto-sizer";
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

  const Row = ({ index, style }) => (
    <div style={style}>
      <WishItemcard renderProfilePic={renderProfilePic} wish={wishes[index]} />
    </div>
  );

  return (
    <AutoSizer>
      {({ height, width }) => (
        <List
          height={height}
          itemCount={wishes.length}
          itemSize={200} // Adjust this value based on your card height
          width={width}
        >
          {Row}
        </List>
      )}
    </AutoSizer>
  );
}

export default RenderWishes;
