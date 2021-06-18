import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Palette } from '../interfaces/palette';

@Component({
  selector: 'app-color-picker',
  templateUrl: './color-picker.component.html',
  styleUrls: ['./color-picker.component.scss'],
})
export class ColorPickerComponent {
  @Input() colorsList!: string[];
  @Input() pickedColor!: string;
  @Output() exportColor: EventEmitter<string> = new EventEmitter<string>();
  palette!: Palette;
  ngOnChanges() {
    this.palette = {
      selectedColor: this.pickedColor || 'red',
      allColors: this.colorsList,
    };
  }

  selectedColor!: string;
  currentColor!: string;
  toggle = false;

  selectColor(value: string) {
    this.palette.selectedColor = value;
    this.exportColor.emit(value);
  }
}
