import { Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent   {
  palette:string[]=[
    'red','green','blue','black','grey','orange','yellow','pink','white','violet'
  ];
  selectedColor!:string;
  currentColor!:string;
  
  @ViewChild('paletteDropdown') paletteDropdown!:ElementRef


  selectColor(){

  }
 
}
