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
    price.textContent = plant.price;

    li.appendChild(price);

    // BUTTON
    button.textContent = 'Add to cart';
    
    li.appendChild(button);

    return li;
}