function updateCartOption(index, option, value) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index]) {
        cart[index][option] = value;
        localStorage.setItem('cart', JSON.stringify(cart));
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    // Exchange Rate (This should ideally be consistent across all files or fetched dynamically)
    const DH_TO_USD_RATE = 0.10; // Example: 1 DH = 0.10 USD (as of 2025-06-18, check current rate for accuracy)

    function updateCartCount() {
        const totalQuantity = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        if (cartCount) {
            cartCount.textContent = totalQuantity;
        }
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function renderCartItems() {
        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = '';
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<div class="cart-empty-message">Your cart is empty</div>';
                document.getElementById('cart-total').textContent = 'Total Price: $0.00';
                const paypalContainer = document.getElementById('paypal-button-container');
                if (paypalContainer) paypalContainer.style.display = 'none';
                return;
            }

            const paypalContainer = document.getElementById('paypal-button-container');
            if (paypalContainer) paypalContainer.style.display = 'block';

            let totalPrice = 0;
            cart.forEach((item, index) => {
                // Ensure price is treated as a number, and if it somehow comes from DH, convert it.
                // Assuming prices stored in local storage are already in USD from other pages.
                const priceNumber = parseFloat(String(item.price).replace(/[^0-9.-]+/g, ""));
                if (!item.quantity) {
                    item.quantity = 1;
                }
                totalPrice += priceNumber * item.quantity;
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';

                // This part generates the HTML for each item in the cart
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h3>${item.name}</h3>
                        <p>$${priceNumber.toFixed(2)}</p>

                        <div class="cart-item-selector">
                            <label for="color-select-${index}">Color:</label>
                            <select name="color" id="color-select-${index}" onchange="updateCartOption(${index}, 'color', this.value)">
                                <option value="Original" ${!item.color || item.color === 'Original' ? 'selected' : ''}>Original (As in photo)</option>
                                <option value="Black" ${item.color === 'Black' ? 'selected' : ''}>Black</option>
                                <option value="White" ${item.color === 'White' ? 'selected' : ''}>White</option>
                            </select>
                        </div>

                        <div class="cart-item-selector">
                            <label for="size-select-${index}">Size:</label>
                            <select name="size" id="size-select-${index}" onchange="updateCartOption(${index}, 'size', this.value)">
                                <option value="S" ${item.size === 'S' ? 'selected' : ''}>S</option>
                                <option value="M" ${!item.size || item.size === 'M' ? 'selected' : ''}>M</option>
                                <option value="L" ${item.size === 'L' ? 'selected' : ''}>L</option>
                                <option value="XL" ${item.size === 'XL' ? 'selected' : ''}>XL</option>
                            </select>
                        </div>
                        
                        <div class="cart-item-selector">
                            <label for="quantity-input-${index}">Quantity:</label>
                            <div class="quantity-selector">
                                <button class="quantity-btn minus-btn" data-index="${index}">-</button>
                                <input type="text" id="quantity-input-${index}" class="quantity-input" value="${item.quantity}" readonly>
                                <button class="quantity-btn plus-btn" data-index="${index}">+</button>
                            </div>
                        </div>
                        
                        <button class="cart-item-remove" data-index="${index}">Remove</button>
                    </div>
                `;
                cartItemsContainer.appendChild(cartItem);
            });
            document.getElementById('cart-total').textContent = `Total Price: $${totalPrice.toFixed(2)}`;
            saveCart();
            updateCartCount();
        }
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        saveCart();
        updateCartCount();
        renderCartItems();
    }

    if (cartItemsContainer) {
        cartItemsContainer.addEventListener('click', event => {
            const target = event.target;
            const index = target.dataset.index;

            if (target.classList.contains('cart-item-remove')) {
                removeFromCart(index);
            } else if (target.classList.contains('plus-btn')) {
                cart[index].quantity++;
                saveCart();
                renderCartItems();
            } else if (target.classList.contains('minus-btn')) {
                if (cart[index].quantity > 1) {
                    cart[index].quantity--;
                    saveCart();
                    renderCartItems();
                }
            }
        });
    }

    updateCartCount();
    renderCartItems();
});
