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
const fullNameResume = document.querySelector(".app__resume--fullname");

// PersonalInfo Validation
function validateGeorgian(input) {
  let regExp = /^[ა-ჰ]+$/;
  return regExp.test(input);
}
function isValidEmail(email) {
  var emailRegex = /^[a-zA-Z0-9._%+-]+@redberry\.ge$/;
  return emailRegex.test(email);
}
function validateGeorgianMobile(mobile) {
  var mobileRegex = /^(\+995)\d{9}$/;
  return mobileRegex.test(mobile);
}
function fullName(string1, string2) {
  fullNameResume.innerHTML = string1 + " " + string2;
}
nameInput.addEventListener("keyup", function () {
  fullName(nameInput.value, lastNameInput.value);
  fullNameResume.innerHTML = nameInput.value;
  if (validateGeorgian(nameInput.value) && nameInput.value.length >= 2) {
    nameInput.classList.add("app__input--green");
    nameInput.classList.remove("app__input--red");
  } else if (!validateGeorgian(nameInput.value) && nameInput.value.length > 0) {
    nameInput.classList.add("app__input--red");
    nameInput.classList.remove("app__input--green");
  } else if (nameInput.value.trim() === "") {
    nameInput.classList.remove("app__input--green");
    nameInput.classList.remove("app__input--red");
  }
});
lastNameInput.addEventListener("keyup", function () {
  fullName(nameInput.value, lastNameInput.value);
  if (
    validateGeorgian(lastNameInput.value) &&
    lastNameInput.value.length >= 2
  ) {
    lastNameInput.classList.add("app__input--green");
    lastNameInput.classList.remove("app__input--red");
  } else if (
    !validateGeorgian(lastNameInput.value) &&
    lastNameInput.value.length > 0
  ) {
    lastNameInput.classList.add("app__input--red");
    lastNameInput.classList.remove("app__input--green");
  } else if (lastNameInput.value.trim() === "") {
    lastNameInput.classList.remove("app__input--green");
    lastNameInput.classList.remove("app__input--red");
  }
});
emailInput.addEventListener("keyup", function () {
  if (emailInput.value.trim() === "") {
    emailInput.classList.remove("app__input--green");
    emailInput.classList.remove("app__input--red");
  } else if (isValidEmail(emailInput.value)) {
    emailInput.classList.add("app__input--green");
    emailInput.classList.remove("app__input--red");
  } else {
    emailInput.classList.remove("app__input--green");
    emailInput.classList.add("app__input--red");
  }
});
mobileInput.addEventListener("keyup", function () {
  if (validateGeorgianMobile(mobileInput.value)) {
    mobileInput.classList.add("app__input--green");
    mobileInput.classList.remove("app__input--red");
  } else if (
    !validateGeorgianMobile(mobileInput.value) &&
    mobileInput.value.length > 0
  ) {
    mobileInput.classList.remove("app__input--green");
    mobileInput.classList.add("app__input--red");
  } else if (mobileInput.value.trim() === "") {
    mobileInput.classList.remove("app__input--green");
    mobileInput.classList.remove("app__input--red");
  }
});

// Button functions
homeBtn.addEventListener("click", function () {
  homePage.style.display = "none";
  appSection.style.display = "flex";
});
personalBackBtn.addEventListener("click", function () {
  homePage.style.display = "block";
  appSection.style.display = "none";
});
