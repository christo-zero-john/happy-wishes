function saveWishingPages(pages) {
  localStorage.setItem("wishing-pages", JSON.stringify(pages));
  console.log("Saved wishing pages successfully");
}

export default saveWishingPages;
