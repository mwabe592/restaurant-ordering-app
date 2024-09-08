import { menuArray } from "./data.js";
const itemsList = document.getElementById("item-list");
const cartList = document.getElementById("cart-list");
let addedItemsinCart = [];

//setup event listener for add and remove buttons using an if else statement
const addBtns = document.querySelectorAll(".add-btn");
addBtns.forEach(function (btn) {
  btn.addEventListener("click", function (e) {
    console.log(e.target.dataset);
  });
});
function getMenuHTML() {
  let menuHTML = "";
  menuArray.forEach(function (item) {
    menuHTML += `<div class="shop-item-line">
          <div class="shop-item">
            <img src="${item.emoji}" class="emoji" />
            <div class="item-info">
              <p class="item-name">${item.name}</p>
              <p class="item-ingredients">${item.ingredients}</p>
              <p class="item-price"><span class="dollar-sign">$</span>${item.price}</p>
            </div>
          </div>
          <button
            data-buy="${item.id}"
            type="button"
            class="add-btn"
            id="add-btn"
          >
            +
          </button>
        </div>`;
  });
  return menuHTML;
}

function showMenu() {
  itemsList.innerHTML = getMenuHTML();
}
showMenu();
//created 2 functions for DOM efficiency
function getShoppingCart() {
  let shoppingCart = "";
  addedItemsinCart.forEach(function (item) {
    shoppingCart += `<div class="cart-items" id="cart-items">
    <div class="item-and-remove">
      <p class="cart-item-name">${item.name}</p>
      <button
        type="button"
        class="remove-btn"
        id="remove-btn"
        data-remove="${index}"
      >
        remove
      </button>
    </div>
    <p class="cart-item-name">
      <span class="dollar-sign-cart">$ </span>20
    </p>
  </div>`;
  });
  return shoppingCart;
}

function showCart() {
  cartList.innerHTML = getShoppingCart();
}
showCart();

// <!-- need to look into why data property above is index -->

function addToCart() {
  const newCartItem = menuArray.filter(function (itemId) {
    return item.id == itemId;
  });
  addedItemsinCart.push(newCartItem);
  //and then we want to render out the cart once above function has run
}

/*code above is how to add the items to cart once they are clicked.
Need to attach this to an event listener at some point*/
