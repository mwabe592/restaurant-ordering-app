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
  let itemId;

  if (e.target.dataset.buy) {
    itemId = parseInt(e.target.dataset.buy);
    addToCart(itemId);
  } else if (e.target.dataset.remove) {
    itemId = parseInt(e.target.dataset.remove);
    removeItemfromCart(itemId);
  }
  if (itemId) {
    updateCart();
    console.log("Items in Cart:", addedItemsInCart);
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

//function to add items to cart
// function addToCart(itemId) {
//   addedItemsInCart.push(itemId);
//   cartListContainer.style.display = "block";
// }

function addToCart(itemId) {
  const existingItem = addedItemsInCart.find((id) => id === itemId);
  if (!existingItem) {
    addedItemsInCart.push(itemId);
  }
  cartListContainer.style.display = "block";
}

//function to remove item from cart
function removeItemfromCart(itemIdToRemove) {
  const indexToRemove = addedItemsInCart.indexOf(itemIdToRemove);

  if (indexToRemove !== -1) {
    addedItemsInCart.splice(indexToRemove, 1);
  }
}

function getTotalPrice() {
  // reduce takes in callback function and the initial value which is going to be 0
  const total = addedItemsInCart.reduce((total, itemId) => {
    // find the item in the menuArray
    const item = menuArray.find((item) => item.id === itemId);

    // if the item in the menuArray is found, then add it to the total, otherwise just have total
    return item ? total + item.price : total;
  }, 0);

  totalPrice.textContent = total;
}

function updateCart() {
  showCart();
  getTotalPrice();
}
