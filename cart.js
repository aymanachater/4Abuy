function updateCartOption(index, option, value) {
    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    if (cart[index]) {
        cart[index][option] = value;
        localStorage.setItem('cart', JSON.stringify(cart));
        renderCartItems(); 
    }
}

function updateCartCount() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalQuantity = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const cartCountSpan = document.getElementById('cart-count');
    if (cartCountSpan) {
        cartCountSpan.textContent = totalQuantity;
    }
}

function saveCart(cart) {
    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartCount();
}

function renderCartItems() {
    const cartItemsContainer = document.getElementById('cart-items');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    if (!cartItemsContainer) return;

    cartItemsContainer.innerHTML = '';
    if (cart.length === 0) {
        cartItemsContainer.innerHTML = '<div class="cart-empty-message">Your cart is empty</div>';
        document.getElementById('cart-total').textContent = 'Total Price: 0.00 DH';
        if (typeof renderPayPalButton === 'function') {
            renderPayPalButton();
        }
        return;
    }

    let totalPrice = 0;
    cart.forEach((item, index) => {
        const priceNumber = parseFloat(String(item.price).replace(/[^0-9.-]+/g, ""));
        item.quantity = item.quantity || 1;
        totalPrice += priceNumber * item.quantity;
        
        const cartItem = document.createElement('div');
        cartItem.className = 'cart-item';
        cartItem.innerHTML = `
            <img src="${item.image}" alt="${item.name}">
            <div class="cart-item-details">
                <h3>${item.name}</h3>
                <p>${priceNumber.toFixed(2)} DH</p>
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
            </div>`;
        cartItemsContainer.appendChild(cartItem);
    });

    document.getElementById('cart-total').textContent = `Total Price: ${totalPrice.toFixed(2)} DH`;
    
    // Re-render PayPal button with the new total
    if (typeof renderPayPalButton === 'function') {
        renderPayPalButton();
    }
}

document.addEventListener('DOMContentLoaded', () => {
    updateCartCount();
    renderCartItems();

    const cartItemsContainer = document.getElementById('cart-items');
    if (cartItemsContainer) {
        cartItemsContainer.addEventListener('click', event => {
            const target = event.target;
            const index = parseInt(target.dataset.index, 10);
            let cart = JSON.parse(localStorage.getItem('cart')) || [];

            if (target.classList.contains('cart-item-remove')) {
                cart.splice(index, 1);
                saveCart(cart);
                renderCartItems();
            } else if (target.classList.contains('plus-btn')) {
                if (cart[index]) {
                    cart[index].quantity++;
                    saveCart(cart);
                    renderCartItems();
                }
            } else if (target.classList.contains('minus-btn')) {
                if (cart[index] && cart[index].quantity > 1) {
                    cart[index].quantity--;
                    saveCart(cart);
                    renderCartItems();
                }
            }
        });
    }
});
