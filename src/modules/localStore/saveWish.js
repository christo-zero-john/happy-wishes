function saveWish(newWish) {
  let wishes = JSON.parse(localStorage.getItem("wishes"));
  wishes.push(newWish);
  
  localStorage.setItem("wishes", JSON.stringify(wishes));
}

export default saveWish;
