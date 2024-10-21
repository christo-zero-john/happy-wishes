import { database } from "./connectFirestore";
import { doc, getDoc } from "firebase/firestore";

async function getAllWishes() {
  let pageId = "cecilia-mary-babu";
  let allWishesRef = doc(database, `wishing-pages/${pageId}`);
  let allWishesSnapshot = await getDoc(allWishesRef);
  return allWishesSnapshot.data().wishes;
}

export default getAllWishes;
