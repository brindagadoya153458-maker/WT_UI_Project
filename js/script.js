/* ==========================================
   FurniCraft Website JavaScript
   Simple UI Functionality
========================================== */

/* ------------------------------------------
   PRODUCT DATA
------------------------------------------ */

const products = {

    home1: {
        name: "Luxury Sofa",
        category: "Living Room",
        price: 24999,
        image: "product1.jpg",
        rating: "★★★★★",
        reviews: 124,
        material: "Premium Leather",
        color: "Brown",
        dimensions: "220 × 90 × 85 cm",
        warranty: "2 Years",
        description: "A premium modern sofa designed to provide comfort, elegance and style to your living room."
    },

    home2: {
        name: "Wooden Chair",
        category: "Living Room",
        price: 5999,
        image: "product2.jpg",
        rating: "★★★★",
        reviews: 86,
        material: "Solid Wood",
        color: "Natural Brown",
        dimensions: "55 × 55 × 80 cm",
        warranty: "1 Year",
        description: "A strong and comfortable wooden chair with a simple design for everyday use."
    },

    home3: {
        name: "Modern Bed",
        category: "Bedroom",
        price: 32999,
        image: "product3.jpg",
        rating: "★★★",
        reviews: 74,
        material: "Engineered Wood",
        color: "Walnut",
        dimensions: "200 × 180 × 100 cm",
        warranty: "2 Years",
        description: "A modern king-size bed designed to bring comfort and a stylish look to your bedroom."
    },

    home4: {
        name: "Dining Table",
        category: "Dining",
        price: 18999,
        image: "product4.jpg",
        rating: "★★★★",
        reviews: 91,
        material: "Solid Wood",
        color: "Oak Brown",
        dimensions: "180 × 90 × 75 cm",
        warranty: "2 Years",
        description: "A spacious dining table with a modern wooden finish, perfect for family meals."
    },

    1: {
        name: "Luxury Sofa",
        category: "Living Room",
        price: 24999,
        image: "product5.jpg",
        rating: "★★★★★",
        reviews: 124,
        material: "Premium Leather",
        color: "Brown",
        dimensions: "220 × 90 × 85 cm",
        warranty: "2 Years",
        description: "A premium modern sofa designed to provide comfort, elegance and style to your living room."
    },

    2: {
        name: "Wooden Chair",
        category: "Living Room",
        price: 5999,
        image: "product6.jpg",
        rating: "★★★★",
        reviews: 86,
        material: "Solid Wood",
        color: "Natural Brown",
        dimensions: "55 × 55 × 80 cm",
        warranty: "1 Year",
        description: "A strong and comfortable wooden chair with a simple design for everyday use."
    },

    3: {
        name: "Modern Bed",
        category: "Bedroom",
        price: 32999,
        image: "product7.jpg",
        rating: "★★★",
        reviews: 74,
        material: "Engineered Wood",
        color: "Walnut",
        dimensions: "200 × 180 × 100 cm",
        warranty: "2 Years",
        description: "A modern king-size bed designed to bring comfort and a stylish look to your bedroom."
    },

    4: {
        name: "Dining Table",
        category: "Dining",
        price: 18999,
        image: "product8.jpg",
        rating: "★★★★",
        reviews: 91,
        material: "Solid Wood",
        color: "Oak Brown",
        dimensions: "180 × 90 × 75 cm",
        warranty: "2 Years",
        description: "A spacious dining table with a modern wooden finish, perfect for family meals."
    },

    5: {
        name: "Coffee Table",
        category: "Living Room",
        price: 8499,
        image: "product9.jpg",
        rating: "★★★★★",
        reviews: 68,
        material: "Wood",
        color: "Dark Brown",
        dimensions: "110 × 60 × 45 cm",
        warranty: "1 Year",
        description: "A stylish coffee table that adds warmth and functionality to your living room."
    },

    6: {
        name: "Bookshelf",
        category: "Storage",
        price: 12999,
        image: "product10.jpg",
        rating: "★★★★★",
        reviews: 59,
        material: "Engineered Wood",
        color: "Natural Wood",
        dimensions: "180 × 80 × 35 cm",
        warranty: "1 Year",
        description: "A spacious bookshelf for organizing books, decor and everyday household items."
    },

    7: {
        name: "Office Desk",
        category: "Office",
        price: 14999,
        image: "product11.jpg",
        rating: "★★★",
        reviews: 47,
        material: "Wood",
        color: "Brown",
        dimensions: "120 × 60 × 75 cm",
        warranty: "1 Year",
        description: "A practical office desk designed for comfortable study and work."
    },

    8: {
        name: "TV Unit",
        category: "Living Room",
        price: 16499,
        image: "product12.jpg",
        rating: "★★★★",
        reviews: 53,
        material: "Engineered Wood",
        color: "Brown",
        dimensions: "180 × 40 × 55 cm",
        warranty: "1 Year",
        description: "A modern TV unit with useful storage space and a clean furniture design."
    },

    9: {
        name: "Wardrobe",
        category: "Bedroom",
        price: 28999,
        image: "product13.jpg",
        rating: "★★★",
        reviews: 42,
        material: "Engineered Wood",
        color: "Walnut",
        dimensions: "200 × 120 × 55 cm",
        warranty: "2 Years",
        description: "A spacious wardrobe designed to keep clothes and accessories organized."
    },

    10: {
        name: "Recliner Chair",
        category: "Living Room",
        price: 19999,
        image: "product14.jpg",
        rating: "★★★★",
        reviews: 61,
        material: "Leatherette",
        color: "Brown",
        dimensions: "95 × 90 × 105 cm",
        warranty: "1 Year",
        description: "A comfortable recliner chair made for relaxing after a long day."
    },

    11: {
        name: "Shoe Rack",
        category: "Storage",
        price: 6999,
        image: "product15.jpg",
        rating: "★★★",
        reviews: 38,
        material: "Engineered Wood",
        color: "Oak",
        dimensions: "100 × 35 × 100 cm",
        warranty: "1 Year",
        description: "A compact shoe rack that provides organized storage near your entrance."
    },

    12: {
        name: "Bedside Table",
        category: "Bedroom",
        price: 4999,
        image: "product16.jpg",
        rating: "★★★★★",
        reviews: 72,
        material: "Wood",
        color: "Light Brown",
        dimensions: "45 × 40 × 50 cm",
        warranty: "1 Year",
        description: "A compact bedside table with convenient storage for bedroom essentials."
    }

};


