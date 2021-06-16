import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent   {
  palette:string[]=[
    'red','green','blue','black','grey','orange','yellow','pink','white','violet','indigo','brown'
  ];
  selectedColor!:string;
  currentColor!:string;
  toggle=true;
  @ViewChild('paletteDropdown') paletteDropdown!:ElementRef

  selectColor(){

  }
  addFocus(eventTarget:any){
    // Array.from(eventTarget.parentElement.cells).map((el:any)=>el.classList.remove('selected'));
    // eventTarget.focus();
    // eventTarget.classList.add('selected');
  }
}
