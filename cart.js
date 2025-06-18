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

    const DH_TO_USD_RATE = 0.10;

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
                const priceNumber = parseFloat(String(item.price).replace(/[^0-9.-]+/g, ""));
                if (!item.quantity) {
                    item.quantity = 1;
                }
                totalPrice += priceNumber * item.quantity;
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';

                let sizeSelectorHtml = '';
                if (item.category === 'kids') {
                    sizeSelectorHtml = `
                        <div class="cart-item-selector">
                            <label for="age-select-${index}">Age:</label>
                            <select name="age" id="age-select-${index}" onchange="updateCartOption(${index}, 'size', this.value)">
                                <option value="1-2Y" ${item.size === '1-2Y' ? 'selected' : ''}>1-2Y</option>
                                <option value="3-4Y" ${!item.size || item.size === '3-4Y' ? 'selected' : ''}>3-4Y</option>
                                <option value="5-6Y" ${item.size === '5-6Y' ? 'selected' : ''}>5-6Y</option>
                            </select>
                        </div>
                    `;
                } else {
                    sizeSelectorHtml = `
                        <div class="cart-item-selector">
                            <label for="size-select-${index}">Size:</label>
                            <select name="size" id="size-select-${index}" onchange="updateCartOption(${index}, 'size', this.value)">
                                <option value="S" ${item.size === 'S' ? 'selected' : ''}>S</option>
                                <option value="M" ${!item.size || item.size === 'M' ? 'selected' : ''}>M</option>
                                <option value="L" ${item.size === 'L' ? 'selected' : ''}>L</option>
                                <option value="XL" ${item.size === 'XL' ? 'selected' : ''}>XL</option>
                            </select>
                        </div>
                    `;
                }

                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h3>${item.name}</h3>
                        <p>$${priceNumber.toFixed(2)}</p>
                        <div class="cart-item-selector">
                            <label>Color:</label>
                            <span style="padding: 6px 8px; font-family: 'Segoe UI', Arial, sans-serif; font-size: 0.95rem;">Original (As in photo)</span>
                        </div>
                        ${sizeSelectorHtml}
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
