// @ts-nocheck
const coursesList = document.querySelector('.coursers-list');
const items = [];

const addToCart = (title, price, quantity = 1) => {
    console.log(title, price, quantity);
    items.push({ title, price, quantity});
    console.log(items);
};

const addToCartHandler = (e) => {
    if (e.target.tagName !== 'BUTTON') return;
    const title = e.target.dataset.title;
    const price = parseFloat(e.target.dataset.price);
    addToCart(title, price);
};

coursesList.addEventListener('click', addToCartHandler);