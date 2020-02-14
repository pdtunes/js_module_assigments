cars.forEach(car => {
    if (car.age) {
        console.log(car.age);
    } else {
        console.log("Unkown");
    }
});




const elephants = [
    { image: "https://elephant-api.herokuapp.com/pictures/001.jpg", note: "Given to a Carolingian emperor." },
    { image: "https://elephant-api.herokuapp.com/pictures/missing.jpg", note: "From the Mysore Dasara procession." },
    { image: "https://elephant-api.herokuapp.com/pictures/missing.jpg", note: "Known for her tightrope walking act." }
];

function createHtmlWithFor(images) {
    let html = "";

    for (let i = 0; i < images.length; i++) {
        html += `<img src="${images[i].image}" alt="${images[i].note}">`;
    }

    return html;
}

const html1 = createHtmlWithFor(elephants);
console.log(html1);
