function getMyWishingPages() {
  return JSON.parse(localStorage.getItem("wishing-pages"));
}

export default getMyWishingPages;
