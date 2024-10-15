import { Component, Optional, Self, SkipSelf } from "@angular/core";
import { RandomService } from "./random.service";


@Component({
    selector: 'app-b',
    standalone: true,

    template: `
BComponent => {{randomService?.random}}
<br>
<div appD></div>
    `,
    providers: []//[RandomService]
  
})
export class BComponent {
    constructor(@Optional()@Self()public randomService: RandomService) { }
}
