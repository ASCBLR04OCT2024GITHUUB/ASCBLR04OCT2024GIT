import { Product } from "./product";
export class ProductManager {
// define private and public
    // The public keyword is used to define a class property or method that can be accessed from outside the class.
    // The private keyword is used to define a class property  or method that cannot be accessed from outside the class.
    //Purpose : private products array to store the products
    private products : Product[] = [];

    //Purpose : method to add product to the products array
    addProduct(product : Product):void {
        this.products.push(product);
    }
    //Purpose : method to get all the products
    listProducts():Product[] {
        return this.products;
    };

    //Purpose : remove product from the products array
    removeProduct(id:number):void {
        this.products = this.products.filter(product => product.id !== id);
        console.log(`Product with id ${id} removed successfully`);
    }

    //Try it : Implementing search methods.

}