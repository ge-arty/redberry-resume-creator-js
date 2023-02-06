// Start page variables
const homeBtn = document.querySelector(".app__start--btn");
const homePage = document.querySelector(".app__start--page");
// Personal Page Variables
const personalBackBtn = document.querySelector(".app__personal--backbtn");
const appSection = document.querySelector(".app__working--section");
const personalInfoPage = document.querySelector(".app__personal--page");
//
const nameInput = document.querySelector(".app__personal--name--input");
const lastNameInput = document.querySelector(".app__personal--lastname--input");
const emailInput = document.querySelector(".app__input--email");
const mobileInput = document.querySelector(".app__input--mobile");
// Resume generator page Variables
const resumePage = document.querySelector(".app__resume--page");

// PersonalInfo Validation
function validateGeorgian(input) {
  let regExp = /^[ა-ჰ]+$/;
  return regExp.test(input);
}
nameInput.oninput = function () {
  validateGeorgian(nameInput.value) === true && nameInput.value.length >= 2
    ? nameInput.classList.add("app__input--green")
    : nameInput.classList.add("app__input--red");
  if (nameInput.value.length < 2) {
    nameInput.classList.remove("app__input--green");
    nameInput.classList.remove("app__input--red");
  }
};
lastNameInput.oninput = function () {
  validateGeorgian(nameInput.value) === true && nameInput.value.length >= 2
    ? nameInput.classList.add("app__input--green")
    : nameInput.classList.add("app__input--red");
  if (nameInput.value.length < 2) {
    nameInput.classList.remove("app__input--green");
    nameInput.classList.remove("app__input--red");
  }
};

// Button functions
homeBtn.addEventListener("click", function () {
  homePage.style.display = "none";
  appSection.style.display = "flex";
});
personalBackBtn.addEventListener("click", function () {
  homePage.style.display = "block";
  appSection.style.display = "none";
});
