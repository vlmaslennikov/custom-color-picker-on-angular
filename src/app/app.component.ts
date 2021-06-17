import { Component } from '@angular/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  colors:string[] = [
    'red','green','blue','black','grey','orange','yellow','pink','white','violet','indigo','brown'
  ]
  selectedColor:string ='red';

  insertColor(value:string){
     this.selectedColor=value;
   }

  
  

}


