// import { plants } from '../data.js';
import { renderTableRow, calculateTotal } from './cart-utils.js';
import { CART, getFromLocalStorage } from '../utils.js';


const table = document.querySelector('tbody');
const cart = getFromLocalStorage(CART) || [];
const orderButton = document.querySelector('button');


for (let i = 0; i < cart.length; i++) {
    const plant = cart[i];


    if (plant.quantity >= 0) {
        const tr = renderTableRow(plant);
        table.appendChild(tr);
    }
}

const total = calculateTotal(cart);

const totalCell = document.querySelector('.total-number');

totalCell.textContent = `$${total}`;



orderButton.addEventListener('click', () => {
    alert('Thank you! Your new plant friends are on their way!');

    localStorage.clear();
    window.location.href = '/';
});