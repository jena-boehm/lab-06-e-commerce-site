import { addProduct } from '../utils.js';

const form = document.querySelector('form');

form.addEventListener('submit', (e) => {
    e.preventDefault();

    const data = new FormData(form);
    const id = data.get('id');
    const name = data.get('name');
    const image = data.get('image');
    const price = data.get('price');
    const category = data.get('category');

    const newPlant = {
        id: id,
        name: name,
        image: image,
        price: Number(price),
        category: category,
    };

    addProduct(newPlant);

    alert('Thank you! Your plant has been added.');
    
    window.location.href = '../products';
});