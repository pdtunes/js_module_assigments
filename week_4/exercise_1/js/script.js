/* 
const greeting = "hello there people";
const lengtOfGreeting = greeting.length
console.log("string chars",  lengtOfGreeting);

const emptyString = "";
console.log("emptyString", emptyString.length);

const spaceTest = "a b";
console.log("spaceTest", spaceTest.length) */


/* const firstName = document.querySelector("#firstName");
console.log(firstName);

firstName.addEventListener("keyup", logLength);

function logLength(){
  const inputValue = event.target.value;
  const valueLength = inputValue.length; 

  

  console.log(valueLength);

  if (valueLength) {
    console.log("The input has a value")
  } else{
    console.log("The input does not have a value")
  }
} */

/* 
const firstName = " Manny ";
console.log(firstName.length);

const trimmedName = firstName.trim();
console.log(trimmedName.length);

const space = " ";
console.log(space.length);
console.log(space.trim().length)

 */


const firstName = document.querySelector("#firstName");
console.log(firstName);

firstName.addEventListener("keyup", logLength);

function logLength(event){
  const inputValue = event.target.value.trim();
  const valueLength = inputValue.length; 

  console.log(inputValue.length);

  if (valueLength) {
    console.log("The input has a value")
  } else{
    console.log("The input does not have a value")
  }
}