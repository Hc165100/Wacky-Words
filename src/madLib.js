const stories = ["Movie Pitch", "A Pirate's Life", "Date Night"];
const storyTitle = document.getElementById("storyTitle");

const leftArrow = document.getElementById("leftArrow");
const rightArrow = document.getElementById("rightArrow");
const selectBtn = document.getElementById("selectBtn");

const movieContainer = document.getElementById("movieContainer");
const pirateContainer = document.getElementById("pirateContainer");
const dateContainer = document.getElementById("dateContainer");
const titlePage = document.getElementById("titlePage");

const storyContainers = [movieContainer, pirateContainer, dateContainer];

let i = 0;

function rightBtnSelect() {
  if (i < 2) {
    i++;
    storyTitle.innerHTML = stories[i];
  } else {
    i = 0;
    storyTitle.innerHTML = stories[i];
  }
}

function leftBtnSelect() {
  if (i > 0) {
    i--;
    storyTitle.innerHTML = stories[i];
  } else {
    i = 2;
    storyTitle.innerHTML = stories[i];
  }
}

function storySelect() {
  titlePage.style.opacity = 0;
  titlePage.style.zIndex = 0;
  storyContainers[i].style.opacity = 1;
  storyContainers[i].style.zIndex = 5;
}

rightArrow.addEventListener("click", rightBtnSelect);
leftArrow.addEventListener("click", leftBtnSelect);
selectBtn.addEventListener("click", storySelect);

//Coding for Move Pitch Story starts here

const movieinput7 = document.getElementById("movieinput7");
const movieinput8 = document.getElementById("movieinput8");

const moviearticleChange7 = document.getElementById("moviearticleChange7");
const moviearticleChange8 = document.getElementById("moviearticleChange8");

const vowels = ["a", "e", "i", "o", "u"];

let a = 0;
function movieBlankChange() {
  for (a = 0; a < 19; a++) {
    $("span.movieBlank")[a].innerHTML = $("input.movieInput")[a].value;
  }

  let firstArticleSub = movieinput7.value.split("")[0];
  let secondArticleSub = movieinput8.value.split("")[0];

  vowels.includes(firstArticleSub) === true
    ? (moviearticleChange7.innerHTML = "an")
    : (moviearticleChange7.innerHTML = "a");

  vowels.includes(secondArticleSub) === true
    ? (moviearticleChange8.innerHTML = "an")
    : (moviearticleChange8.innerHTML = "a");

  document.getElementById("movieStory").style.opacity = 1;
}

let movieChangeBtn = document.getElementById("movieChangeBtn");
movieChangeBtn.addEventListener("click", movieBlankChange);

//Coding for Pirate Story starts here

let b = 0;
function pirateBlankChange() {
  document.getElementById("pirateStory").style.opacity = 1;

  for (b = 0; b < 15; b++) {
    $("span.pirateBlank")[b].innerHTML = $("input.pirateInput")[b].value;
  }
}

let pirateChangeBtn = document.getElementById("pirateChangeBtn");
pirateChangeBtn.addEventListener("click", pirateBlankChange);

//Coding for Date Story starts here

let c = 0;
function dateBlankChange() {
  document.getElementById("dateStory").style.opacity = 1;

  for (c = 0; c < 14; c++) {
    $("span.dateBlank")[c].innerHTML = $("input.dateInput")[c].value;
  }
}

let dateChangeBtn = document.getElementById("dateChangeBtn");
dateChangeBtn.addEventListener("click", dateBlankChange);

//Coding for general buttons

function homeReturn() {
  storyContainers[i].style.opacity = 0;
  storyContainers[i].style.zIndex = 0;
  $("div.storyDiv")[i].style.opacity = 0;
  $("form")[i].reset();
  titlePage.style.opacity = 1;
  titlePage.style.zIndex = 5;
}

function clear() {
  $("div.storyDiv")[i].style.opacity = 0;
  $("form")[i].reset();
}

$("button.returnBtn").click(homeReturn);

$("button.clearBtn").click(clear);
