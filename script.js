// script.js
document.addEventListener("DOMContentLoaded", function() {
    // Sample product data (you can replace this with real data fetched from a server)
    const products = [
        { name: "Gaming Mouse", price: "$49.99" },
        { name: "Mechanical Keyboard", price: "$99.99" },
        { name: "Gaming Headset", price: "$79.99" },
        { name: "Gaming Chair", price: "$199.99" }
    ];

    // Function to display products
    function displayProducts() {
        const productList = document.getElementById("products");

        products.forEach(product => {
            const productCard = document.createElement("div");
            productCard.classList.add("product-card");

            const productName = document.createElement("h2");
            productName.textContent = product.name;

            const productPrice = document.createElement("p");
            productPrice.textContent = "Price: " + product.price;

            productCard.appendChild(productName);
            productCard.appendChild(productPrice);

            productList.appendChild(productCard);
        });
    }

    // Call the function to display products when the DOM is loaded
    displayProducts();
});
