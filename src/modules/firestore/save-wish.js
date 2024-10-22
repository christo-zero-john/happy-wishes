import { database } from "./connectFirestore";
import { doc, setDoc, arrayUnion } from "firebase/firestore";
import getAllWishes from "./get-all-wishes";

async function saveWish(newWish) {
  let pageId = "cecilia-mary-babu";
  console.log("Saving wish to firestore");
  let allWishesRef = doc(database, `wishing-pages/${pageId}`);
  
  try {
    await setDoc(allWishesRef, { 
      wishes: arrayUnion(newWish) 
    }, { merge: true });
    console.log("Successfully saved new wish to database");
  } catch (error) {
    console.error("Error saving new wish to database:", error);
  }
}

export default saveWish;
