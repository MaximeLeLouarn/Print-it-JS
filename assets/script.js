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
const dotsDiv = document.querySelector(".dots");

// Going through the array and put a loop
const sliderIndexTotal = slides.length;

let i = 0;

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
}

// The arrows behaviour on click
const sliderArrows = document.querySelectorAll(".arrow");

const arrowLeft = document.getElementById("arrowLeft");
arrowLeft.addEventListener("click", () => {
  [...slides][i].value === moveSlide(-1);
});
const arrowRight = document.getElementById("arrowRight");
arrowRight.addEventListener("click", () => {
  [...slides][i].value === moveSlide(1);
});

// Function to change the path of images links

function implementSlider() {
  let currentImage = slides[i]["image"];
  let currentTagLine = slides[i]["tagLine"];
  const imgSliderPath = "./assets/images/slideshow/";
  imgSlider.src = imgSliderPath + currentImage;
  imgSlider.alt = currentTagLine;
}

// Add bullets

function addTheDots() {
  let addTheElements = document.createElement("span");

  addTheElements.classList.add("dot");
  dotsDiv.appendchild(addTheElements);
}

// for (let i = 0; i < sliderIndexTotal; index++)
slides.forEach((bullet, j) => {
  addTheDots();
  if (j === i) {
    addTheElements.classList.add("dot_selected");
  } else {
    addTheElements.classList.remove("dot_selected");
  }
});
