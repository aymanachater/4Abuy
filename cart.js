document.addEventListener('DOMContentLoaded', () => {
    const cartItemsContainer = document.getElementById('cart-items');
    const cartCount = document.getElementById('cart-count');
    let cart = JSON.parse(localStorage.getItem('cart')) || [];

    function updateCartCount() {
        // Update cart count to total quantity of all items
        const totalQuantity = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
        cartCount.textContent = totalQuantity;
    }

    function saveCart() {
        localStorage.setItem('cart', JSON.stringify(cart));
    }

    function renderCartItems() {
        if (cartItemsContainer) {
            cartItemsContainer.innerHTML = '';
            if (cart.length === 0) {
                cartItemsContainer.innerHTML = '<p>Your cart is empty.</p>';
                document.getElementById('cart-total').textContent = 'Total Price: $0.00';
                return;
            }
            let totalPrice = 0;
            cart.forEach((item, index) => {
                // Parse price number from string like "$110.00"
                const priceNumber = parseFloat(item.price.replace(/[^0-9.-]+/g,""));
                // Default quantity to 1 if not set
                if (!item.quantity) {
                    item.quantity = 1;
                }
                totalPrice += priceNumber * item.quantity;
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `
                    <img src="${item.image}" alt="${item.name}">
                    <div class="cart-item-details">
                        <h3>${item.name}</h3>
                        <p>${item.price}</p>
                        <label for="quantity-${index}">Quantity:</label>
                        <input type="number" id="quantity-${index}" class="quantity-input" data-index="${index}" min="1" value="${item.quantity}" style="width: 60px; margin-left: 10px;">
                    </div>
                    <button class="cart-item-remove" data-index="${index}">Remove</button>
                `;
                cartItemsContainer.appendChild(cartItem);
            });
            document.getElementById('cart-total').textContent = `Total Price: $${totalPrice.toFixed(2)}`;
            saveCart();
            updateCartCount();
            addQuantityInputListeners();
        }
    }

    function addQuantityInputListeners() {
        const quantityInputs = document.querySelectorAll('.quantity-input');
        quantityInputs.forEach(input => {
            input.addEventListener('change', event => {
                const index = event.target.dataset.index;
                let newQuantity = parseInt(event.target.value);
                if (isNaN(newQuantity) || newQuantity < 1) {
                    newQuantity = 1;
                    event.target.value = 1;
                }
                cart[index].quantity = newQuantity;
                saveCart();
                renderCartItems();
            });
        });
    }

    function addToCart(product) {
        cart.push(product);
        saveCart();
        updateCartCount();
    }

    function removeFromCart(index) {
        cart.splice(index, 1);
        saveCart();
        updateCartCount();
        renderCartItems();
    }

    // Event delegation for adding to cart on the home page
    document.body.addEventListener('click', event => {
        if (event.target.classList.contains('shop-now')) {
            event.preventDefault();
            const productCard = event.target.closest('.product-card');
            const product = {
                name: productCard.querySelector('h3').textContent,
                price: productCard.querySelector('.price').textContent,
                image: productCard.querySelector('img').src
            };
            addToCart(product);
        }
    });

    // Event delegation for removing from cart on the cart page
    if (cartItemsContainer) {
        cartItemsContainer.addEventListener('click', event => {
            if (event.target.classList.contains('cart-item-remove')) {
                const index = event.target.dataset.index;
                removeFromCart(index);
            }
        });
    }

    updateCartCount();
    renderCartItems();
});
