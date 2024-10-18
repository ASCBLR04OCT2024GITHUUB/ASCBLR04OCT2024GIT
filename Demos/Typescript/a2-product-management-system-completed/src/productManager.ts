
import { Product } from './product';

export class ProductManager {
    private products: Product[];

    constructor() {
        this.products = [
            // {
            //     id: 1,
            //     name: 'Apple iPhone 13',
            //     category: 'Smartphone',
            //     price: 799.99,
            //     rating: 4.8,
            //     reviewsCount: 1500,
            //     brand: 'Apple',
            //     availability: 'In Stock',
            //     releaseDate: '2021-09-24'
            // },
            // {
            //     id: 2,
            //     name: 'Samsung Galaxy S21',
            //     category: 'Smartphone',
            //     price: 699.99,
            //     rating: 4.6,
            //     reviewsCount: 1200,
            //     brand: 'Samsung',
            //     availability: 'In Stock',
            //     releaseDate: '2021-01-29'
            // }
        ];
    }

    listProducts(): Product[] {
        return this.products;
    }

    addProduct(product: Product): void {
        this.products.push(product);
    }

    updateProduct(productId: number, updatedProduct: Product): void {
        const index = this.products.findIndex(product => product.id === productId);
        if (index !== -1) {
            this.products[index] = updatedProduct;
        }
    }

    removeProduct(productId: number): void {
        this.products = this.products.filter(product => product.id !== productId);
    }

    findById(productId: number): Product | undefined {
        return this.products.find(product => product.id === productId);
    }

// The | operator is used to specify multiple types for a parameter or return value. In this case, the findById method can return either a Product object or undefined. The | is called a union type operator in TypeScript. 
// The === operator is used to compare two values for strict equality. It returns true if the values are equal and have the same type. In this case, it is used to compare the id property of a Product object with the productId parameter.

    displayProductDetails(productId: number): void {
        const product = this.findById(productId);
        if (product) {
            // console.log(`Product Details:
            //     ID: ${product.id}
            //     Name: ${product.name}
            //     Category: ${product.category}
            //     Price: $${product.price}
            //     Rating: ${product.rating}
            //     Reviews Count: ${product.reviewsCount}
            //     Brand: ${product.brand}
            //     Availability: ${product.availability}
            //     Release Date: ${product.releaseDate}`);
            this.logProductDetails(product);
        } else {
            console.log('Product not found.');
        }
    }

    displayAllProductDetails(): void {
        this.products.forEach(product => {
            // console.log(`Product Details: ${product.name} - $${product.price}`);
            this.logProductDetails(product);
        });
    }


    displayAllProductAvailabilities(): void {
        this.products.forEach(product => {
            console.log(`Product Availability: ${product.name} - ${product.availability}`);
        });
    }

        filterProductsByCategory(category: string): Product[] {
            return this.products.filter(product => product.category === category);
        }

            // Reusable method to log product details
    private logProductDetails(product: Product): void {
        console.log(`Product Details:
    ID: ${product.id}
        Name: ${product.name}
            Category: ${product.category}
            Price: $${product.price}
            Rating: ${product.rating}
            Reviews Count: ${product.reviewsCount}
            Brand: ${product.brand}
            Availability: ${product.availability}
            Release Date: ${product.releaseDate}`);
    }

}