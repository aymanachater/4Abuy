// 4Abuy - Main JavaScript File

document.addEventListener('DOMContentLoaded', () => {
  // --- MASTER PRODUCTS LIST ---
  const products = [
    // Autumn Collection
    { name: "VARSITY POLO CROP TOP", price: "350", image: "https://res.cloudinary.com/dav8t2igs/image/upload/v1750180851/Screenshot_20250617_181650_Gallery_suych0.jpg", url: "autumn-collection.html" },
    { name: "MEN'S RELAXED FIT POLO", price: "350", image: "https://res.cloudinary.com/dav8t2igs/image/upload/v1750180851/Screenshot_20250617_181659_Gallery_nxmaz7.jpg", url: "autumn-collection.html" },
    { name: "SUMMER MEADOW DRESS", price: "750", image: "https://res.cloudinary.com/dav8t2igs/image/upload/v1750180852/Screenshot_20250617_181628_Gallery_cvryuy.jpg", url: "autumn-collection.html" },
    { name: "GUIRENIAO MEN'S POLO SHIRT", price: "350", image: "https://res.cloudinary.com/dav8t2igs/image/upload/v1750180862/Screenshot_20250617_181211_Gallery_y1cfyx.jpg", url: "autumn-collection.html" },
    { name: "MEN'S LIGHT BLUE JEANS", price: "400", image: "https://res.cloudinary.com/dav8t2igs/image/upload/v1750180856/Screenshot_20250617_181457_Gallery_ztknre.jpg", url: "autumn-collection.html" },
    { name: "THE FLORA DRESS", price: "750", image: "https://res.cloudinary.com/dav8t2igs/image/upload/v1750180853/Screenshot_20250617_181601_Gallery_rnpkwg.jpg", url: "autumn-collection.html" },
    // Everyday Luxe
    { name: "PROVENCAL GARDEN DRESS", price: "750", image: "https://res.cloudinary.com/dav8t2igs/image/upload/v1750180852/Screenshot_20250617_181638_Gallery_ixl6bn.jpg", url: "everyday-luxe.html" },
    { name: "BLUE PORCELAIN BOW TOP", price: "400", image: "https://res.cloudinary.com/dav8t2igs/image/upload/v1750180854/Screenshot_20250617_181530_Gallery_ti9e6z.jpg", url: "everyday-luxe.html" },
    // Fit Mode
    { name: "WOMEN'S GYM & BARBELL GRAPHIC PRINT T-SHIRT", price: "200", image: "https://res.cloudinary.com/dav8t2igs/image/upload/v1750180859/Screenshot_20250617_181348_Gallery_crqzwx.jpg", url: "fit-mode.html" },
    { name: "MEN'S ATHELTIC PANTS", price: "300", image: "https://res.cloudinary.com/dav8t2igs/image/upload/v1750180859/Screenshot_20250617_181337_Gallery_tepxet.jpg", url: "fit-mode.html" },
    { name: "MEN'S QUICK-DRY ATHLETIC SHORTS", price: "200", image: "https://res.cloudinary.com/dav8t2igs/image/upload/v1750180856/Screenshot_20250617_181436_Gallery_fv8smt.jpg", url: "fit-mode.html" },
    { name: "MEN'S HOODED SHORT SLEEVE T-SHIRT", price: "300", image: "https://res.cloudinary.com/dav8t2igs/image/upload/v1750180858/Screenshot_20250617_181359_Gallery_atdeza.jpg", url: "fit-mode.html" },
    { name: "MEN'S QUICK-DRY VEST", price: "200", image: "https://res.cloudinary.com/dav8t2igs/image/upload/v1750180857/Screenshot_20250617_181412_Gallery_dchdbt.jpg", url: "fit-mode.html" },
    { name: "MEN'S HIGH-NECK ATHLETIC T-SHIRT", price: "300", image: "https://res.cloudinary.com/dav8t2igs/image/upload/v1750180857/Screenshot_20250617_181423_Gallery_jxcxm7.jpg", url: "fit-mode.html" },
    // Kids Clothing
    { name: "BOYS' SUMMER DENIM 2PCS SET", price: "300", image: "https://res.cloudinary.com/dav8t2igs/image/upload/v1750180857/Screenshot_20250617_181447_Gallery_xiab27.jpg", url: "kids-clothing.html" },
    { name: "4PCS SET FOR BABY BOYS", price: "350", image: "https://res.cloudinary.com/dav8t2igs/image/upload/v1750180864/Screenshot_20250617_181023_Gallery_kahkjg.jpg", url: "kids-clothing.html" },
    { name: "2PCS YOUNG BOY'S CASUAL CARTOON BEAR", price: "250", image: "https://res.cloudinary.com/dav8t2igs/image/upload/v1750180864/Screenshot_20250617_180943_Gallery_b063l5.jpg", url: "kids-clothing.html" },
    { name: "YOUNGSTERS BOYS SUMMER SOLID COLOR JACQUARD 2PCS", price: "250", image: "https://res.cloudinary.com/dav8t2igs/image/upload/v1750184012/Screenshot_20250617_191315_Dropbox_qlllms.jpg", url: "kids-clothing.html" },
    { name: "NEW GIRLS' ROUND NECK SHORT SLEEVE", price: "350", image: "https://res.cloudinary.com/dav8t2igs/image/upload/v1750180860/Screenshot_20250617_181308_Gallery_v4nydq.jpg", url: "kids-clothing.html" },
    { name: "2PCS TRENDY GIRLS SUMMER OUTFIT", price: "300", image: "https://res.cloudinary.com/dav8t2igs/image/upload/v1750180861/Screenshot_20250617_181325_Gallery_uugn2e.jpg", url: "kids-clothing.html" },
    // Mens Collection
    { name: "MEN'S LINEN SHIRT & SHORTS SET", price: "400", image: "https://res.cloudinary.com/dav8t2igs/image/upload/v1750180850/Screenshot_20250617_181716_Gallery_j4vtix.jpg", url: "shop-mens.html" },
    { name: "MEN'S WINTER JACKET", price: "550", image: "https://res.cloudinary.com/dav8t2igs/image/upload/v1750180862/Screenshot_20250617_181225_Gallery_dnzl0z.jpg", url: "shop-mens.html" },
    { name: "MENS' CASUAL SHORT SLEEVE T-SHIRT AND SHORT SET-KNIT", price: "350", image: "https://res.cloudinary.com/dav8t2igs/image/upload/v1750180854/Screenshot_20250617_181509_Gallery_euud9i.jpg", url: "shop-mens.html" },
    // Womens Collection
    { name: "HIGH-NECK ZIP-UP PUFFER JACKET", price: "500", image: "https://res.cloudinary.com/dav8t2igs/image/upload/v1750180853/Screenshot_20250617_181546_Gallery_g8xvaz.jpg", url: "shop-womens.html" },
    // Winter Collection
    { name: "MEN'S VINTAGE-INSPIRED CREWNECK SWEATSHIRT", price: "350", image: "https://res.cloudinary.com/dav8t2igs/image/upload/v1750180863/Screenshot_20250617_181156_Gallery_qabe76.jpg", url: "winter-collection.html" },
    { name: "MEN'S WINTER CAMO JACKET", price: "550", image: "https://res.cloudinary.com/dav8t2igs/image/upload/v1750180863/Screenshot_20250617_181137_Gallery_o1pbhj.jpg", url: "winter-collection.html" }
  ];

  // --- FIREBASE CONFIGURATION ---
  const firebaseConfig = {
    apiKey: "AIzaSyDelMOFKyvYx4u9FCgpq1HTr9eAoyjBjS0",
    authDomain: "abuy-77b4e.firebaseapp.com",
    projectId: "abuy-77b4e",
    storageBucket: "abuy-77b4e.appspot.com",
    messagingSenderId: "1081289117876",
    appId: "1:1081289117876:web:b3479e942dea9dc14607e1",
    measurementId: "G-31SH8VCRYG"
  };
  if (typeof firebase !== 'undefined' && !firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const auth = firebase.auth();

  // --- GENERAL HELPER FUNCTIONS ---
  const openModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "flex";
  };

  const closeModal = (modalId) => {
    const modal = document.getElementById(modalId);
    if (modal) modal.style.display = "none";
  };

  // --- CART LOGIC ---
  let cart = JSON.parse(localStorage.getItem('cart')) || [];

  function saveCart() {
    localStorage.setItem('cart', JSON.stringify(cart));
  }

  function updateCartCount() {
    const totalQuantity = cart.reduce((sum, item) => sum + (item.quantity || 1), 0);
    const cartCountSpan = document.getElementById('cart-count');
    if (cartCountSpan) {
      cartCountSpan.textContent = totalQuantity;
    }
  }
  
  function addToCart(product) {
    const existingProductIndex = cart.findIndex(item => item.name === product.name);
    if (existingProductIndex > -1) {
      cart[existingProductIndex].quantity += 1;
    } else {
      cart.push({ ...product, quantity: 1 });
    }
    saveCart();
    updateCartCount();
    alert(`'${product.name}' has been added to your cart.`);
  }

  // --- UI INITIALIZATION & EVENT LISTENERS ---

  // Side Menu
  const menuIcon = document.querySelector('.menu-icon');
  const sideMenu = document.getElementById('sideMenu');
  const closeSideMenu = document.getElementById('closeSideMenu');

  if (menuIcon) {
    menuIcon.addEventListener('click', (event) => {
      event.stopPropagation();
      if (sideMenu) sideMenu.style.width = '280px';
    });
  }
  if (closeSideMenu) {
    closeSideMenu.addEventListener('click', () => {
      if (sideMenu) sideMenu.style.width = '0';
    });
  }
  window.addEventListener('click', (event) => {
    const menuIconContainer = document.querySelector('.menu-icon');
    if (sideMenu && sideMenu.style.width === '280px' &&
        !sideMenu.contains(event.target) &&
        !menuIconContainer.contains(event.target)) {
      sideMenu.style.width = '0';
    }
  });

  // Search Overlay
  const searchIcon = document.querySelector('.fa-search');
  const searchOverlay = document.getElementById('searchOverlay');
  const closeSearchBtn = document.querySelector('.close-search');
  
  if(searchIcon) searchIcon.addEventListener('click', () => openSearchOverlay());
  if(closeSearchBtn) closeSearchBtn.addEventListener('click', () => closeSearchOverlay());

  function openSearchOverlay() { if(searchOverlay) searchOverlay.style.display = "flex"; }
  function closeSearchOverlay() { if(searchOverlay) searchOverlay.style.display = "none"; }
  
  const searchForm = document.querySelector('.search-form');
  if(searchForm) {
    searchForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const query = e.target.querySelector(".search-input").value;
      if(query) window.location.href = `search.html?q=${encodeURIComponent(query)}`;
    });
  }
  
  const searchInput = document.querySelector('.search-input');
  if(searchInput) {
    searchInput.addEventListener('input', (e) => dynamicSearch(e.target.value));
  }
  
  function dynamicSearch(query) {
    const resultsContainer = document.getElementById("searchResults");
    if (!resultsContainer) return;
    resultsContainer.innerHTML = "";
    if (query.trim() === "") {
        resultsContainer.style.display = "none";
        return;
    }
    
    const searchTerm = query.toLowerCase();
    const filteredProducts = products.filter(item => item.name.toLowerCase().includes(searchTerm));
    
    if (filteredProducts.length > 0) {
        filteredProducts.forEach(item => {
            const resultLink = document.createElement("a");
            resultLink.href = item.url;
            resultLink.className = "search-result-item";
            
            resultLink.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="search-result-details">
                    <h4>${item.name}</h4>
                    <p>${item.price} DH</p>
                </div>
                <button class="shop-now-search" data-name="${item.name}" data-price="${item.price}" data-image="${item.image}">Add to cart</button>
            `;
            resultsContainer.appendChild(resultLink);
        });
        
        resultsContainer.querySelectorAll('.shop-now-search').forEach(button => {
            button.addEventListener('click', (e) => {
                e.preventDefault(); // Prevent navigation
                const productData = {
                    name: e.target.dataset.name,
                    price: parseFloat(e.target.dataset.price),
                    image: e.target.dataset.image
                };
                addToCart(productData);
            });
        });
    } else {
        resultsContainer.innerHTML = '<p style="padding: 10px; text-align: center;">No products found.</p>';
    }
    resultsContainer.style.display = "block";
  }


  // Authentication Modals & User Menus
  const userAccountIcon = document.getElementById('userAccountIcon');
  const loginModal = document.getElementById('loginModal');
  const signupModal = document.getElementById('signupModal');
  
  if(loginModal) loginModal.querySelector('.close-btn').addEventListener('click', () => closeModal('loginModal'));
  if(signupModal) signupModal.querySelector('.close-btn').addEventListener('click', () => closeModal('signupModal'));
  
  document.getElementById('loginForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      closeModal('loginModal');
    } catch (error) {
      alert('Login failed: ' + error.message);
    }
  });

  document.getElementById('signupForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const firstName = document.getElementById('signupFirstName').value.trim();
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    if (password.length < 6) {
        alert("Password must be at least 6 characters long.");
        return;
    }
    try {
      const userCredential = await auth.createUserWithEmailAndPassword(email, password);
      await userCredential.user.updateProfile({ displayName: firstName });
      closeModal('signupModal');
      location.reload(); // Refresh to update user state everywhere
    } catch (error) {
      alert('Signup failed: ' + error.message);
    }
  });

  auth.onAuthStateChanged(user => {
    const dropupMenu = document.getElementById('userDropupMenu');
    const settingsMenu = document.getElementById('userAccountSettingsMenu');

    if (user) {
      if (userAccountIcon) {
        userAccountIcon.className = 'fas fa-user-check';
        userAccountIcon.onclick = () => {
          if(dropupMenu) dropupMenu.style.display = dropupMenu.style.display === 'block' ? 'none' : 'block';
          if(settingsMenu) settingsMenu.style.display = 'none';
        };
      }
      document.getElementById('welcomeUserName').textContent = user.displayName || 'user';
      closeModal('loginModal');
      closeModal('signupModal');
    } else {
      if (userAccountIcon) {
        userAccountIcon.className = 'fas fa-user';
        userAccountIcon.onclick = () => openModal('loginModal');
      }
      if(dropupMenu) dropupMenu.style.display = 'none';
    }
  });
  
  // User Menu Interactions
  document.getElementById('closeDropup')?.addEventListener('click', () => document.getElementById('userDropupMenu').style.display = 'none');
  document.getElementById('closeSettingsDropup')?.addEventListener('click', () => document.getElementById('userAccountSettingsMenu').style.display = 'none');
  document.getElementById('backToMainMenu')?.addEventListener('click', () => {
      document.getElementById('userAccountSettingsMenu').style.display = 'none';
      document.getElementById('userDropupMenu').style.display = 'block';
  });
  const openSettings = () => {
      document.getElementById('userDropupMenu').style.display = 'none';
      document.getElementById('userAccountSettingsMenu').style.display = 'block';
      updateAccountSettingsMenu();
  };
  document.getElementById('accountSettingsMain')?.addEventListener('click', openSettings);
  document.getElementById('passwordPersonalInfoMain')?.addEventListener('click', openSettings);

  function updateAccountSettingsMenu() {
    const user = auth.currentUser;
    if (user) {
        document.getElementById('welcomeUserNameSettings').textContent = user.displayName || 'user';
        document.getElementById('userNameDisplay').textContent = user.displayName || 'User Name';
        document.getElementById('userEmailDisplay').textContent = user.email || 'user@example.com';
    }
  }

  const signOut = () => {
    if (confirm('Are you sure you want to sign out?')) {
        auth.signOut().catch(error => alert('Logout failed: ' + error.message));
    }
  };
  document.getElementById('signOutMain')?.addEventListener('click', signOut);
  document.getElementById('signOutSettings')?.addEventListener('click', signOut);
  
  document.getElementById('changePasswordBtn')?.addEventListener('click', () => {
    const newPassword = document.getElementById('newPasswordInput').value;
    if (newPassword.length < 6) {
        alert('Password must be at least 6 characters long.');
        return;
    }
    const user = auth.currentUser;
    if(user) {
        user.updatePassword(newPassword)
            .then(() => {
                alert('Password changed successfully.');
                document.getElementById('newPasswordInput').value = '';
            })
            .catch(error => alert('Failed to change password: ' + error.message));
    }
  });

  document.getElementById('contactUs')?.addEventListener('click', () => { window.open('https://www.instagram.com/ayman_achater?igsh=MTI3ZjJxbDMzdzd3cg==', '_blank'); });

  // "Add to Cart" buttons on product pages
  document.querySelectorAll('.shop-now').forEach(button => {
    button.addEventListener('click', (e) => {
      const productData = {
        name: e.target.dataset.name,
        price: parseFloat(e.target.dataset.price),
        image: e.target.dataset.image
      };
      addToCart(productData);
    });
  });

  // --- PAGE-SPECIFIC LOGIC ---

  // For cart.html
  if (document.getElementById('cart-items')) {
    const cartItemsContainer = document.getElementById('cart-items');
    
    const renderCartItems = () => {
        cartItemsContainer.innerHTML = '';
        if (cart.length === 0) {
            cartItemsContainer.innerHTML = '<div class="cart-empty-message">Your cart is empty</div>';
            document.getElementById('cart-total').textContent = 'Total Price: 0.00 DH';
            const paypalContainer = document.getElementById('paypal-button-container');
            if (paypalContainer) paypalContainer.style.display = 'none';
            return;
        }

        let totalPrice = 0;
        cart.forEach((item, index) => {
            const priceNumber = parseFloat(String(item.price).replace(/[^0-9.-]+/g, ""));
            totalPrice += priceNumber * item.quantity;

            const cartItem = document.createElement('div');
            cartItem.className = 'cart-item';
            cartItem.innerHTML = `
                <img src="${item.image}" alt="${item.name}">
                <div class="cart-item-details">
                    <h3>${item.name}</h3>
                    <p>${priceNumber.toFixed(2)} DH</p>
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
        
        // Initialize PayPal button only if there's a total
        const paypalContainer = document.getElementById('paypal-button-container');
        if (totalPrice > 0 && paypalContainer) {
            paypalContainer.innerHTML = ''; // Clear previous button
            paypal.Buttons({
                createOrder: (data, actions) => {
                    return actions.order.create({
                        purchase_units: [{
                            amount: {
                                value: totalPrice.toFixed(2),
                                currency_code: 'MAD'
                            }
                        }]
                    });
                },
                onApprove: (data, actions) => {
                    return actions.order.capture().then(function(orderData) {
                        alert('Transaction completed by ' + orderData.payer.name.given_name);
                        cart = [];
                        saveCart();
                        window.location.reload();
                    });
                },
                onError: (err) => {
                    console.error('PayPal Button Error:', err);
                    alert('An error occurred with the payment. Please check your PayPal account settings or try again.');
                }
            }).render('#paypal-button-container').catch(err => {
                console.error('Failed to render PayPal buttons:', err);
            });
            paypalContainer.style.display = 'block';
        } else if (paypalContainer) {
            paypalContainer.style.display = 'none';
        }
    };

    cartItemsContainer.addEventListener('click', event => {
        const target = event.target;
        const index = parseInt(target.dataset.index, 10);

        if (target.classList.contains('cart-item-remove')) {
            cart.splice(index, 1);
            saveCart();
            renderCartItems();
            updateCartCount();
        } else if (target.classList.contains('plus-btn')) {
            cart[index].quantity++;
            saveCart();
            renderCartItems();
            updateCartCount();
        } else if (target.classList.contains('minus-btn')) {
            if (cart[index].quantity > 1) {
                cart[index].quantity--;
                saveCart();
                renderCartItems();
                updateCartCount();
            }
        }
    });

    renderCartItems();
  }

  // --- INITIAL LOAD ---
  updateCartCount();
});
