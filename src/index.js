// Step 1: Download the template and open it with VS Code ✅
// Step 2: Explore the HTML and the data ✅
// Step 3: Read the instructions carefully ✅
// Step 4: Query the elements that we will need to use from the page ✅
// Step 5: Create a function for every action we will need to perform (i.e. addDogListItem, displayDog) ✅
// Step 6: Start writing one function at a time, testing along the way to make sure things work the way we expect them to ✅
// Step 7: Call the functions when we need to (i.e. call addDogListItem for each dog available when the app starts, call displayDog when we click a dog list item, etc) ✅

// Instructions
// - Render the top list of dogs using the list item template you'll find on the HTML file ✅
// - Each list item should be clickable. When you click on an item, the selected dog should display on the main card ✅
// - The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file. ✅
// - There should be only one card at the time on the screen ✅
// - The card should have a button that toggles for the selected dog between good dog/ bad dog ✅

// Tips
// - Take advantage of scope in JS to have access to the data you need
// - Remember you can add event listeners to any element on the page

//We need to add the dog in the list
let dogsList = document.querySelector(".dogs-list");

// We need the section where the dog clicked will be displayed
let dogSection = document.querySelector(".main__dog-section");

//Add dog li elments to the list
function addDogListitem(dog) {
  let dogListItem = document.createElement("li");
  dogListItem.className = "dogs-list__button";
  dogListItem.textContent = dog.name;
  dogListItem.addEventListener("click", () => {
    displayDog(dog);
  });

  dogsList.append(dogListItem);
}
//Show the dog list
for (let dog of data) {
  addDogListitem(dog);
}

function displayDog(dog) {
  // Remove previous content
  dogSection.textContent = "";

  // Add dog info
  let h2El = document.createElement("h2");
  h2El.textContent = dog.name;
  let imgEl = document.createElement("img");
  imgEl.src = dog.image;
  let divEl = document.createElement("div");
  divEl.className = "main__dog-section__desc";
  let h3El = document.createElement("h3");
  h3El.textContent = "Bio";
  let pEl = document.createElement("p");
  pEl.textContent = dog.bio;
  let divEl1 = document.createElement("div");
  divEl1.className = "main__dog-section__btn";
  let pEl1 = document.createElement("p");
  dog.isGoodDog === true
    ? (pEl1.textContent = "Is naughty? No!")
    : (pEl1.textContent = "Is naughty? Yes!");
  //   let emEl = document.createElement("em");
  //   emEl.textContent = "Is naughty?";
  let buttonEl = document.createElement("button");
  buttonEl.textContent = `${dog.isGoodDog ? "Good Dog" : "Bad Dog"}`;
  buttonEl.addEventListener("click", () => {
    dog.isGoodDog = !dog.isGoodDog;
    buttonEl.textContent = `${dog.isGoodDog ? "Good Dog" : "Bad Dog"}`;
    pEl1.textContent = `${
      dog.isGoodDog ? "Is naughty? No!" : "Is naughty? Yes!"
    }`;
  });

  dogSection.append(h2El, imgEl, divEl, divEl1);
  divEl.append(h3El, pEl);
  divEl1.append(pEl1, buttonEl);
  //   pEl1.append(emEl, dog.isGoodDog ? " Yes!" : " No!");
}

displayDog(data[1]);
displayDog(data[2]);
displayDog(data[3]);
displayDog(data[4]);
displayDog(data[5]);
displayDog(data[6]);
displayDog(data[0]);

// Challenge
// You might have noticed there's a plus button at the beginning of the top row. Add the behaviour to it. When clicked, it should replace the main card with a form to add a new dog to the list.
// You'll find a template for the form on the HTML page. Once the form is submitted, add the new dog to the beginning of the list, right next to the plus button.

// I will try to complete this tomorrow morning!!!
