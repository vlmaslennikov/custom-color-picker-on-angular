import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ColorPickerComponent } from './color-picker/color-picker.component';
import { PickerDirective } from './directives/picker.directive';

@NgModule({
  declarations: [AppComponent, ColorPickerComponent, PickerDirective],
  imports: [BrowserModule, ReactiveFormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
