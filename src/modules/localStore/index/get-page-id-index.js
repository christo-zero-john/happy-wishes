import saveIndex from "./save-index";

function getPageIdIndex() {
  try {
    let index = JSON.parse(localStorage.getItem("index"));

    console.log("Page ID Index fetched successfully: ", index);
    return index["page-id"];
  } catch (error) {
    console.log("Failed to fetch page id index: ", error);
  }
}

export default getPageIdIndex;
