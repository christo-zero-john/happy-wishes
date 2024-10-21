let aos_effects = [
  "fade-up",
  "fade-down",
  "fade-right",
  "fade-left",
  "fade-up-right",
  "fade-up-left",
  "fade-down-right",
  "flip-left",
  "flip-right",
  "flip-up",
  "flip-down",
  "zoom-in",
  "zoom-in-up",
  "zoom-in-down",
  "zoom-in-left",
  "zoom-in-right",
  "zoom-out",
  "zoom-out-up",
  "zoom-out-down",
  "zoom-out-right",
  "zoom-out-left",
];

function getRandomAOSEffect() {
  let randomIndex = Math.floor(Math.random() * 21);
  console.log(randomIndex);
  return aos_effects[randomIndex];
}

export default getRandomAOSEffect;
