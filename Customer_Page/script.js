// script.js

document.addEventListener('DOMContentLoaded', () => {
    const cartButtons = document.querySelectorAll('.product-item button');

    cartButtons.forEach(button => {
        button.addEventListener('click', () => {
            alert('Added to cart!');
        });
    });
});
