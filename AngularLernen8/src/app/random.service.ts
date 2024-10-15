import { Injectable } from "@angular/core";

@Injectable({ providedIn: 'root' })
export class RandomService {
    public random:number = 0;
    constructor() {
        console.log(`RandomService created`);
        this.random = Math.floor(Math.random() *1000);
    }

    getRandom(): number {
        return this.random;
    }
}