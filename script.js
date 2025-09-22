<script>
  let cart = [];

  function addToCart(item, price) {
    // চেক করে যদি আগেই থাকে তাহলে যোগ না করে duplicate
    if (!cart.find(p => p.item === item)) {
      cart.push({item, price});
      showNotification(`${item} added to cart!`, "add");
    } else {
      showNotification(`${item} is already in cart!`, "info");
    }
    updateCart();
  }
