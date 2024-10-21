function getAllWishes() {
  let allWishes = localStorage.getItem("wishes");
  return JSON.parse(allWishes);
}

export default getAllWishes;
