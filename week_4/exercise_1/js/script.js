/*
const greeting = "Hello there people";
const lengthOfGreeting = greeting.length;
console.log("string chars:", lengthOfGreeting);

const spaceTest = "ab";
console.log("spaceTest:", spaceTest.length);
*/

const firstName = document.querySelector("#firstName");

firstName.addEventListener("keyup", logLength);

function logLength(event) {
  const inputValue = event.target.value;
  const valueLength = inputValue.length;

  if (valueLength > 0) {
    console.log("The input has a value");
  } else {
    console.log("The input does not have a value");
  }

}
