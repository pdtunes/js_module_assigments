console.log("JS MA3");
// Q1
let subtract = (a, b) => {
  return a - b;
};

subtract(100, 1);

// Q2
const apiUrl = "https://api.rawg.io/api/games?genres=sports";

fetch(apiUrl)
  .then(response => {
    return response.json();
  })
  .then(json => {
    printGameNames(json);
  })
  .catch(error => {
    document.location.href = "error.html";
  });

function printGameNames(json) {
  const gamesArray = json.results;
  for (let i = 0; i < gamesArray.length; i++) {
    console.log(gamesArray[i].name);
  }
}

// Q3
let mySentence = "These cats are outrageous";
let filteredSentence = mySentence.replace("cats", "giraffes");
console.log("🚀", filteredSentence);

// Q4
const queryString = document.location.search; // https://my.site.com?userId=7
const params = new URLSearchParams(queryString);

if (!params.has("userId")) {
  document.location.href = "third.html";
} else if (params.get("userId") < 10) {
  document.location.href = "first.html";
} else {
  document.location.href = "second.html";
}

// Q5
const containerDiv = document.querySelector(".container");
const button = document.querySelector(".btn");
containerDiv.removeChild(button);

// Q6
const animalsList = document.querySelector(".animals");
const listItem = document.createElement("li");
listItem.innerHTML = "Parrots";
listItem.classList.add("parrots");
animalsList.appendChild(listItem);

// Q7
const apiGamesUrl = "https://api.rawg.io/api/games/3801";

fetch(apiGamesUrl)
  .then(response => {
    return response.json();
  })
  .then(data => {
    let ratingDiv = document.querySelector(".rating");
    ratingDiv.innerText = data.rating;
  })
  .catch(error => {
    console.log(error);
  });
