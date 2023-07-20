/* STEP 2: Bind the HEADER and the SECTION elements above to variables */
const header = document.querySelector("header");
const section = document.querySelector("section");

// STEP 3a: Create the asynchronous function populate()
async function populate() {
    // Introducing JavaScript Object Notation (JSON): https://json.org/
    // STEP 4a: Create i-scream.json file with companyName, headOffice, established, active, topFlavors(name, calories, type, ingredients, image) */
    // STEP 4b: Store the URL of a JSON file in a variable */
    const jsonURL = "https://priyansht.github.io/js-json-example/i-scream.json";
    // STEP 5: Use the new URL to create a new request object
    const request = new Request(jsonURL);
    // STEP 6: Make a network request with the fetch() function, which returns a Response object
    const response = await fetch(request);
    // STEP 7: Capture the returned Response object and covert to a JSON object using json()
    const iScream = await response.json();
    // STEP 8: Output the iScream JSON object to the console 
    console.log(iScream);
    // STEP 9a: Invoke the populateHeader function here, then build it below
    populateHeader(iScream);
    // STEP 10a: Invoke the showTopFlavors function here, then build it below
    showTopFlavors(iScream);
}

// STEP 3b: Call the populate() function
populate();
/* STEP 9b: Build out the populateHeader() function */
function populateHeader(jsonObj) {
    // Create the H1 element
    let h1 = document.createElement("h1");
    // Grab the company name from the JSON object and use it for the text node
    h1.textContent = jsonObj.companyName;
    // Inject the complete H1 element into the DOM, inside the HEADER
    header.appendChild(h1);
};
/* STEP 10b: Assemble the showTopFlavors() function */
function showTopFlavors(jsonObj) {
    // STEP 10c: Bind the JSON topFlavors object to a var
    let flavors = jsonObj.topFlavors;

    // STEP 10d: Loop through the topFlavors object
    for (let i = 0; i < flavors.length; i++) {
        console.log(flavors[i]);
        // STEP 10e: build HTML elements for the content: article, h2, image, p1, p2, list
        const article = document.createElement("article");
        const h2 = document.createElement("h2");
        const p1 = document.createElement("p");
        const p2 = document.createElement("p");
        const list = document.createElement("ul"); // <ul></ul>
        const image = document.createElement("img"); // <img>

        // STEP 10f: Set the textContent property for each of the above elements (except the UL), based on the JSON content
        h2.textContent = flavors[i].name;
        p1.textContent = `Calories: ${flavors[i].calories}`; // "Calories: " + flavors[i].calories
        p2.textContent = `Type: ${flavors[i].type}`;
        image.setAttribute("src", `images/${flavors[i].image}`); // <img src="images/chocolate-mint.svg">
        // STEP 10g: Build a loop for the ingredients array in the JSON
        var ingredients = flavors[i].ingredients;
        for (let j = 0; j < ingredients.length; j++) {
            console.log(ingredients[j]);
            const listItem = document.createElement("li"); // <li></li>
            listItem.textContent = ingredients[j]; // <li>chocolate syrup</li>
            list.appendChild(listItem); // <ul><li>chocolate syrup</li></ul>
            // after each j for-loop, <ul><li>chocolate syrup</li><li>peppermint sprinkle</li></ul>
        }

        // STEP 10i: Append each complete ARTICLE element to the SECTION element
        article.appendChild(h2);
        article.appendChild(p1);
        article.appendChild(p2);
        article.appendChild(image);
        article.appendChild(list);
        section.appendChild(article);
    }
};

// STEP 11: Add a 3rd flavour of ice cream to the local JSON file, making use of the /images/strawberry-sprinkle.svg image

// Lab: Extend the JavaScript application built in class to include two more flavors of ice cream.

// This page inspired by and adapted from https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/JSON

// A special thanks to https://openclipart.org/detail/285225/ice-cream-cones for the awesome ice cream cone illustrations