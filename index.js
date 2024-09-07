import { menuArray } from "./data.js";

const itemsList = document.getElementById("item-list");
const payButton = document.getElementById("pay-btn");

function getMenuHTML() {
  let menuHTML = "";
  menuArray.forEach(function (item) {
    menuHTML += 

    // copy in the div for the menu from html
  });
  return menuHTML;
}
console.log(getMenuHTML);

function showMenu() {
  itemsList.innerHTML = getMenuHTML;
}

payButton.addEventListener("click", showMenu);
{
  console.log("this button isclcickdm");
}
// // This is going to be the render items function that wil
// // change the innerhtml of the shop-item-line div. remember to add
// the item values as template strings linking to the data.js file object
// <div class="shop-item-line">
//
