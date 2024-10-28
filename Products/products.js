     // Datos de ejemplo de los productos
     const products = [{
             id: 1,
             name: "espresso coffee",
             price: 50,
             image: "/Assets/Imgs/espresso.jpg",
             text: "The Best Flavor",
         }, {
             id: 2,
             name: "American Coffee",
             price: 30,
             image: "/Assets/Imgs/americano.jpg"
         }, {
             id: 3,
             name: "Capuccino",
             price: 20,
             image: "/Assets/Imgs/capuccino.jpg"
         }, {
             id: 4,
             name: "Latte Coffee",
             price: 80,
             image: "/Assets/Imgs/latte.jpg"
         }, {
             id: 5,
             name: "Mocchiatto Coffee",
             price: 55,
             image: "/Assets/Imgs/macchiatto.jpg"
         }, {
             id: 6,
             name: "Mocha Cofee",
             price: 35,
             image: "/Assets/Imgs/mocha.jpg"
         }, {
             id: 7,
             name: "Dark Cofee",
             price: 20,
             image: "/Assets/Imgs/dark.jpg"
         }, {
             id: 8,
             name: "Flat White Cofee",
             price: 60,
             image: "/Assets/Imgs/flatwhite.jpg"
         }

     ];

     let cart = [];


     function renderProducts() {
         const gallery = document.getElementById("product-gallery");
         gallery.innerHTML = '';
         products.forEach(product => {
             const productCard = `
        <div class="col-md-3 mb-4 mt-5">
            <div class="card" >
                <img src="${product.image}" class="card-img-top" alt="${product.name}">
                <div class="card-body">
                    <h5 class="card-title text-center">${product.name}</h5>
                    <p class="card-text text-center fw-bold">$${product.price}</p>
                    <button class="btn btn-outline-dark" onclick="addToCart(${product.id})"> <span style="color:white;font-weight:bold;">+</span><span style="color: ;"> Add to Cart</span></button>
                </div>
            </div>
        </div>
    `;
             gallery.innerHTML += productCard;
         });
     }

     function addToCart(productId) {
         const product = products.find(p => p.id === productId);
         cart.push(product);
         updateCart();
         Swal.fire({
             icon: 'success',
             title: '¡Added Product!',
             text: `You have added ${product.name} to your cart..`,
             customClass: {
                 confirmButton: 'green-button'
             }
         });

     }

     function removeFromCart(index) {
         cart.splice(index, 1);
         updateCart();


     }

     function updateCart() {
         const cartCount = document.getElementById("cart-count");
         const cartItems = document.getElementById("cart-items");
         const cartTotal = document.getElementById("cart-total");
         const emptyCartMessage = document.getElementById("empty-cart-message");

         cartCount.innerText = cart.length;
         cartItems.innerHTML = '';
         let total = 0;

         if (cart.length === 0) {
             emptyCartMessage.style.display = 'block'; // Show the "Your cart is empty" message
         } else {
             emptyCartMessage.style.display = 'none'; // Hide the message when there are items
             cart.forEach((product, index) => {
                 const cartItem = `
            <li class="list-group-item d-flex justify-content-between align-items-center">
                ${product.name} - $${product.price}
                <button class="btn btn-danger btn-sm" onclick="removeFromCart(${index})">Delete</button>
            </li>
        `;
                 cartItems.innerHTML += cartItem;
                 total += product.price;
             });
         }

         cartTotal.innerText = total;
     }

     document.getElementById("checkout-button").addEventListener("click", () => {
         if (cart.length === 0) {
             Swal.fire({
                 icon: 'info',
                 title: 'Your cart is empty',
                 text: 'Add some items before checking out.',
                 customClass: {
                     confirmButton: 'empty-button'
                 }
             });
         } else {
             Swal.fire({
                 text: `Your total was $${cart.reduce((acc, product) => acc + product.price, 0)}`,
                 title: 'Purchase Completed!',
                 icon: 'success',
                 confirmButtonText: 'OK'
             });

             cart = [];
             updateCart();
         }
     });

     // Renderizar la galería inicial
     renderProducts();