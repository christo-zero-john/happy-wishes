import saveWishingPages from "./save-wishing-pages";

function addNewWishingPage(page) {
  let storedPages = JSON.parse(localStorage.getItem("wishing-pages"));
  console.log("Got storedpages: ", storedPages);

  storedPages.push(page);
  saveWishingPages(storedPages);
}

export default addNewWishingPage;
