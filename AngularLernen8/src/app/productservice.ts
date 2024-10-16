import { Injectable } from "@angular/core";

/*
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
}*/

/*@Injectable()
export class ProductService {

    constructor(private loggerService: LoggerService) {}
    getProducts():Product[] {
        return[
            { name: 'Product 1', quantity: 10 },
            { name: 'Product 2', quantity: 5 },
            { name: 'Product 3', quantity: 8 }
        ];
    }
}

export class Product {
    name: string;
    quantity: number;
}

@Injectable()
export class LoggerService {
    log(){
        console.log('Logging something');
    }
}*/

@Injectable()
export class ProductService {
  constructor(private loggerService: LoggerService) {} // LoggerService, constructor ile enjekte ediliyor
  getProducts(): Product[] {
    this.loggerService.log(); // Logger'ı kullanıyoruz
    return [
      { name: 'Product 1', quantity: 10 },
      { name: 'Product 2', quantity: 5 },
      { name: 'Product 3', quantity: 8 }
    ];
  }
}

export class Product {
  name: string="Product";
  quantity: number=1;
}

@Injectable()
export class LoggerService {
  log() {
    console.log('Logging something');
  }
}