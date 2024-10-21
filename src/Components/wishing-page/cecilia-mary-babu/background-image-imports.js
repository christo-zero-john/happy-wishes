import bgImg1 from "../../../assets/img/background-images/1.avif";
import bgImg2 from "../../../assets/img/background-images/2.avif";
import bgImg3 from "../../../assets/img/background-images/3.avif";
import bgImg4 from "../../../assets/img/background-images/4.avif";
import bgImg5 from "../../../assets/img/background-images/5.avif";
import bgImg6 from "../../../assets/img/background-images/6.avif";
import bgImg7 from "../../../assets/img/background-images/7.avif";
import bgImg8 from "../../../assets/img/background-images/8.avif";
import bgImg9 from "../../../assets/img/background-images/9.avif";
import bgImg10 from "../../../assets/img/background-images/10.avif";
import bgImg11 from "../../../assets/img/background-images/11.avif";
import bgImg12 from "../../../assets/img/background-images/12.avif";
import bgImg13 from "../../../assets/img/background-images/13.avif";
import bgImg14 from "../../../assets/img/background-images/14.avif";
import bgImg15 from "../../../assets/img/background-images/15.avif";

let bgImgs = [
  bgImg1,
  bgImg2,
  bgImg3,
  bgImg4,
  bgImg5,
  bgImg6,
  bgImg7,
  bgImg8,
  bgImg9,
  bgImg10,
  bgImg11,
  bgImg12,
  bgImg13,
  bgImg14,
  bgImg15,
];

function getRandomBgImg() {
  let randomIndex = Math.floor(Math.random() * 10) % 4;
  console.log(randomIndex);
  return bgImgs[randomIndex];
}

export default getRandomBgImg;
