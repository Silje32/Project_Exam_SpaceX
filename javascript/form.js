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
}

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
const lastNameValue = lastName.value;

if (validateLength(lastNameValue, 3) === true) {
  lastNameError.style.display = "none";
  lastNameHasError = false;
} else {
  lastNameError.style.display = "block";
  lastNameHasError = true;
}
