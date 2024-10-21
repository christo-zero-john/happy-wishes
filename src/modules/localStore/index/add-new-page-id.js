import saveIndex from "./save-index";

function addNewpageId(pageId) {
  console.log(" updating Page ID index with new id: ", pageId);

  let index = JSON.parse(localStorage.getItem("index"));
  let pageIdIndex = index["page-id"];
  pageIdIndex.push(pageId);
  index["page-id"] = pageIdIndex;

  saveIndex(index);

  console.log("Page ID index updated successfully with new data");
}

export default addNewpageId;
