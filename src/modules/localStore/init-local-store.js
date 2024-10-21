const index = {
  "page-id": [],
};

const wishing_page = [];

var sampleWishingpageObject = {
  name: "name of wish target",
  id: "Page Id",
  owner: "user-id",
  integrations: ["text", "imogy", "image", "GIF", "music"],
  published: false,
  occassion: "",
};

let wishes = [];

function initLocalStorage() {
  console.log("Initializing localstorage setting ");

  if (!localStorage.getItem("index")) {
    console.log("index");
    localStorage.setItem("index", JSON.stringify(index));
  }

  if (!localStorage.getItem("wishing-pages")) {
    console.log("wishing-pages");
    localStorage.setItem("wishing-pages", JSON.stringify(wishing_page));
  }

  if (!localStorage.getItem("wishes")) {
    console.log("wishes");
    localStorage.setItem("wishes", JSON.stringify(wishes));
  }
}

export default initLocalStorage;
