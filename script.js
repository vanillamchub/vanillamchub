let cart = [];

function addToCart(item, price) {
  cart.push({item, price});
  document.getElementById("cart-counter").innerText = "🛒 Cart: " + cart.length + " items selected";
}

function filterCategory(category) {
  let packages = document.querySelectorAll(".package");
  packages.forEach(pkg => {
    if (pkg.getAttribute("data-category") === category) {
      pkg.style.display = "block";
    } else {
      pkg.style.display = "none";
    }
  });
}