/* ------------------------------------------
   CART FUNCTIONS
------------------------------------------ */

function getCart() {

    let cart = localStorage.getItem("furnicraftCart");

    if (cart) {
        return JSON.parse(cart);
    }

    return [];

}


function saveCart(cart) {

    localStorage.setItem("furnicraftCart", JSON.stringify(cart));

}


function addToCart(productId, quantity = 1) {

    const product = products[productId];

    if (!product) {
        return;
    }

    let cart = getCart();

    let existingProduct = cart.find(item => item.id === productId);

    if (existingProduct) {

        existingProduct.quantity += quantity;

    } else {

        cart.push({

            id: productId,
            name: product.name,
            price: product.price,
            image: product.image,
            quantity: quantity

        });

    }

    saveCart(cart);

}


/* ------------------------------------------
   HOME PAGE ADD TO CART
------------------------------------------ */

document.querySelectorAll(".add-to-cart").forEach(button => {

    button.addEventListener("click", function () {

        const productId = this.getAttribute("data-product-id");

        addToCart(productId, 1);

        window.location.href = "pages/cart.html";

    });

});


/* ------------------------------------------
   PRODUCT DETAILS PAGE
------------------------------------------ */

const productName = document.getElementById("product-name");

if (productName) {

    const urlParams = new URLSearchParams(window.location.search);

    const productId = urlParams.get("id") || "1";

    const product = products[productId];

    if (product) {

        document.getElementById("product-image").src =
            "../images/products/" + product.image;

        document.getElementById("product-image").alt = product.name;

        document.getElementById("thumbnail-1").src =
            "../images/products/" + product.image;

        document.getElementById("thumbnail-2").src =
            "../images/products/" + product.image;

        document.getElementById("thumbnail-3").src =
            "../images/products/" + product.image;

        document.getElementById("product-category").textContent =
            product.category;

        document.getElementById("product-name").textContent =
            product.name;

        document.getElementById("product-rating").textContent =
            product.rating;

        document.getElementById("review-count").textContent =
            "(" + product.reviews + " Reviews)";

        document.getElementById("product-price").textContent =
            "₹" + product.price.toLocaleString("en-IN");

        document.getElementById("product-short-description").textContent =
            product.description;

        document.getElementById("product-full-description").textContent =
            product.description;

        document.getElementById("product-material").textContent =
            product.material;

        document.getElementById("product-color").textContent =
            product.color;

        document.getElementById("product-dimensions").textContent =
            product.dimensions;

        document.getElementById("product-warranty").textContent =
            product.warranty;


        let quantity = 1;

        const quantityText = document.getElementById("product-quantity");

        document.getElementById("increase-quantity").addEventListener("click", function () {

            quantity++;

            quantityText.textContent = quantity;

        });


        document.getElementById("decrease-quantity").addEventListener("click", function () {

            if (quantity > 1) {

                quantity--;

                quantityText.textContent = quantity;

            }

        });


        document.getElementById("add-detail-cart").addEventListener("click", function () {

            addToCart(productId, quantity);

            window.location.href = "cart.html";

        });


        document.getElementById("buy-now").addEventListener("click", function () {

            addToCart(productId, quantity);

            window.location.href = "checkout.html";

        });


        document.getElementById("add-wishlist").addEventListener("click", function () {

            let wishlist = JSON.parse(
                localStorage.getItem("furnicraftWishlist") || "[]"
            );

            if (!wishlist.includes(productId)) {

                wishlist.push(productId);

                localStorage.setItem(
                    "furnicraftWishlist",
                    JSON.stringify(wishlist)
                );

            }

            window.location.href = "wishlist.html";

        });

    }

}


