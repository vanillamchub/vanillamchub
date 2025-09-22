let cart = [];

function addToCart(item, price) {
  cart.push({item, price});
  alert(item + " added to cart! (Total items: " + cart.length + ")");
}
