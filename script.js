let cart = [];

// Add item to cart
function addToCart(item, price) {
  cart.push({item, price});
  updateCart();
}

// Remove item from cart
function removeFromCart(item) {
  cart = cart.filter(p => p.item !== item);
  updateCart();
}

// Cancel entire cart
function cancelCart() {
  cart = [];
  updateCart();
}

// Buy cart items → Show payment options
function buyCart() {
  if (cart.length === 0) {
    alert("Cart is empty!");
    return;
  }
  document.getElementById('payment-section').style.display = 'block';
}

// Update Cart UI
function updateCart() {
  const list = document.getElementById("cart-list");
  const total = document.getElementById("total");
  list.innerHTML = "";
  let sum = 0;
  cart.forEach(p => {
    const li = document.createElement("li");
    li.innerText = `${p.item} - ${p.price} BDT`; // USD → BDT
    list.appendChild(li);
    sum += p.price;
  });
  total.innerText = `Total: ${sum.toFixed(2)} BDT`; // USD → BDT
}

// Payment Section
let selectedPayment = "";

function choosePayment(method) {
  selectedPayment = method;
  document.getElementById('payment-input').style.display = 'block';
  document.getElementById('number-label').innerText = `Enter your ${method} Number:`;
}

function confirmPayment() {
  const number = document.getElementById('payment-number').value;
  if (!number) {
    alert("Please enter your number!");
    return;
  }
  const total = cart.reduce((a,b)=>a+b.price,0).toFixed(2);
  alert(`Payment Method: ${selectedPayment}\nNumber: ${number}\nTotal: ${total} BDT`);
  cart = [];
  updateCart();
  document.getElementById('payment-section').style.display = 'none';
  document.getElementById('payment-input').style.display = 'none';
  document.getElementById('payment-number').value = '';
}
