addNewPositionEducation();
const eduCreateFormBtn = document.querySelector(".app__addedu--btn");
eduCreateFormBtn.addEventListener("click", function (e) {
  e.preventDefault();
  addNewPositionEducation();
});

addNewPositionExperience();
const experCreateFormBtn = document.querySelector(".app__addexp--btn");
experCreateFormBtn.addEventListener("click", function (e) {
  e.preventDefault();
  addNewPositionExperience();
});

// Start page variablesa--------------------
const homeBtn = document.querySelector(".app__start--btn");
const homePage = document.querySelector(".app__start--page");

// Personal Page Variables---------
const backHomePageBtn = document.querySelector(".app__personal--backbtn");
const appSection = document.querySelector(".app__working--section");
const personalInfoPage = document.querySelector(".app__personal--page");
const picUploadBtn = document.querySelector(".app__upload--btn");
const picUploadInput = document.querySelector(".app__file--input");
const personalNextBtn = document.querySelector(".app__personal--nextbtn");
const personalForm = document.querySelector(".app__personal--form");
const personalAbout = document.querySelector(".app__input--about");
const nameInput = document.querySelector(".app__personal--name--input");
const lastNameInput = document.querySelector(".app__personal--lastname--input");
const emailInput = document.querySelector(".app__input--email");
const mobileInput = document.querySelector(".app__input--mobile");
// Resume generator page Variables
const resumePage = document.querySelector(".app__resume--page");
const resumePersonalBlock = document.querySelector(".app__resume--personal");
const fullNameResume = document.querySelector(".app__resume--fullname");
const resumePic = document.querySelector(".app__resume--image");
const resumeEmail = document.querySelector(".app__resume--email");
const resumeMobile = document.querySelector(".app__resume--number");
const emailSvg = document.querySelector(".email-svg");
const mobileSvg = document.querySelector(".mobile-svg");
const resumeAboutTitle = document.querySelector(".app__resume--about");
const resumeAboutText = document.querySelector(".app__resume--about--text");
const resumeExperTitle = document.querySelector(
  ".app__resume--experience--title"
);
const resumeEduTitle = document.querySelector(".app__resume--education--title");

// Experience Page
const experForm = document.querySelector(".app__experience--form");
const experNextBtn = document.querySelector(".app__experience--next");
const employerInput = document.querySelector(".app__input--employer");

// Education Page-------
const eduForm = document.querySelector(".app__education--form");

// Page Titles and counts----
const pageTitle = document.querySelector(".app__personal--title");
const pageNumber = document.querySelector(".app__personal--pagenum");
personalFunc();

