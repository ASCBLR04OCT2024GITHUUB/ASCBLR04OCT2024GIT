// features/product.ts
export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    rating: number;
    reviewsCount: number;
    brand: string;
    availability: boolean;
    color?: string;
    storage?: string;
    releaseDate: Date;
}