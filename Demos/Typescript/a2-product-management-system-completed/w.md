### TypeScript Features Assignment

:beginner: _**USER STORY**_

- As a developer, I need to create a simple application to manage a list of electronic products using TypeScript features.

:writing_hand: **_Requirements_**
1. Define an interface for the product data structure.
2. Implement a class to manage the list of products.
3. Create functions to add, remove, and list products.
4. Demonstrate inheritance by creating a subclass for a specific type of product.

### Example Code Snippets

#### Step 1: Define Product Interface
Create a file named `product.ts` inside the `features` folder.

```typescript
// features/product.ts
export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    rating: number;
    reviewsCount: number;
    brand: string;
    availability: string;
    color?: string;
    storage?: string;
    releaseDate: string;
}
```

#### Step 2: Implement ProductManager Class
Create a file named `productManager.ts` inside the `features` folder.

```typescript
// features/productManager.ts
import { Product } from './product';

export class ProductManager {
    private products: Product[] = [];

    addProduct(product: Product): void {
        this.products.push(product);
    }

    removeProduct(productId: number): void {
        this.products = this.products.filter(product => product.id !== productId);
    }

    listProducts(): Product[] {
        return this.products;
    }
}
```

#### Step 3: Create Functions to Add, Remove, and List Products
Create a file named `main.ts` inside the `features` folder.

```typescript
// features/main.ts
import { ProductManager } from './productManager';
import { Product } from './product';

const productManager = new ProductManager();

const product1: Product = { id: 1, name: 'Apple iPhone 13', category: 'Smartphone', price: 799.99, rating: 4.8, reviewsCount: 1500, brand: 'Apple', availability: 'In Stock', releaseDate: '2021-09-24' };
const product2: Product = { id: 2, name: 'Samsung Galaxy S21', category: 'Smartphone', price: 699.99, rating: 4.6, reviewsCount: 1200, brand: 'Samsung', availability: 'In Stock', releaseDate: '2021-01-29' };

productManager.addProduct(product1);
productManager.addProduct(product2);

console.log('All Products:', productManager.listProducts());

productManager.removeProduct(1);

console.log('Products after removal:', productManager.listProducts());
```

#### Step 4: Demonstrate Inheritance by Creating a Subclass for a Specific Type of Product
Create a file named `smartphone.ts` inside the `features` folder.

```typescript
// features/smartphone.ts
import { Product } from './product';

export class Smartphone implements Product {
    id: number;
    name: string;
    category: string;
    price: number;
    rating: number;
    reviewsCount: number;
    brand: string;
    availability: string;
    releaseDate: string;
    cameraSpecs: string;

    constructor(
        id: number,
        name: string,
        price: number,
        rating: number,
        reviewsCount: number,
        brand: string,
        availability: string,
        releaseDate: string,
        cameraSpecs: string
    ) {
        this.id = id;
        this.name = name;
        this.category = 'Smartphone';
        this.price = price;
        this.rating = rating;
        this.reviewsCount = reviewsCount;
        this.brand = brand;
        this.availability = availability;
        this.releaseDate = releaseDate;
        this.cameraSpecs = cameraSpecs;
    }

    displayDetails(): void {
        console.log(`${this.name} is a ${this.category} with a ${this.cameraSpecs} camera, priced at $${this.price}.`);
    }
}
```

### Summary

This simplified user story demonstrates the use of various TypeScript features, including interfaces, classes, and inheritance. The example code snippets show how to manage a list of electronic products, add and remove products, and create a subclass for a specific type of product using TypeScript. The `displayDetails` method in the `Smartphone` class has been improved to provide more detailed information about the product.
