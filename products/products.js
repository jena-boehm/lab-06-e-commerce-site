import { renderPlant } from '../utils.js';
import { plants } from '../data.js'; 

const ul = document.querySelector('#plants');

for (let i = 0; i < plants.length; i++) {
    const plant = plants[i];

    const li = renderPlant(plant);

    ul.appendChild(li); 
}



