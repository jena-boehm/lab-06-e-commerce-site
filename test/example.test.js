// IMPORT MODULES under test here:
import { renderPlant } from '../utils.js';

const test = QUnit.test;

test('renderPlant should take in a plant and return an li with the appropriate contents', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const plant = {
        id: 'md1',
        name: 'Monstera Deliciosa',
        image: '../assets/monstera.jpg',
        description: 'Monsteras are unique, easygoing houseplants whose dramatic leaves are adorned with dramatic hole formations. Also called the "Swiss Cheese Plant." Likes bright indirect light. 12"',
        price: '$40',
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
