import { database } from "./connectFirestore";
import { collection, doc, addDoc, getDoc, setDoc } from "firebase/firestore";

async function saveWish(newWish) {
  let pageId = "cecilia-mary-babu";
  console.log("Saving wish to firestore");
  let wishes = await getAllWishes(pageId);
  let allWishesRef = doc(database, `wishing-pages/${pageId}`);
  if (wishes) {
    console.log("Successfully fetched all wishes from firestore: ", wishes);
    wishes.push(newWish);
    try {
      await setDoc(allWishesRef, { wishes: wishes });
      console.log("Sucsessfully saved new wish to database");
    } catch (error) {
      console.log("Error saving new wish to database");
    }
  } else {
    try {
      await setDoc(allWishesRef, { wishes: [newWish] });
      console.log("Sucsessfully saved new wish to database");
    } catch (error) {
      console.log("Error saving new wish to database");
    }
  }
}

async function getAllWishes(pageId) {
  let allWishesRef = doc(database, `wishing-pages/${pageId}`);
  let allWishesSnapshot = await getDoc(allWishesRef);
  return allWishesSnapshot.data().wishes;
}

export default saveWish;
