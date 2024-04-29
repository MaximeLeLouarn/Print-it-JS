const slides = [
  {
    image: "slide1.jpg",
    tagLine: "Impressions tous formats <span>en boutique et en ligne</span>",
  },
  {
    image: "slide2.jpg",
    tagLine:
      "Tirages haute définition grand format <span>pour vos bureaux et events</span>",
  },
  {
    image: "slide3.jpg",
    tagLine: "Grand choix de couleurs <span>de CMJN aux pantones</span>",
  },
  {
    image: "slide4.png",
    tagLine: "Autocollants <span>avec découpe laser sur mesure</span>",
  },
];

// Create listeners on the different Elements

// Get the Image div and the dots div
const imgSlider = document.getElementById("bannerSliderImg");
let tagLine = document.getElementById("tagLine");
const dotsDiv = document.querySelector(".dots");

// Setting up the slides array and i count
const sliderIndexTotal = slides.length;

let i = 0;

let allTheDots = [];

// Add the dots to the dot div

for (let k = 0; k < sliderIndexTotal; k++) {
  let addTheElements = document.createElement("span");

  addTheElements.classList.add("dot");
  dotsDiv.appendChild(addTheElements);
  allTheDots = document.querySelectorAll(".dot");
  if (k === 0) {
    addTheElements.classList.add("dot_selected");
  }
}

//  Function that acts as a loop
function moveSlide(move) {
  i = i + move;
  if (i > sliderIndexTotal - 1) {
    i = 0;
  }
  if (i < 0) {
    i = sliderIndexTotal - 1;
  }
  console.log(i);
  implementSlider();
  selectedDot();
}

// The arrows behaviour on click

const arrowLeft = document.getElementById("arrowLeft");
arrowLeft.addEventListener("click", () => {
  i === moveSlide(-1);
});
const arrowRight = document.getElementById("arrowRight");
arrowRight.addEventListener("click", () => {
  i === moveSlide(1);
});

// Function to change the path of images links

function implementSlider() {
  let currentImage = slides[i]["image"];
  let currentTagLine = slides[i]["tagLine"];
  const imgSliderPath = "./assets/images/slideshow/";
  imgSlider.src = imgSliderPath + currentImage;
  tagLine.innerHTML = currentTagLine;
}

// Function to select the current dot

function selectedDot() {
  allTheDots.forEach((element) => {
    element.classList.remove("dot_selected");
  });
  allTheDots[i].classList.add("dot_selected");
}
