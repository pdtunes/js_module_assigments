const apiUrl = "https://pokeapi.co/api/v2/pokemon/ditto";
const apiUrl2 = "https://randomuser.me/api/";

const wrapperDiv = document.querySelector(".wrapper");

fetch(apiUrl2)
  .then(function(response) {
    if (response.status === 200) {
      return response.json();
    } else {
      return console.log("oops error");
    }
  })
  .then(function(json) {
    const results = json.results;
    getNames(results);
    getImage(results);
  })
  .catch(function(error) {
    console.log(error);
  });

function getNames(resultArray) {
  console.log(resultArray);
  for (let i = 0; i < resultArray.length; i++) {
    let returnHTML = ``;
    let userFirstName = resultArray[i].name.first;
    let userLastName = resultArray[i].name.last;

    returnHTML += `${userFirstName} ${userLastName}`;

    let photoDiv = document.createElement("figure");
    let heading = document.createElement("h1");
    
  }
}

function getImage(imageArray) {
  for (let i = 0; i < imageArray.length; i++) {
    let returnHTML = ``;
    let photo = imageArray[i].picture.large;
    console.log(photo);

    returnHTML += `<img src="${photo}"/>`;

    let photoDiv = document.createElement("figure");
    let addPhotoToDiv = wrapperDiv.appendChild(photoDiv);
    addPhotoToDiv.innerHTML = returnHTML;
  }
}
