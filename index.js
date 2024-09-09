import { menuArray } from "./data.js";
const itemsList = document.getElementById("item-list");
const cartList = document.getElementById("cart-list");
const cartListContainer = document.getElementById("cart-list-container");
let addedItemsinCart = [];

//event listener to handle adding items to the cart once + button is clicked
document.addEventListener("click", function (e) {
  if (e.target.dataset.buy) {
    const newCartItem = e.target.dataset.buy;
    addedItemsinCart.push(newCartItem);
    cartListContainer.style.display = "block";
    showCart();
  }
});

//function to generate HTML for the menu items
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
// function to show menu items
function showMenu() {
  itemsList.innerHTML = getMenuHTML();
}
showMenu();

// function to generate HTML for shopping cart items
function getShoppingCart() {
  let shoppingCart = "";
  addedItemsinCart.forEach(function (itemId) {
    const cartItem = menuArray.find(function (item) {
      return item.id === itemId;
    });

    if (cartItem) {
      shoppingCart += `<div class="cart-items">
    <div class="item-and-remove">
      <p class="cart-item-name">${cartItem.name}</p>
      <button
        type="button"
        class="remove-btn"
        data-remove="${cartItem.id}"
      >
        remove
      </button>
    </div>
    <p class="cart-item-name">
      <span class="dollar-sign-cart">$</span>${cartItem.price}
    </p>
  </div>`;
    }
  });
  return shoppingCart;
}

//function to show shopping cart items
function showCart() {
  cartList.textContent = getShoppingCart();
}
showCart();

//function to add items to cart
function addToCart(itemId) {
  const newCartItem = menuArray.find(function (item) {
    return item.id === itemId;
  });

  if (newCartItem) {
    addedItemsinCart.push(newCartItem);
  }
}
