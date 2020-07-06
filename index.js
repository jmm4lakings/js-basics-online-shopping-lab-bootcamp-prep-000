var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(item) {
var price = Math.floor(Math.random() * 99 + 1);
 var newItem = {[item]: price};
 console.log(`${item} has been added to your cart.`);
 cart.push(newItem);
 return cart;
}	

function viewCart() {
  if(cart.length == 0) {
    console.log('Your shopping cart is empty.');
  } else {
    var message = 'In your cart, you have ';
    var item = cart[0];
    var itemName = Object.keys(item)[0];
    var itemPrice = item[itemName];
    message += `${itemName} at $${itemPrice}`;
    if(cart.length == 2) {
      var item2 = cart[1];
      var itemName2 = Object.keys(item2)[0];
      var itemPrice2 = item2[itemName2];
      message += ` and ${itemName2} at $${itemPrice2}`;
    } else if(cart.length >= 3) {
      for(let i = 1; i < cart.length - 1; i++) {
        var varItem = cart[i];
        var varItemName = Object.keys(varItem)[0];
        var varItemPrice = varItem[varItemName];
        message += `, ${varItemName} at $${varItemPrice}`;
      }
      var lastItem = cart[cart.length - 1];
      var lastItemName = Object.keys(lastItem)[0];
      var lastItemPrice = lastItem[lastItemName];
      message += `, and ${lastItemName} at $${lastItemPrice}`;
    }
    message += '.';
    console.log(message);
  }

function total() {
   


function removeFromCart(item) {
  let itemInCart = false

  for (let i = 0, l = cart.length; i < l; i++) {
    if (cart[i].hasOwnProperty(item)) {
      itemInCart = true
      cart = cart.slice(0, i).concat(cart.slice(i + 1))
    }
  }
}

function placeOrder(cardNumber) {
  if (!cardNumber) {
    return console.log("We don't have a credit card on file for you to place your order.")
  }

  console.log(`Your total cost is $${total()}, which will be charged to the card ${cardNumber}.`)

  cart = []
}

