import { plants } from './data.js';

export function renderPlant(plant) {
    const li = document.createElement('li');
    const name = document.createElement('p');
    const image = document.createElement('img');
    const description = document.createElement('p');
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

    // DESCRIPTION
    description.classList.add('description');
    description.textContent = plant.description;

    li.appendChild(description);

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


export function calculateTotal(cart) {
    let total = 0;

    for (let i = 0; i < cart.length; i++) {
        const item = cart[i];
        const plant = findById(plants, item.id);
        const subTotal = item.quantity * plant.price;
        total = total + subTotal;
    }
    return total;
}