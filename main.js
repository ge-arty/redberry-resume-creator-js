// Start page variablesa
const homeBtn = document.querySelector(".app__start--btn");
const homePage = document.querySelector(".app__start--page");
// Personal Page Variables
const homeBackBtn = document.querySelector(".app__personal--backbtn");
const appSection = document.querySelector(".app__working--section");
const personalInfoPage = document.querySelector(".app__personal--page");
const picUploadBtn = document.querySelector(".app__upload--btn");
const picUploadInput = document.querySelector(".app__file--input");
const personalNextBtn = document.querySelector(".app__personal--nextbtn");
const personalForms = document.querySelector(".app__personal--form");
const personalAbout = document.querySelector(".app__input--about");
//
const nameInput = document.querySelector(".app__personal--name--input");
const lastNameInput = document.querySelector(".app__personal--lastname--input");
const emailInput = document.querySelector(".app__input--email");
const mobileInput = document.querySelector(".app__input--mobile");
// Resume generator page Variables
const resumePage = document.querySelector(".app__resume--page");
const fullNameResume = document.querySelector(".app__resume--fullname");
const resumePic = document.querySelector(".app__resume--image");
const resumeEmail = document.querySelector(".app__resume--email");
const resumeMobile = document.querySelector(".app__resume--number");
const emailSvg = document.querySelector(".email-svg");
const mobileSvg = document.querySelector(".mobile-svg");
const resumeAboutTitle = document.querySelector(".app__resume--about");
const resumeAboutText = document.querySelector(".app__resume--about--text");
// Experience Page
const experForm = document.querySelector(".app__experience--form");
const experNextBtn = document.querySelector(".app__experience--next");
const positionInput = document.querySelector(".app__input--position");
const employerInput = document.querySelector(".app__input--employer");
// Education Page
const eduForm = document.querySelector(".app__education--form");
const eduDegreeSelect = document.querySelector(".app__education--select");
// Page Titles and counts
const pageTitle = document.querySelector(".app__personal--title");
const pageNumber = document.querySelector(".app__personal--pagenum");
// PersonalInfo Validation
function minTwoSymbolVal(input) {
  if (input.value.length >= 2) {
    return true;
  } else {
    return false;
  }
}
function validateGeorgian(input) {
  let regExp = /^[ა-ჰ]+$/;
  return regExp.test(input);
}
function isValidEmail(email) {
  let emailRegex = /^[a-zA-Z0-9._%+-]+@redberry\.ge$/;
  return emailRegex.test(email);
}
function validateGeorgianMobile(mobile) {
  let mobileRegex = /^(\+995)\d{9}$/;
  return mobileRegex.test(mobile);
}
function validateUploadPicture(img) {
  if (img.src === "") {
    return false;
  } else return true;
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
  resumeEmail.textContent = emailInput.value;
  emailSvg.style.display = "block";
  if (emailInput.value.trim() === "") {
    emailSvg.style.display = "none";
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
  resumeMobile.textContent = mobileInput.value;
  mobileSvg.style.display = "block";
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
    mobileSvg.style.display = "none";
    mobileInput.classList.remove("app__input--green");
    mobileInput.classList.remove("app__input--red");
  }
});
picUploadInput.addEventListener("change", function () {
  const file = this.files[0];
  const reader = new FileReader();
  reader.onload = function (e) {
    resumePic.src = e.target.result;
    resumePic.style.display = "block";
  };
  reader.readAsDataURL(new Blob([file]));
});
positionInput.addEventListener("keyup", function () {
  if (minTwoSymbolVal(positionInput)) {
    positionInput.classList.add("app__input--green");
    positionInput.classList.remove("app__input--red");
  } else if (
    !minTwoSymbolVal(positionInput) &&
    positionInput.value.length > 0 &&
    positionInput.value.length < 2
  ) {
    positionInput.classList.remove("app__input--green");
    positionInput.classList.add("app__input--red");
  } else {
    positionInput.classList.remove("app__input--green");
    positionInput.classList.remove("app__input--red");
  }
});

employerInput.addEventListener("keyup", function () {
  if (minTwoSymbolVal(employerInput)) {
    employerInput.classList.add("app__input--green");
    employerInput.classList.remove("app__input--red");
  } else if (
    !minTwoSymbolVal(employerInput) &&
    employerInput.value.length > 0 &&
    employerInput.value.length < 2
  ) {
    employerInput.classList.remove("app__input--green");
    employerInput.classList.add("app__input--red");
  } else {
    employerInput.classList.remove("app__input--green");
    employerInput.classList.remove("app__input--red");
  }
});

picUploadBtn.addEventListener("click", function (e) {
  e.preventDefault();
  picUploadInput.click();
});
personalAbout.addEventListener("keyup", function () {
  resumeAboutText.textContent = personalAbout.value;
  if (personalAbout.value.trim() === "") {
    resumeAboutTitle.textContent = "";
  } else {
    resumeAboutTitle.textContent = "ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ";
  }
});
// Button functions
personalNextBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    validateGeorgian(nameInput.value, lastNameInput.value) &&
    validateUploadPicture(resumePic) &&
    isValidEmail(emailInput.value) &&
    validateGeorgianMobile(mobileInput.value)
  ) {
    personalForms.style.display = "none";
    pageTitle.textContent = "ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ";
    pageNumber.textContent = "2/3";
    experForm.style.display = "block";
  }
});
homeBtn.addEventListener("click", function () {
  homePage.style.display = "none";
  appSection.style.display = "flex";
});
homeBackBtn.addEventListener("click", function () {
  homePage.style.display = "block";
  appSection.style.display = "none";
});
experNextBtn.addEventListener("click", function (e) {
  e.preventDefault();
  experForm.style.display = "none";
  pageTitle.textContent = "ᲒᲐᲜᲐᲗᲚᲔᲑᲐ";
  pageNumber.textContent = "3/3";
  eduForm.style.display = "flex";
});
console.log(resumePic);

// Axios API Get
axios.get("https://resume.redberryinternship.ge/api/degrees").then((resp) => {
  const degreeArr = resp.data;
  degreeArr.forEach((element) => {
    let degreeOption = document.createElement("option");
    eduDegreeSelect.appendChild(degreeOption);
    degreeOption.value = element.id;
    degreeOption.innerHTML = element.title;
  });
});

// axios
// .get("https://covid-api.mmediagroup.fr/v1/cases")
// .then(function (response) {
//   let infoArray = Object.entries(response.data);
//   //  --------ვამატებთ სელექტში ქვეყნებს
//   let countryArr = Object.keys(response.data);
//   countryArr.forEach((element) => {
//     let countryOption = document.createElement("option");
//     countrySelect.appendChild(countryOption);
//     countryOption.value = element;
//     countryOption.innerHTML = element;
//   });
