// @ts-nocheck
const coursesList = document.querySelector('.coursers-list');
const counter = document.querySelector('.counter');

const items = [];

const refreshProductsCount = () => {
    counter.innerText = items.length;
}

const addToCart = (title, price, quantity = 1) => {
    items.push({ title, price, quantity});
    refreshProductsCount();
    console.log(items);
};

const addToCartHandler = (e) => {
    if (e.target.tagName !== 'BUTTON') return;
    const title = e.target.dataset.title;
    const price = parseFloat(e.target.dataset.price);
    addToCart(title, price);
};

coursesList.addEventListener('click', addToCartHandler);