/* ------------------------------------------
   CART PAGE
------------------------------------------ */

const cartItemsContainer = document.getElementById("cart-items");

if (cartItemsContainer) {

    function displayCart() {

        let cart = getCart();

        cartItemsContainer.innerHTML = "";

        if (cart.length === 0) {

            cartItemsContainer.innerHTML = `
                <div class="empty-cart">
                    <h2>Your Cart Is Empty</h2>
                    <p>Add some furniture to your cart.</p>
                    <a href="shop.html" class="view-button">Continue Shopping</a>
                </div>
            `;

            document.getElementById("cart-subtotal").textContent = "₹0";
            document.getElementById("cart-delivery").textContent = "₹0";
            document.getElementById("cart-discount").textContent = "₹0";
            document.getElementById("cart-total").textContent = "₹0";

            return;

        }


        let subtotal = 0;

        cart.forEach(item => {

            let itemTotal = item.price * item.quantity;

            subtotal += itemTotal;

            const cartItem = document.createElement("div");

            cartItem.className = "cart-item";

            cartItem.innerHTML = `

                <img src="../images/products/${item.image}"
                     alt="${item.name}">

                <div>

                    <h3>${item.name}</h3>

                    <p>₹${item.price.toLocaleString("en-IN")}</p>

                    <div class="quantity">

                        <button type="button"
                                class="cart-minus"
                                data-id="${item.id}">
                            -
                        </button>

                        <span>${item.quantity}</span>

                        <button type="button"
                                class="cart-plus"
                                data-id="${item.id}">
                            +
                        </button>

                    </div>

                </div>

                <strong>
                    ₹${itemTotal.toLocaleString("en-IN")}
                </strong>

                <button type="button"
                        class="remove-button"
                        data-id="${item.id}">
                    Remove
                </button>

            `;

            cartItemsContainer.appendChild(cartItem);

        });


        let delivery = subtotal >= 999 ? 0 : 99;

        let discount = subtotal >= 30000 ? 1000 : 0;

        let total = subtotal + delivery - discount;


        document.getElementById("cart-subtotal").textContent =
            "₹" + subtotal.toLocaleString("en-IN");

        document.getElementById("cart-delivery").textContent =
            "₹" + delivery.toLocaleString("en-IN");

        document.getElementById("cart-discount").textContent =
            "₹" + discount.toLocaleString("en-IN");

        document.getElementById("cart-total").textContent =
            "₹" + total.toLocaleString("en-IN");


        document.querySelectorAll(".cart-plus").forEach(button => {

            button.addEventListener("click", function () {

                let cart = getCart();

                let item = cart.find(
                    product => product.id === this.dataset.id
                );

                if (item) {

                    item.quantity++;

                    saveCart(cart);

                    displayCart();

                }

            });

        });


        document.querySelectorAll(".cart-minus").forEach(button => {

            button.addEventListener("click", function () {

                let cart = getCart();

                let item = cart.find(
                    product => product.id === this.dataset.id
                );

                if (item && item.quantity > 1) {

                    item.quantity--;

                    saveCart(cart);

                    displayCart();

                }

            });

        });


        document.querySelectorAll(".remove-button").forEach(button => {

            button.addEventListener("click", function () {

                let cart = getCart();

                cart = cart.filter(
                    product => product.id !== this.dataset.id
                );

                saveCart(cart);

                displayCart();

            });

        });

    }


    displayCart();


    const checkoutButton = document.getElementById("checkout-button");

    checkoutButton.addEventListener("click", function () {

        const cart = getCart();

        if (cart.length > 0) {

            window.location.href = "checkout.html";

        } else {

            alert("Your cart is empty.");

        }

    });

}


