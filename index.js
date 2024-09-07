import { menuArray } from "./data.js";

function getMenuHTML() {
  let menuHTML = "";
  menuArray.forEach(function (item) {
    // copy in the div for the menu from html
  });
  return menuHTML;
}
console.log(getMenuHTML);

function showMenu() {
  itemsList.innerHTML = getMenuHTML;
}
// having 2 funcitons makes it more efficient because the DOM only has
// to be manipulated once and not after each iteration
