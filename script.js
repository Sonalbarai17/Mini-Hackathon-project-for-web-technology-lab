const productsElement = document.getElementById("products");
const statusElement = document.getElementById("status");
const cartItemsElement = document.getElementById("cartItems");
const totalElement = document.getElementById("total");
const cartCountElement = document.getElementById("cartCount");
const clearCartButton = document.getElementById("clearCart");

let products = [];
let cart = [];

async function loadProducts() {
  try {
    const response = await fetch("https://dummyjson.com/products?limit=12");
    if (!response.ok) throw new Error("API request failed");
    const data = await response.json();
    products = data.products.map(p => ({
      id: p.id, title: p.title, price: p.price,
      thumbnail: p.thumbnail, category: p.category
    }));
    statusElement.textContent = "Products loaded successfully.";
    renderProducts();
  } catch (error) {
    statusElement.textContent = "Could not load API products. Check your internet and refresh.";
    console.error(error);
  }
}

function renderProducts() {
  // map() creates the product cards from the products array.
  productsElement.innerHTML = products.map(product => `
    <article class="product">
      <img src="${product.thumbnail}" alt="${product.title}" />
      <h3>${product.title}</h3>
      <p>${product.category}</p>
      <p class="price">₹${product.price.toFixed(2)}</p>
      <button data-id="${product.id}" class="addButton">Add to Cart</button>
    </article>
  `).join("");
}

function addToCart(productId) {
  const product = products.find(p => p.id === productId);
  if (!product) return;
  const existing = cart.find(item => item.id === productId);
  if (existing) existing.quantity += 1;
  else cart.push({ ...product, quantity: 1 });
  renderCart();
}

function removeFromCart(productId) {
  // filter() removes the selected product from the cart.
  cart = cart.filter(item => item.id !== productId);
  renderCart();
}

function renderCart() {
  cartItemsElement.innerHTML = cart.map(item => `
    <li>
      ${item.title} × ${item.quantity}
      — ₹${(item.price * item.quantity).toFixed(2)}
      <button class="remove" data-remove-id="${item.id}">Remove</button>
    </li>
  `).join("");
  // reduce() calculates the cart total; reduce() also calculates total item count.
  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const count = cart.reduce((sum, item) => sum + item.quantity, 0);
  totalElement.textContent = total.toFixed(2);
  cartCountElement.textContent = count;
}

productsElement.addEventListener("click", event => {
  const button = event.target.closest(".addButton");
  if (button) addToCart(Number(button.dataset.id));
});
cartItemsElement.addEventListener("click", event => {
  const button = event.target.closest("[data-remove-id]");
  if (button) removeFromCart(Number(button.dataset.removeId));
});
clearCartButton.addEventListener("click", () => {
  cart = [];
  renderCart();
});

loadProducts();
