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

// Person Object
const personObj = {};
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

// Experience Page
const experForm = document.querySelector(".app__experience--form");

const employerInput = document.querySelector(".app__input--employer");
const experBox = document.querySelector(".app__resume--experience--box");
const experBackBtn = document.querySelector(".app__experience--back");

// Education Page-------
const eduForm = document.querySelector(".app__education--form");
const eduBackBtn = document.querySelector(".app__education--back--btn");

// Page Titles and counts----
const pageTitle = document.querySelector(".app__personal--title");
const pageNumber = document.querySelector(".app__personal--pagenum");

// sessionStorage
// document.addEventListener("DOMContentLoaded", function () {});
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

nameInput.value = sessionStorage.getItem("name");
if (validateGeorgian(nameInput.value) && nameInput.value.length >= 2) {
  nameInput.classList.add("app__input--green");
  nameInput.classList.remove("app__input--red");
}

nameInput.addEventListener("keyup", function () {
  sessionStorage.setItem("name", nameInput.value);
  fullName(nameInput.value, lastNameInput.value);
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
lastNameInput.value = sessionStorage.getItem("surname");
if (validateGeorgian(lastNameInput.value) && lastNameInput.value.length >= 2) {
  lastNameInput.classList.add("app__input--green");
  lastNameInput.classList.remove("app__input--red");
}
lastNameInput.addEventListener("keyup", function () {
  sessionStorage.setItem("surname", lastNameInput.value);
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

fullName(nameInput.value, lastNameInput.value);

emailInput.value = sessionStorage.getItem("email");
if (emailInput.value.length > 0) {
  emailSvg.style.display = "block";
}
resumeEmail.textContent = sessionStorage.getItem("email");
if (isValidEmail(emailInput.value)) {
  emailInput.classList.add("app__input--green");
  emailInput.classList.remove("app__input--red");
}
emailInput.addEventListener("keyup", function () {
  sessionStorage.setItem("email", emailInput.value);
  resumeEmail.textContent = sessionStorage.getItem("email");
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
mobileInput.value = sessionStorage.getItem("mobile");
if (mobileInput.value.length > 0) {
  mobileSvg.style.display = "block";
}
resumeMobile.textContent = sessionStorage.getItem("mobile");
if (validateGeorgianMobile(mobileInput.value)) {
  mobileInput.classList.add("app__input--green");
  mobileInput.classList.remove("app__input--red");
}
mobileInput.addEventListener("keyup", function () {
  sessionStorage.setItem("mobile", mobileInput.value);
  resumeMobile.textContent = sessionStorage.getItem("mobile");
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
    sessionStorage.setItem("profilePic", resumePic.src);
    resumePic.style.display = "block";
  };
  reader.readAsDataURL(new Blob([file]));
});
window.onload = function () {
  if (sessionStorage.getItem("profilePic")) {
    resumePic.src = sessionStorage.getItem("profilePic");
    resumePic.style.display = "block";
  }
};
picUploadBtn.addEventListener("click", function (e) {
  e.preventDefault();
  picUploadInput.click();
});
personalAbout.value = sessionStorage.getItem("About");
resumeAboutText.textContent = personalAbout.value;
if (personalAbout.value.length > 0) {
  resumeAboutTitle.textContent = "ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ";
}
personalAbout.addEventListener("keyup", function () {
  sessionStorage.setItem("About", personalAbout.value);
  console.log(sessionStorage.getItem("About"));
  if (personalAbout.value.trim() === "") {
    resumeAboutTitle.textContent = "";
  } else {
    resumeAboutTitle.textContent = "ᲩᲔᲛ ᲨᲔᲡᲐᲮᲔᲑ";
  }
});

personalNextBtn.addEventListener("click", function (e) {
  e.preventDefault();
  if (nameInput.value.length === 0) {
    nameInput.classList.add("app__input--red");
  }
  if (lastNameInput.value.length === 0) {
    lastNameInput.classList.add("app__input--red");
  }
  if (emailInput.value.length === 0) {
    emailInput.classList.add("app__input--red");
  }
  if (mobileInput.value.length === 0) {
    mobileInput.classList.add("app__input--red");
  }
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
const testObj = {
  name: "დავით",
  surname: "ონიანი",
  email: "davitoniani@redberry.ge",
  phone_number: "+995598123456",
  experiences: [
    {
      position: "back-end developer",
      employer: "Redberry",
      start_date: "2019/09/09",
      due_date: "2020/09/23",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam ornare nunc dui, a pellentesque magna blandit dapibus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vestibulum mattis diam nisi, at venenatis dolor aliquet vel. Pellentesque aliquet leo nec tortor pharetra, ac consectetur orci bibendum.",
    },
  ],
  educations: [
    {
      institute: "თსუ",
      degree: "სტუდენტი",
      due_date: "2017/06/25",
      description:
        "სამართლის ფაკულტეტის მიზანი იყო მიგვეღო ფართო თეორიული ცოდნა სამართლის არსის, სისტემის, ძირითადი პრინციპების, სამართლებრივი სისტემების, ქართული სამართლის ისტორიული წყაროების, კერძო, სისხლის და საჯარო სამართლის სფეროების ძირითადი თეორიების, პრინციპებისა და რეგულირების თავისებურებების შესახებ.",
    },
  ],
  image: "/storage/images/0rI7LyNRJRrokoSKUTb9EKvNuyYFKOvUmDQWoFt6.png",
  about_me: "ეს არის აღწერა ჩემს შესახებ",
};

homeBtn.addEventListener("click", function () {
  homePage.style.display = "none";
  appSection.style.display = "flex";
  personalForm.style.display = "flex";
  personalInfoPage.style.display = "block";
  resumePage.style.margin = "0";
});
backHomePageBtn.addEventListener("click", function () {
  homePage.style.display = "block";
  personalForm.style.display = "none";
  eduForm.style.display = "none";
  experForm.style.display = "none";
  appSection.style.display = "none";
  pageTitle.textContent = "ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ";
  pageNumber.textContent = "1/3";
  sessionStorage.clear();
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
  insertBefore(
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
  positionInput.value = sessionStorage.getItem("position");
  const resumeExperTitle = experienceTemplate.querySelector(
    ".app__resume--experience--title"
  );
  if (minTwoSymbolVal(positionInput)) {
    resumeExperTitle.textContent = "ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ";
    positionInput.classList.add("app__input--green");
    positionInput.classList.remove("app__input--red");
  }
  positionInput.addEventListener("keyup", function () {
    sessionStorage.setItem("position", positionInput.value);
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
  employerInput.value = sessionStorage.getItem("employer");
  if (minTwoSymbolVal(employerInput)) {
    employerInput.classList.add("app__input--green");
    employerInput.classList.remove("app__input--red");
  }
  employerInput.addEventListener("keyup", function () {
    jobInfo(positionInput.value, employerInput.value);
    sessionStorage.setItem("employer", employerInput.value);
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
  jobInfo(positionInput.value, employerInput.value);
  const experDate1 = positionTemplate.querySelector(".app__date--input1");
  const experDate2 = positionTemplate.querySelector(".app__date--input2");
  const resumeExperDate = experienceTemplate.querySelector(
    ".app__resume--experience--date"
  );
  function fullDate(string1, string2) {
    return (resumeExperDate.textContent = string1 + "-" + string2);
  }
  experDate1.value = sessionStorage.getItem("experDate1");
  experDate2.value = sessionStorage.getItem("experDate2");
  if (checkDateVal(experDate1)) {
    experDate1.classList.add("app__input--green");
    experDate1.classList.remove("app__input--red");
  }
  fullDate(experDate1.value, experDate2.value);
  experDate1.addEventListener("change", function () {
    fullDate(experDate1.value, experDate2.value);
    sessionStorage.setItem("experDate1", experDate1.value);
    if (checkDateVal(experDate1)) {
      experDate1.classList.add("app__input--green");
      experDate1.classList.remove("app__input--red");
    } else {
      experDate1.classList.remove("app__input--green");
      experDate1.classList.add("app__input--red");
    }
  });
  if (checkDateVal(experDate1)) {
    experDate2.classList.add("app__input--green");
    experDate2.classList.remove("app__input--red");
  }
  experDate2.addEventListener("change", function () {
    fullDate(experDate1.value, experDate2.value);
    sessionStorage.setItem("experDate2", experDate2.value);
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
  experDescription.value = sessionStorage.getItem("experDescription");
  const resumeExperDescription = experienceTemplate.querySelector(
    ".app__resume--experience--description"
  );
  resumeExperDescription.textContent = experDescription.value;
  if (checkDateVal(experDescription)) {
    experDescription.classList.add("app__input--green");
    experDescription.classList.remove("app__input--red");
  }
  experDescription.addEventListener("keyup", function () {
    sessionStorage.setItem("experDescription", experDescription.value);

    if (checkDateVal(experDescription)) {
      experDescription.classList.add("app__input--green");
      experDescription.classList.remove("app__input--red");
    } else {
      experDescription.classList.remove("app__input--green");
      experDescription.classList.add("app__input--red");
    }
  });
  const experNextBtn = document.querySelector(".app__experience--next");
  experNextBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (positionInput.value.length === 0) {
      positionInput.classList.add("app__input--red");
    }
    if (employerInput.value.length === 0) {
      employerInput.classList.add("app__input--red");
    }
    if (experDescription.value.length === 0) {
      experDescription.classList.add("app__input--red");
    }
    if (experDate1.value.length === 0) {
      experDate1.classList.add("app__input--red");
    }
    if (experDate2.value.length === 0) {
      experDate2.classList.add("app__input--red");
    }
    if (
      minTwoSymbolVal(positionInput) &&
      minTwoSymbolVal(employerInput) &&
      checkDateVal(experDescription) &&
      checkDateVal(experDate1) &&
      checkDateVal(experDate2)
    ) {
      experForm.style.display = "none";
      pageTitle.textContent = "ᲒᲐᲜᲐᲗᲚᲔᲑᲐ";
      pageNumber.textContent = "3/3";
      eduForm.style.display = "flex";
      experBox.style.borderBottom = "1px solid #c8c8c8";
    }
  });
}

experBackBtn.addEventListener("click", function (e) {
  e.preventDefault();
  experForm.style.display = "none";
  personalForm.style.display = "flex";
  pageTitle.textContent = "ᲞᲘᲠᲐᲓᲘ ᲘᲜᲤᲝ";
  pageNumber.textContent = "1/3";
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
  const resumeEduSchool = educationTemplate.querySelector(
    ".app__resume--education--school"
  );
  function fullName(input1, input2) {
    return (resumeEduSchool.textContent = input1 + " " + "," + input2);
  }
  const resumeEduTitle = document.querySelector(
    ".app__resume--education--title"
  );
  eduSchoolInput.value = sessionStorage.getItem("eduSchool");
  if (minTwoSymbolVal(eduSchoolInput)) {
    resumeEduTitle.textContent = "ᲒᲐᲜᲐᲗᲚᲔᲑᲐ";
    eduSchoolInput.classList.add("app__input--green");
    eduSchoolInput.classList.remove("app__input--red");
  }
  eduSchoolInput.addEventListener("keyup", function () {
    fullName(eduSchoolInput.value, eduDegreeSelect.value);
    sessionStorage.setItem("eduSchool", eduSchoolInput.value);
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

  // eduDegreeSelect.addEventListener("change", function () {
  //   fullName(eduSchoolInput.value, eduDegreeSelect.value);

  //   if (checkDateVal(eduDegreeSelect)) {
  //     eduDegreeSelect.classList.add("app__input--green");
  //     eduDegreeSelect.classList.remove("app__input--red");
  //   } else {
  //     eduDegreeSelect.classList.remove("app__input--green");
  //     eduDegreeSelect.classList.add("app__input--red");
  //   }
  // });
  // fullName(eduSchoolInput.value, eduDegreeSelect.value);
  function fullName(input1, input2) {
    return (resumeEduSchool.textContent = input1 + " " + "," + input2);
  }
  eduDegreeSelect.addEventListener("change", function () {
    fullName(eduSchoolInput.value, eduDegreeSelect.value);
    sessionStorage.setItem("eduDegree", eduDegreeSelect.value);
    if (checkDateVal(eduDegreeSelect)) {
      eduDegreeSelect.classList.add("app__input--green");
      eduDegreeSelect.classList.remove("app__input--red");
    } else {
      eduDegreeSelect.classList.remove("app__input--green");
      eduDegreeSelect.classList.add("app__input--red");
    }
  });

  // Retrieve the saved value after page refresh
  if (sessionStorage.getItem("eduDegree")) {
    eduDegreeSelect.value = sessionStorage.getItem("eduDegree");
  }

  fullName(eduSchoolInput.value, eduDegreeSelect.value);

  const eduDateInput = positionTemplateSecond.querySelector(
    ".app__education--date"
  );
  eduDateInput.value = sessionStorage.getItem("eduDate");
  const resumeEduDate = educationTemplate.querySelector(
    ".app__resume--education--date"
  );

  resumeEduDate.textContent = eduDateInput.value;
  if (checkDateVal(eduDateInput)) {
    eduDateInput.classList.add("app__input--green");
    eduDateInput.classList.remove("app__input--red");
  }

  eduDateInput.addEventListener("change", function () {
    sessionStorage.setItem("eduDate", eduDateInput.value);
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
  eduDescriptionInput.value = sessionStorage.getItem("eduDesc");
  if (checkDateVal(eduDescriptionInput)) {
    eduDescriptionInput.classList.add("app__input--green");
    eduDescriptionInput.classList.remove("app__input--red");
  }
  const resumeEduDescription = educationTemplate.querySelector(
    ".app__resume--education--description"
  );
  resumeEduDescription.textContent = eduDescriptionInput.value;
  eduDescriptionInput.addEventListener("keyup", function () {
    sessionStorage.setItem("eduDesc", eduDescriptionInput.value);
    if (checkDateVal(eduDescriptionInput)) {
      eduDescriptionInput.classList.add("app__input--green");
      eduDescriptionInput.classList.remove("app__input--red");
    } else {
      eduDescriptionInput.classList.remove("app__input--green");
      eduDescriptionInput.classList.add("app__input--red");
    }
  });
  const eduNextBtn = document.querySelector(".app__education--finish--btn");
  eduNextBtn.addEventListener("click", function (e) {
    e.preventDefault();
    if (
      minTwoSymbolVal(eduSchoolInput) &&
      checkDateVal(eduDegreeSelect) &&
      checkDateVal(eduDateInput) &&
      checkDateVal(eduDescriptionInput)
    ) {
      personalInfoPage.style.display = "none";
      resumePage.style.margin = "0 auto";
      sessionStorage.clear();
    }
  });
}
eduBackBtn.addEventListener("click", function (e) {
  e.preventDefault();
  experForm.style.display = "flex";
  eduForm.style.display = "none";
  pageNumber.textContent = "2/3";
  pageTitle.textContent = "ᲒᲐᲛᲝᲪᲓᲘᲚᲔᲑᲐ";
});
// insert Function
function insertAfter(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode.nextSibling);
}
function insertBefore(referenceNode, newNode) {
  referenceNode.parentNode.insertBefore(newNode, referenceNode);
}

// console.log(JSON.stringify(testObj));
// axios
//   .post(
//     "https://resume.redberryinternship.ge/api/cvs",
//     JSON.stringify(testObj)
//   )
//   .then((response) => {
//     console.log(response.data);
//   })
//   .catch((error) => {
//     console.error(error);
//   });