// PersonalInfo Validation
function checkDateVal(input) {
  if (input.value === "") {
    return false;
  } else return true;
}
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
function personalFunc() {
  nameInput.addEventListener("keyup", function () {
    fullName(nameInput.value, lastNameInput.value);
    fullNameResume.innerHTML = nameInput.value;
    if (validateGeorgian(nameInput.value) && nameInput.value.length >= 2) {
      nameInput.classList.add("app__input--green");
      nameInput.classList.remove("app__input--red");
    } else if (
      !validateGeorgian(nameInput.value) &&
      nameInput.value.length > 0
    ) {
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
}
personalNextBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (
    validateGeorgian(nameInput.value, lastNameInput.value) &&
    validateUploadPicture(resumePic) &&
    isValidEmail(emailInput.value) &&
    validateGeorgianMobile(mobileInput.value)
  ) {
    resumePersonalBlock.style.borderBottom = "1px solid #c8c8c8";
    personalForm.style.display = "none";
    pageTitle.textContent = "ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ";
    pageNumber.textContent = "2/3";
    experForm.style.display = "block";
  }
});
homeBtn.addEventListener("click", function () {
  homePage.style.display = "none";
  appSection.style.display = "flex";
  personalForm.style.display = "flex";
});
backHomePageBtn.addEventListener("click", function () {
  homePage.style.display = "block";
  personalForm.style.display = "none";
  eduForm.style.display = "none";
  experForm.style.display = "none";
  appSection.style.display = "none";
  pageTitle.textContent = "ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ";
  pageNumber.textContent = "1/3";
});
// ------------------------------------------------------------------------------------

// Experience Form Func
function addNewPositionExperience() {
  const positionTemplate = document
    .getElementById("position-template")
    .children[0].cloneNode(true);
  const experienceTemplate = document
    .getElementById("experience-box-template")
    .children[0].cloneNode(true);
  // Insert into form
  document
    .getElementsByClassName("app__experience--form")[0]
    .prepend(positionTemplate);
  // Insert into generated CV
  insertAfter(
    document.getElementsByClassName("app__resume--logo")[0],
    experienceTemplate
  );
  const resumeExperPosition = experienceTemplate.querySelector(
    ".app__resume--experience--position"
  );
  function jobInfo(input1, input2) {
    return (resumeExperPosition.textContent = input1 + " " + "," + input2);
  }
  const positionInput = positionTemplate.querySelector(".app__input--position");
  positionInput.addEventListener("keyup", function () {
    jobInfo(positionInput.value, employerInput.value);
    if (minTwoSymbolVal(positionInput)) {
      resumeExperTitle.textContent = "ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ";
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
      resumeExperTitle.textContent = " ";
      positionInput.classList.remove("app__input--green");
      positionInput.classList.remove("app__input--red");
    }
  });
  const employerInput = positionTemplate.querySelector(".app__input--employer");
  employerInput.addEventListener("keyup", function () {
    jobInfo(positionInput.value, employerInput.value);
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
  const experDate1 = positionTemplate.querySelector(".app__date--input1");
  const experDate2 = positionTemplate.querySelector(".app__date--input2");
  const resumeExperDate = experienceTemplate.querySelector(
    ".app__resume--experience--date"
  );
  function fullDate(string1, string2) {
    return (resumeExperDate.textContent = string1 + "-" + string2);
  }
  experDate1.addEventListener("change", function () {
    fullDate(experDate1.value, experDate2.value);
    if (checkDateVal(experDate1)) {
      experDate1.classList.add("app__input--green");
      experDate1.classList.remove("app__input--red");
    } else {
      experDate1.classList.remove("app__input--green");
      experDate1.classList.add("app__input--red");
    }
  });
  experDate2.addEventListener("change", function () {
    fullDate(experDate1.value, experDate2.value);
    if (checkDateVal(experDate1)) {
      experDate2.classList.add("app__input--green");
      experDate2.classList.remove("app__input--red");
    } else {
      experDate2.classList.remove("app__input--green");
      experDate2.classList.add("app__input--red");
    }
  });
  const experDescription = positionTemplate.querySelector(
    ".app__input--description"
  );
  experDescription.addEventListener("keyup", function () {
    const resumeExperDescription = experienceTemplate.querySelector(
      ".app__resume--experience--description"
    );
    resumeExperDescription.textContent = experDescription.value;
    if (checkDateVal(experDescription)) {
      experDescription.classList.add("app__input--green");
      experDescription.classList.remove("app__input--red");
    } else {
      experDescription.classList.remove("app__input--green");
      experDescription.classList.add("app__input--red");
    }
  });
}
experNextBtn.addEventListener("click", function (e) {
  e.preventDefault();
  experForm.style.display = "none";
  pageTitle.textContent = "ᲒᲐᲜᲐᲗᲚᲔᲑᲐ";
  pageNumber.textContent = "3/3";
  eduForm.style.display = "flex";
});

// Education Form Func
function addNewPositionEducation() {
  const positionTemplateSecond = document
    .getElementById("position-template-2")
    .children[0].cloneNode(true);
  const educationTemplate = document
    .getElementById("education-box-template")
    .children[0].cloneNode(true);
  // Insert into form
  document
    .getElementsByClassName("app__education--form")[0]
    .prepend(positionTemplateSecond);
  // Insert into generated CV
  insertAfter(
    document.getElementsByClassName("app__resume--logo")[0],
    educationTemplate
  );
  const eduSchoolInput = positionTemplateSecond.querySelector(
    ".app__education--school"
  );
  eduSchoolInput.addEventListener("keyup", function () {
    const resumeEduSchool = educationTemplate.querySelector(
      ".app__resume--education--school"
    );
    resumeEduSchool.textContent = eduSchoolInput.value;
    if (minTwoSymbolVal(eduSchoolInput)) {
      resumeEduTitle.textContent = "ᲒᲐᲜᲐᲗᲚᲔᲑᲐ";
      eduSchoolInput.classList.add("app__input--green");
      eduSchoolInput.classList.remove("app__input--red");
    } else if (
      !minTwoSymbolVal(eduSchoolInput) &&
      eduSchoolInput.value.length > 0 &&
      eduSchoolInput.value.length < 2
    ) {
      eduSchoolInput.classList.remove("app__input--green");
      eduSchoolInput.classList.add("app__input--red");
    } else {
      eduSchoolInput.classList.remove("app__input--green");
      eduSchoolInput.classList.remove("app__input--red");
    }
  });
  const eduDegreeSelect = positionTemplateSecond.querySelector(
    ".app__education--select"
  );
  // Axios API Get
  axios.get("https://resume.redberryinternship.ge/api/degrees").then((resp) => {
    const degreeArr = resp.data;
    degreeArr.forEach((element) => {
      let degreeOption = document.createElement("option");
      eduDegreeSelect.appendChild(degreeOption);
      degreeOption.value = element.title;
      degreeOption.innerHTML = element.title;
    });
  });
  eduDegreeSelect.addEventListener("change", function () {
    const resumeEduDegree = educationTemplate.querySelector(
      ".app__resume--education--degree"
    );
    resumeEduDegree.textContent = eduDegreeSelect.value;
    if (checkDateVal(eduDegreeSelect)) {
      eduDegreeSelect.classList.add("app__input--green");
      eduDegreeSelect.classList.remove("app__input--red");
    } else {
      eduDegreeSelect.classList.remove("app__input--green");
      eduDegreeSelect.classList.add("app__input--red");
    }
  });
  const eduDateInput = positionTemplateSecond.querySelector(
    ".app__education--date"
  );
  eduDateInput.addEventListener("change", function () {
    const resumeEduDate = educationTemplate.querySelector(
      ".app__resume--education--date"
    );
    resumeEduDate.textContent = eduDateInput.value;
    if (checkDateVal(eduDateInput)) {
      eduDateInput.classList.add("app__input--green");
      eduDateInput.classList.remove("app__input--red");
    } else {
      eduDateInput.classList.remove("app__input--green");
      eduDateInput.classList.add("app__input--red");
    }
  });
  const eduDescriptionInput = positionTemplateSecond.querySelector(
    ".app__input--edu--description"
  );
  eduDescriptionInput.addEventListener("keyup", function () {
    const resumeEduDescription = educationTemplate.querySelector(
      ".app__resume--education--description"
    );
    resumeEduDescription.textContent = eduDescriptionInput.value;
    if (checkDateVal(eduDescriptionInput)) {
      eduDescriptionInput.classList.add("app__input--green");
      eduDescriptionInput.classList.remove("app__input--red");
    } else {
      eduDescriptionInput.classList.remove("app__input--green");
      eduDescriptionInput.classList.add("app__input--red");
    }
  });
}

// insertFunc
function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
