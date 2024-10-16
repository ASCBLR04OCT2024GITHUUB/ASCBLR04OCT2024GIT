//Purpose : export the Product interface
// The export keyword is used to export functions, objects or primitive values from a file (or module) so that they can be used by other programs with the import keyword.
export interface Product {
    id: number;
    name: string;
    category: string;
    price: number;
    rating: number;
    reviewsCount: number;
    brand: string;
    availability: string;
    //? makes the property optional
    color?: string;
    storage?: string;
// The releaseDate property is mandated.
    releaseDate: string;
}