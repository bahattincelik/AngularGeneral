import { Component, Self } from "@angular/core";
import { RandomService } from "./random.service";
import { BComponent } from "./b.component";


@Component({
    selector: 'app-a',
    standalone: true,
    imports: [BComponent],
    template: `
AComponent => {{randomService.random}}
<br>

<app-b></app-b> <!-- AppBComponent'i AComponent'a bağlandı -->
    `,
    providers: [RandomService] // Bağımlılıkları sağladık
   
})
export class AComponent {
    constructor(@Self()public randomService: RandomService) { }
}
