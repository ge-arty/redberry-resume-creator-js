// Start page variables
const homeBtn = document.querySelector(".app__start--btn");
const homePage = document.querySelector(".app__start--page");
// Personal Page Variables
const appSection = document.querySelector(".app__working--section");
const resumePage = document.querySelector(".app__resume--page");
const personalInfoPage = document.querySelector(".app__personal--page");

homeBtn.addEventListener("click", function () {
  homePage.style.display = "none";
  appSection.style.display = "flex";
});
