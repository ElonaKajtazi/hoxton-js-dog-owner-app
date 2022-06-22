// Instructions
// - Render the top list of dogs using the list item template you'll find on the HTML file
// - Each list item should be clickable. When you click on an item, the selected dog should display on the main card
// - The main card should contain all the information from the selected dog. Follow the template for the main card that you'll find on the HTML file.
// - There should be only one card at the time on the screen
// - The card should have a button that toggles for the selected dog between good dog/ bad dog

// Tips
// - Take advantage of scope in JS to have access to the data you need
// - Remember you can add event listeners to any element on the page

//We need to add the dog in the list
let dogsList = document.querySelector(".dogs-list");

// We need the section where the dog clicked will be displayed
let dogSection = document.querySelector(".main__dog-section");

function addDogListitem(dog) {
  // <li class="dogs-list__button">Mr. Bonkers</li>
  let dogListItem = document.createElement("li");
  dogListItem.className = "dogs-list__button";
  dogListItem.textContent = dog.name;
  dogListItem.addEventListener("click", () => {
    displayDog(dog);
  });

  dogsList.append(dogListItem);
}
for (let dog of data) {
  addDogListitem(dog);
}

function displayDog(dog) {
  dogSection.textContent = "";

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

  let emEl = document.createElement("em");
  emEl.textContent = "Is naughty?";
  let buttonEl = document.createElement("button");
  buttonEl.textContent = `${dog.isGoodDog ? "Good Dog" : "Bad Dog"}`;
  buttonEl.addEventListener("click", () => {
    dog.isGoodDog = !dog.isGoodDog;
    buttonEl.textContent = `${dog.isGoodDog ? "Good Dog" : "Bad Dog"}`;
  });


  dogSection.append(h2El, imgEl, divEl, divEl1);
  divEl.append(h3El, pEl);
  divEl1.append(emEl, pEl1, emEl, buttonEl);
  pEl1.append(emEl, " yes");
}
displayDog(data[0]);
displayDog(data[1]);
displayDog(data[2]);
displayDog(data[3]);
displayDog(data[4]);
displayDog(data[5]);
displayDog(data[6]);
