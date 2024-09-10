import { menuArray } from "./data.js";
const itemsList = document.getElementById("item-list");
const cartList = document.getElementById("cart-list");
const cartListContainer = document.getElementById("cart-list-container");
const totalPrice = document.getElementById("total-price");
const completeBtn = document.getElementById("complete-btn");
const cardDetails = document.getElementById("card-details");
let addedItemsInCart = [];

//event handling for adding and removing items to cart
document.addEventListener("click", function (e) {
  if (e.target.dataset.buy) {
    const newCartItem = parseInt(e.target.dataset.buy);
    addedItemsInCart.push(newCartItem);
    cartListContainer.style.display = "block";
    showCart();
    getTotalPrice();
  }
  if (e.target.dataset.remove) {
    const itemIdToRemove = parseInt(e.target.dataset.remove);
    removeItemfromCart(itemIdToRemove);
    getTotalPrice();
  }
});

//event listener for complete button
completeBtn.addEventListener("click", function (e) {
  cardDetails.style.display = "inline";
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

  addedItemsInCart.forEach(function (itemId) {
    // Find the corresponding item from menuArray
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
    <p class="cart-item-price">
      <span class="dollar-sign-cart">$</span>${cartItem.price}
    </p>
  </div>`;
    }
  });
  return shoppingCart;
}

//function to show shopping cart items
function showCart() {
  cartList.innerHTML = getShoppingCart();
}
showCart();

//function to add items to cart
function addToCart(itemId) {
  const newCartItem = menuArray.find(function (item) {
    return item.id === itemId;
  });

  if (newCartItem) {
    addedItemsInCart.push(newCartItem);
  }
}
//function to remove item from cart
function removeItemfromCart(itemIdToRemove) {
  const indexToRemove = addedItemsInCart.indexOf(itemIdToRemove);

  if (indexToRemove !== -1) {
    addedItemsInCart.splice(indexToRemove, 1);
  }

  showCart();
}

// This has not worked maybe look into how to use the reduce method to
// add the totalprice
// function getTotalPrice() {
//   let price = 0;
//   addedItemsInCart.forEach(function (item) {
//     price = +item.price;
//   });
//   totalPrice.textContent = price;
// }
