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

  function removeFromCart(item) {
    cart = cart.filter(p => p.item !== item);
    showNotification(`${item} removed from cart!`, "delete");
    updateCart();
  }

  function cancelCart() {
    cart = [];
    showNotification("Cart cleared!", "delete");
    updateCart();
  }

  function buyCart() {
    if (cart.length === 0) {
      alert("Cart is empty!");
      return;
    }
    alert("Proceeding to payment...");
  }

  function updateCart() {
    const list = document.getElementById("cart-list");
    const total = document.getElementById("total");
    list.innerHTML = "";
    let sum = 0;
    cart.forEach(p => {
      let li = document.createElement("li");
      li.innerText = `${p.item} - ${p.price} USD`;
      li.style.margin = "5px 0";
      li.style.padding = "5px";
      li.style.background = "#333";
      li.style.borderRadius = "5px";
      list.appendChild(li);
      sum += p.price;
    });
    total.innerText = `Total: ${sum.toFixed(2)} USD`;
  }

  function showNotification(message, type) {
    const notif = document.createElement("div");
    notif.innerText = message;
    notif.style.position = "fixed";
    notif.style.top = "20px";
    notif.style.right = "20px";
    notif.style.padding = "10px 20px";
    notif.style.borderRadius = "8px";
    notif.style.color = "#fff";
    notif.style.fontWeight = "bold";
    notif.style.zIndex = 1000;

    if(type === "add") notif.style.background = "green";
    else if(type === "delete") notif.style.background = "red";
    else notif.style.background = "blue";

    document.body.appendChild(notif);

    setTimeout(() => {
      notif.remove();
    }, 2000);
  }
</script>

