import { Component, ElementRef, ViewChild } from '@angular/core';
import { Palette } from '../interfaces/palette';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss']
})
export class ColorPickerComponent   {
  palette: Palette={
    selectedColor:"red",
    allColors : [
    'red','green','blue','black','grey','orange','yellow','pink','white','violet','indigo','brown'
  ]
  }
  selectedColor!:string;
  currentColor!:string;
  toggle=true;
  @ViewChild('paletteDropdown') paletteDropdown!:ElementRef

  selectColor(value:string){
    this.palette.selectedColor=value;
  }

}
