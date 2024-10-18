// install readline-sync package using npm
// npm install readline-sync
// install type definition for "types": ["node"]
// npm install @types/node --save-dev   

import { Product } from './product';
import { ProductManager } from './productManager';
import * as readlineSync from 'readline-sync';


const productManager = new ProductManager();

// Add some initial products
productManager.addProduct({
    id: 1,
    name: 'Apple iPhone 13',
    category: 'Smartphone',
    price: 799.99,
    rating: 4.8,
    reviewsCount: 1500,
    brand: 'Apple',
    availability: true,
    releaseDate: new Date('2021-09-24')
});

productManager.addProduct({
    id: 2,
    name: 'Samsung Galaxy S21',
    category: 'Smartphone',
    price: 699.99,
    rating: 4.6,
    reviewsCount: 1200,
    brand: 'Samsung',
    availability: true,
    releaseDate: new Date('2021-01-29')
});

// Accept product details from user
const id = readlineSync.question('Enter product ID: ');
const name = readlineSync.question('Enter product name: ');
const category = readlineSync.question('Enter product category: ');
const price = parseFloat(readlineSync.question('Enter product price: '));
const rating = parseFloat(readlineSync.question('Enter product rating: '));
const reviewsCount = parseInt(readlineSync.question('Enter product reviews count: '));
const brand = readlineSync.question('Enter product brand: ');
const availability = readlineSync.question('Enter product availability (true/false): ').toLowerCase() === 'true';
const releaseDate = new Date(readlineSync.question('Enter product release date (YYYY-MM-DD): '));

const product3: Product = { id: parseInt(id), name, category, price, rating, reviewsCount, brand, availability, releaseDate };

productManager.addProduct(product3);

function promptContinue() {
    const answer = readlineSync.question('Continue? (y/n): ');
    if (answer.toLowerCase() !== 'y') {
        console.log('Exiting...');
        process.exit(0);
    }
}

console.log('All Products:', productManager.listProducts());
promptContinue();

const categoryFromUser = readlineSync.question('Enter the product category to filter: ');

const filteredProducts = productManager.filterProductsByCategory(categoryFromUser);
console.log(`Filtered Products in category "${categoryFromUser}":`, filteredProducts);
promptContinue();

productManager.removeProduct(1);

console.log('Products after removal:', productManager.listProducts());
promptContinue();

console.log('Product with ID 2:', productManager.findById(2));
promptContinue();

console.log('Displaying details for product with ID 2:');
productManager.displayProductDetails(2);
promptContinue();

console.log('Displaying all product details:');
productManager.displayAllProductDetails();
promptContinue();

console.log('Displaying all product availabilities:');
productManager.displayAllProductAvailabilities();
promptContinue();