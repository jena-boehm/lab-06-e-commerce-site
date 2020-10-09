import { plants as hardCodedPlants } from './data.js';

export const CART = 'CART';
export const PRODUCTS = 'PRODUCTS';



export function renderPlant(plant) {
    const li = document.createElement('li');
    const name = document.createElement('p');
    const image = document.createElement('img');
    const category = document.createElement('p');
    const price = document.createElement('p');
    const button = document.createElement('button');

    li.classList.add('plant');

    if (plant.isOnSale) {
        li.classList.add('on-sale');
    }

    // NAME
    name.classList.add('name');
    name.textContent = plant.name;

    li.appendChild(name);

    // IMAGE
    image.classList.add('image');
    image.src = `${plant.image}`;

    li.appendChild(image);

    // CATEGORY
    category.classList.add('category');
    category.textContent = plant.category;

    li.appendChild(category);

    // PRICE
    price.classList.add('price');
    price.textContent = `$${plant.price}`;

    li.appendChild(price);

    // BUTTON
    button.textContent = 'Add to cart';
    button.addEventListener('click', () => {
        const cart = getFromLocalStorage(CART) || [];
        const itemInCart = findById(cart, plant.id);

        if (itemInCart === undefined) {
            const newCartItem = {
                id: plant.id,
                quantity: 1,
            };

            cart.push(newCartItem);
        } else {
            itemInCart.quantity++;
        }
        setInLocalStorage(CART, cart);
    });
    
    li.appendChild(button);

    return li;
}



export function findById(someArray, someId) {
    for (let i = 0; i < someArray.length; i++) {
        const item = someArray[i];
        if (item.id === someId) {
            return item;
        }
    }
}



export function calcLineItem(quantity, price) {
    const subtotal = quantity * price;
    return Math.round(subtotal * 100) / 100;
}



export function getFromLocalStorage(key) {
    const item = localStorage.getItem(key);
    return JSON.parse(item);
}



export function setInLocalStorage(key, value) {
    const stringItem = JSON.stringify(value);
    
    localStorage.setItem(key, stringItem);
    return value; 
}



export function seedAndGetProducts() {
    let localStoragePlants = JSON.parse(localStorage.getItem(PRODUCTS)); 
    if (!localStoragePlants) {
        const stringPlants = JSON.stringify(hardCodedPlants);
        localStorage.setItem(PRODUCTS, stringPlants);
        localStoragePlants = hardCodedPlants;
    }
    return localStoragePlants;
}


export function addProduct(newProduct) {

    const localStorageProducts = seedAndGetProducts();

    localStorageProducts.push(newProduct);

    const stringLocalProducts = JSON.stringify(localStorageProducts);

    localStorage.setItem(PRODUCTS, stringLocalProducts);
}
