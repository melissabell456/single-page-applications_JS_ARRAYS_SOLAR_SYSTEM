var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];
let el = document.getElementById("planets");

planets.forEach(function(currentPlanet) { 
    let planetText = document.createTextNode(`${currentPlanet}   `);
    el.appendChild(planetText);
});

let properPlanets = planets.map(planet => {
    return planet.charAt(0).toUpperCase() + planet.slice(1);
});
console.log(properPlanets);

let specificPlanets = properPlanets.filter(planet => {
    if (planet.indexOf("e") > -1 || planet.indexOf("E") > -1) {
        return planet;
    };
});
console.log(specificPlanets);

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];

let sentence = words.reduce((x, y) => x + " " + y);
console.log(sentence);