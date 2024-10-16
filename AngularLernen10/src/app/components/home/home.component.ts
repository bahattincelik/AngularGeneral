import { Component } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [],
 // templateUrl: './home.component.html',
 template:`Home`,

})
export class HomeComponent {

  constructor(private activatedRoute: ActivatedRoute) {

      // Parametreleri almak için snapshot kullanımı
   var d= activatedRoute.snapshot.paramMap.has("id");
   console.log("id: " + d);

   var d2= activatedRoute.snapshot.paramMap.get("id");
   console.log("id: " + d2);


       // Observable parametreleri almak için paramMap ve next kullanımı

   this.activatedRoute.paramMap.subscribe({
    next: (paramMap: ParamMap) => {
      let id = paramMap.get('id');
      console.log("parameter_id: " + id);
    },
    error: (err) => console.error("Error fetching route parameters: ", err),
    complete: () => console.log("Completed fetching route parameters")
  });
  // Observable parametreleri almak
  this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
    let id = paramMap.get('id');
    console.log("parameter_id: " + id);
  });

   }

  
}
