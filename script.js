let cart = [];

// Add item to cart
function addToCart(item, price) {
  if (!cart.find(p => p.item === item)) {
    cart.push({item, price});
  }
  updateCart();
}

// Remove item from cart
function removeFromCart(item) {
  cart = cart.filter(p => p.item !== item);
  updateCart();
}

// Cancel the entire cart
function cancelCart() {
  cart = [];
  updateCart();
}

// Buy cart items
function buyCart() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  let items = cart.map(p => p.item).join(", ");
  let total = cart.reduce((sum, p) => sum + p.price, 0).toFixed(2);
  alert(`Proceeding to payment for:\n${items}\nTotal: ${total} USD`);
}

// Update Cart UI
function updateCart() {
  const list = document.getElementById("cart-list");
  const total = document.getElementById("total");
  list.innerHTML = "";
  let sum = 0;
  cart.forEach(p => {
    const li = document.createElement("li");
    li.innerText = `${p.item} - ${p.price} USD`;
    list.appendChild(li);
    sum += p.price;
  });
  total.innerText = `Total: ${sum.toFixed(2)} USD`;
}
