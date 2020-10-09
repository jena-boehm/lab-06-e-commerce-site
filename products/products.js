import { renderPlant, seedAndGetProducts } from '../utils.js';
// import { plants } from '../data.js'; 

const localStoragePlants = seedAndGetProducts();

const ul = document.querySelector('#plants');

for (let i = 0; i < localStoragePlants.length; i++) {
    const plant = localStoragePlants[i];

    const li = renderPlant(plant);

    ul.appendChild(li); 
}



