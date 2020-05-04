// Use RegEx for validation
const form = document.querySelector("#contactForm");

const name = document.querySelector("#name");
const nameError = document.querySelector("#nameError");
let nameHasError = false;

const lastName = document.querySelector("#lastName");
const lastNameError = document.querySelector("#lastNameError");
let lastNameHasError = false;

const email = document.querySelector("#email");
const emailError = document.querySelector("#emailError");
let emailHasError = false;

const phone = document.querySelector("#phone");
const phoneError = document.querySelector("#phoneError");
let phoneHasError = false;

const message = document.querySelector("#message");
const messageError = document.querySelector("#messageError");
let messageHasError = false;

const submitMessage = document.querySelector("#submitMessage");

form.addEventListener("submit", validateForm);

function validateForm() {
  event.preventDefault(); //always have this


  // test name
  const nameValue = name.value;

  if (validateLength(nameValue, 1) === true) {
     nameError.style.display = "none";
     nameHasError = false;
  } else {
     nameError.style.display = "block";
     nameHasError = true;
  }

  // test last name
  const lastNameValue = lastName.value;

  if (validateLength(lastNameValue, 3) === true) {
     lastNameError.style.display = "none";
     lastNameHasError = false;
  } else {
    lastNameError.style.display = "block";
    lastNameHasError = true;
  }

  // test email
  const emailValue = email.value;

  if (validateEmail(emailValue)) {
     emailError.style.display = "none";
     emailHasError = false;
  } else {
    emailError.style.display = "block";
    emailHasError = true;
  }

  // test phone
  const phoneValue = phone.value;

  if (validatePhone(phoneValue)) {
     phoneError.style.display = "none";
     phoneHasError = false;
  } else {
    phoneError.style.display = "block";
    phoneHasError = true;
  }

  // test message
  const messageValue = message.value;

  if (validateLength(messageValue, 6) === true) {
     messageError.style.display = "none";
     messageHasError = false;
  } else {
     messageError.style.display = "block";
     messageHasError = true;
  }

  //decide whether to display the submitted message
  if (nameHasError === true) || lastNameHasError === true || emailHasError === true ||
     phoneHasError === true || messageHasError === true) {
     submitMessage.style.display = "none";
  } else {
     submitMessage.style.display = "block";
  }
}

function validateLength(value, lengthToCheck) {
  const trimmedValue = value.trim();

  if (trimmedValue.length >= lengthToCheck) {
      return true;
  } else {
      return false;
  }
}

function validateEmail(emailValue) {
  const regEx = /\S+@\S+\.\S+/;

  if (regEx.test(emailValue)) {
     return true;
  } else {
     return false;
  }
}

function validatePhone(phoneValue) {
  const regEx = /^\d{3}\ \d{3}\ \d{4}$/;

  if (regEx.test(phoneValue)) {
     return true;
  } else {
     return false;
  }
}
