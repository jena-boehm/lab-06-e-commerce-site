# lab-06-e-commerce-site

Adding new products: 
1) Relocate products from data.js to local storage
- The products page should get those products from local storage instead of the hard coded .js file
- Problem: Those products are not yet in local storage for most users
    - We need to seed our data with some initial products (starter data)
    - getLocalStoragePlants
        - Checks local storage for plants (on the first visit, there will not be any)
        - If there are none in local storage, stringify the hard coded plants and put them into local storage
        - Return some plants
2) Add an admin page with a form that has the same fields as the product
- e.preventDefault() will stop the weirdness from happening
- On submit, make a new plant from the user input
    - new FormData(formElement) to grab stuff
- Then, grab current plants from local storage
- Push the new plant into local storage
- Save the upated array of plants into local storage