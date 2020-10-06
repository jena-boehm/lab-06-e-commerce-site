import { plants as plantData } from '../data.js';
import { findById } from '../utils.js';


export function renderTableRow(cartItem) {

    const tr = document.createElement('tr');
    const tdItem = document.createElement('td');
    const tdPrice = document.createElement('td');
    const tdQuantity = document.createElement('td');
    const tdSubtotal = document.createElement('td');

    tdQuantity.textContent = cartItem.quantity;

    const plantObject = findById(plantData, cartItem.id);

    const name = plantObject.name;
    tdItem.textContent = name;
    

    const price = plantObject.price;
    tdPrice.textContent = `$${price}`;


    const subtotal = price * cartItem.quantity;
    tdSubtotal.textContent = `$${subtotal}`;


    tr.append(tdItem, tdPrice, tdQuantity, tdSubtotal);

    return tr;
}