/* ------------------------------------------
   CHECKOUT PAGE
------------------------------------------ */

const checkoutProducts = document.getElementById("checkout-products");

if (checkoutProducts) {

    let cart = getCart();

    checkoutProducts.innerHTML = "";

    let subtotal = 0;

    cart.forEach(item => {

        let itemTotal = item.price * item.quantity;

        subtotal += itemTotal;

        checkoutProducts.innerHTML += `

            <div class="summary-product">

                <img src="../images/products/${item.image}"
                     alt="${item.name}">

                <p>
                    ${item.name}
                    <br>
                    Qty: ${item.quantity}
                </p>

                <strong>
                    ₹${itemTotal.toLocaleString("en-IN")}
                </strong>

            </div>

        `;

    });

    let shipping = subtotal >= 999 ? 0 : 99;

    let tax = Math.round(subtotal * 0.05);

    let total = subtotal + shipping + tax;

    document.getElementById("checkout-subtotal").textContent =
        "₹" + subtotal.toLocaleString("en-IN");

    document.getElementById("checkout-shipping").textContent =
        "₹" + shipping.toLocaleString("en-IN");

    document.getElementById("checkout-tax").textContent =
        "₹" + tax.toLocaleString("en-IN");

    document.getElementById("checkout-total").textContent =
        "₹" + total.toLocaleString("en-IN");

}


const placeOrderButton = document.getElementById("place-order");

if (placeOrderButton) {

    placeOrderButton.addEventListener("click", function () {

        let cart = getCart();

        if (cart.length === 0) {

            alert("Your cart is empty.");
            return;

        }

        alert("Order placed successfully!");

        localStorage.removeItem("furnicraftCart");

        window.location.href = "../index.html";

    });

}


/* ------------------------------------------
   WISHLIST PAGE
------------------------------------------ */

const wishlistContainer = document.getElementById("wishlist-items");

if (wishlistContainer) {

    let wishlist = JSON.parse(
        localStorage.getItem("furnicraftWishlist") || "[]"
    );

    wishlistContainer.innerHTML = "";

    if (wishlist.length === 0) {

        wishlistContainer.innerHTML = `
            <div class="empty-cart">
                <h2>Your Wishlist Is Empty</h2>
                <p>Add your favourite furniture here.</p>
                <a href="shop.html" class="view-button">Explore Furniture</a>
            </div>
        `;

    } else {

        wishlist.forEach(productId => {

            const product = products[productId];

            if (!product) {
                return;
            }

            const card = document.createElement("div");

            card.className = "product-card";

            card.innerHTML = `

                <img src="../images/products/${product.image}"
                     alt="${product.name}">

                <h3>${product.name}</h3>

                <p>₹${product.price.toLocaleString("en-IN")}</p>

                <a href="product-details.html?id=${productId}"
                   class="view-button">
                    View Details
                </a>

            `;

            wishlistContainer.appendChild(card);

        });

    }

}
