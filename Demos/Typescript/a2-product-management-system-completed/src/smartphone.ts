
import { Product } from './product';

export class Smartphone implements Product {
    id: number;
    name: string;
    category: string;
    price: number;
    rating: number;
    reviewsCount: number;
    brand: string;
    availability: boolean;
    releaseDate: Date;
    cameraSpecs: string;

    constructor(
        id: number,
        name: string,
        price: number,
        rating: number,
        reviewsCount: number,
        brand: string,
        availability: boolean,
        releaseDate: Date,
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