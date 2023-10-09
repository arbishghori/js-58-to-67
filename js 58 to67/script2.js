// i. Get element of id "main-content" and assign them in a variable.
const mainContentElement = document.getElementById("main-content");

// ii. Display all child elements of "main-content" element.
const childElements = mainContentElement.children;
for (let i = 0; i < childElements.length; i++) {
    console.log(childElements[i]);
}

// iii. Get all elements of class "render" and show their innerHTML in browser.
const renderElements = document.getElementsByClassName("render");
for (let i = 0; i < renderElements.length; i++) {
    console.log(renderElements[i].innerHTML);
}

// iv. Fill input value whose element id is "first-name" using JavaScript.
const firstNameInput = document.getElementById("first-name");
firstNameInput.value = "Alex";

// v. Repeat part iv for id "last-name" and "email".
const lastNameInput = document.getElementById("last-name");
lastNameInput.value = "Bank";

const emailInput = document.getElementById("email");
emailInput.value = "alexbank@example.com";