import { plants, cart } from '../data.js';
import { renderTableRow } from './render-line-items.js';
import { findById, calculateTotal } from '../utils.js';

const table = document.querySelector('tbody');

for (let i = 0; i < cart.length; i++) {
    const plant = cart[i];

    const tr = renderTableRow(plant);

    table.appendChild(tr);
}

const total = calculateTotal(cart);

const totalCell = document.querySelector('.total-number');

totalCell.textContent = `$${total}`;




