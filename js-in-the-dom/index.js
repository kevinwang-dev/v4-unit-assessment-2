const formBtn = document.querySelector("#close-form");
const form = document.querySelector(".form");

const toggler = function () {
  form.classList.toggle("hide");
  if (formBtn.innerText === "X") {
    formBtn.innerText = "+";
  } else {
    formBtn.innerText = "X";
  }
};

const nameInput = document.getElementById("name");
const emailInput = document.getElementById("email");
const emailList = [];

function validateForm() {
  if (nameInput.value.length === 0 && emailInput.value.length === 0) {
    nameInput.style.border = "solid red 2px";
    emailInput.style.border = "solid red 2px";
    alert("you must enter a name and an email address to subscribe!");
  } else if (nameInput.value.length === 0) {
    nameInput.style.border = "solid red 2px";
    alert("please enter a name to subscribe");
  } else if (emailInput.value.length === 0) {
    emailInput.style.border = "solid red 2px";
    alert("please enter an email address to subscribe");
  } else {
    emailList.push({
      name: nameInput.value,
      email: emailInput.value,
    });
    displayThankYou();
  }
}

form.addEventListener("submit", function (event) {
  event.preventDefault();
  validateForm();
});

//Step 3
const formContainer = document.getElementsByClassName(".form-container");
function displayThankYou() {
  formContainer.innerText = "Thank you for subscribing!";
}

const removeMessage = function () {
  formContainer.setTimeout(() => {}, 3000);
};

//Step 4

nameInput.addEventListener("change", function () {
  nameInput.style.border = "none";
});

emailInput.addEventListener("change", function () {
  emailInput.style.border = "none";
});

//Step 5

const cart = document.createElement("div");
const main = document.querySelector("main");
const cartItems = 0;

const addToCart = function () {
  if (cartItems === 0) {
    cartItems = 1;
    cart.setAttribute("class", "cart-display");
    cart.innerText = "Your Cart: 1 item";
    main.appendChild(cart);
  } else {
    cartItems += 1;
    cart.innerText = `Your Cart: ${cartItems} items`;
  }
};
