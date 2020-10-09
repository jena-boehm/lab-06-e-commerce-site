// import { plants as plantData } from '../data.js';
import { findById, seedAndGetProducts } from '../utils.js';

const localStoragePlants = seedAndGetProducts();


export function renderTableRow(cartItem) {

    const tr = document.createElement('tr');
    const tdItem = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdSubtotal = document.createElement('td');

    tdQuantity.textContent = cartItem.quantity;

    const plantObject = findById(localStoragePlants, cartItem.id);

    const name = plantObject.name;
    tdItem.textContent = name;
    

    const price = plantObject.price;
    tdPrice.textContent = `$${price}`;


    const subtotal = price * cartItem.quantity;
    tdSubtotal.textContent = `$${subtotal}`;


    tr.append(tdItem, tdPrice, tdQuantity, tdSubtotal);

    return tr;
}

export function calculateTotal(cartArray) {
    let total = 0;

    for (let i = 0; i < cartArray.length; i++) {
        const item = cartArray[i];
        const plant = findById(localStoragePlants, item.id);
        const subTotal = item.quantity * plant.price;
        total = total + subTotal;
    }
    return total;
}