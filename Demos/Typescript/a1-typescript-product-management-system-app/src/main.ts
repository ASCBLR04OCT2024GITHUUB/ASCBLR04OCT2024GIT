console.log("Welcome to Product Management System App");

//Step 1: Import the ProductManager class
import {ProductManager} from './productManager';
import {Product} from './product';
//Step 2: Create an instance of the ProductMana{ger class
const productManager = new ProductManager();
//Step 3: Create a product object
const product : Product = {
    id: 1,
    name: 'Samsung Galaxy S21',
    category: 'Mobile',
    price: 80000,
    rating: 4.5,
    reviewsCount: 100,
    brand: 'Samsung',
    availability: 'Available',
    releaseDate: '2021-01-29'
};
//Step 4: Add the product to the productManager
productManager.addProduct(product);
//Step 5: List all the products
let products : Product[] = productManager.listProducts();
console.log(products);
//Step 6: Add another product
const product2 : Product = {
    id: 2,
    name: 'Samsung Galaxy S20',
    category: 'Mobile',
    price: 70000,
    rating: 4.3,
    reviewsCount: 90,
    brand: 'Samsung',
    availability: 'Available',
    releaseDate: '2020-02-11'
};
productManager.addProduct(product2);
console.clear();
//Step 7: List all the products
products = productManager.listProducts();
console.log(products);

//Step 8: Remove a product
productManager.removeProduct(1);
products = productManager.listProducts();
console.log(products);