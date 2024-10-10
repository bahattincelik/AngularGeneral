import { Injectable } from "@angular/core";

@Injectable( {
    providedIn: 'root'
})

export class ProductService {
    getProducts():Product[] {
        return[
            { name: 'Product 1', quantity: 10 },
            { name: 'Product 2', quantity: 5 },
            { name: 'Product 3', quantity: 8 }
        ]
    }
}

export class Product {
    name: string;
    quantity: number;
}