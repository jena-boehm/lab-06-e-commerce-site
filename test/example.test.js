// IMPORT MODULES under test here:
import { renderPlant, findById, calcLineItem, calculateTotal } from '../utils.js';
import { renderTableRow } from '/cart/render-line-items.js';

const test = QUnit.test;

test('renderPlant should take in a plant and return an li with the appropriate contents', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const plant = {
        id: 'md1',
        name: 'Monstera Deliciosa',
        image: '../assets/monstera.jpg',
        description: 'Monsteras are unique, easygoing houseplants whose dramatic leaves are adorned with dramatic hole formations. Also called the "Swiss Cheese Plant." Likes bright indirect light. 12"',
        price: 40,
        size: '12"',
        category: 'Houseplant',
        isOnSale: true
    };
    
    const expected = '<li class="plant on-sale"><p class="name">Monstera Deliciosa</p><img class="image" src="../assets/monstera.jpg"><p class="description">Monsteras are unique, easygoing houseplants whose dramatic leaves are adorned with dramatic hole formations. Also called the "Swiss Cheese Plant." Likes bright indirect light. 12"</p><p class="category">Houseplant</p><p class="price">$40</p><button>Add to cart</button></li>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderPlant(plant);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});



const monstera = {
    id: 'md1',
    name: 'Monstera Deliciosa',
    quantity: 2,
    price: 40,
    subtotal: 80
};

const calathea = {
    id: 'zc1',
    name: 'Zebra Calathea',
    quantity: 4,
    price: 10,
    subtotal: 40
};

const alocasia = {
    id: 'alocasia1',
    name: 'Alocasia',
    quantity: 2,
    price: 20,
    subtotal: 40
};

const myArray = [
    monstera,
    calathea,
    alocasia
];

test('findById should take in an array and an id and return an item with the same id', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const id1 = 'md1';
    const id2 = 'zc1';
    const expected1 = monstera;
    const expected2 = calathea;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual1 = findById(myArray, id1);
    const actual2 = findById(myArray, id2);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual1, expected1);
    expect.equal(actual2, expected2);
});


test('calcLineItem should take in quantity and price and return the total', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const quantity = 2;
    const price = 10;
    const expected = 20;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calcLineItem(quantity, price);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});



test('renderTableRow should take in a cart item and return a table row', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const cartItem = {
        id: 'md1',
        name: 'Monstera Deliciosa',
        price: 40,
        quantity: 2,
        subtotal: 80,
    };

    const expected = '<tr><td>Monstera Deliciosa</td><td>$40</td><td>2</td><td>$80</td></tr>';
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = renderTableRow(cartItem);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual.outerHTML, expected);
});


test('calculateTotal takes in the cart subtotals and and return the total', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const cartItem = [{
        id: 'md1',
        quantity: 2,
    }];

    const expected = 80;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = calculateTotal(cartItem);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});