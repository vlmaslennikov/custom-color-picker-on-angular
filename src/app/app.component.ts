import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { tap, distinctUntilChanged, debounceTime, map } from 'rxjs/operators';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  colors: string[] = [
    'red',
    'green',
    'blue',
    'black',
    'grey',
    'orange',
    'yellow',
    'pink',
    'white',
    'violet',
    'indigo',
    'brown',
  ];
  selectedColor: string = 'red';
  inputForColor!: FormControl;
  incorrectValue: string = '';

  insertColor(value: string) {
    this.selectedColor = value;
  }
  ngOnInit() {
    this.inputForColor = new FormControl(this.selectedColor, [
      Validators.required,
      this.colorValidator,
    ]);
    this.inputForColor.statusChanges
      .pipe(
        debounceTime(1000),
        distinctUntilChanged(),
        tap((val) =>
          val == 'INVALID'
            ? (this.incorrectValue = this.inputForColor.errors?.message)
            : (this.incorrectValue = '')
        )
      )
      .subscribe();
  }
  ngAfterViewInit() {
    this.inputForColor.valueChanges
      .pipe(
        map((val) => val.trim()),
        debounceTime(700),
        distinctUntilChanged(),
        tap((value) => (this.selectedColor = value))
      )
      .subscribe();
  }

  colorValidator(formControl: FormControl) {
    let colors: string[] = [
      'red',
      'green',
      'blue',
      'black',
      'grey',
      'orange',
      'yellow',
      'pink',
      'white',
      'violet',
      'indigo',
      'brown',
    ];
    if (colors.find((val) => val == formControl.value.trim())) {
      return null;
    } else {
      return { message: 'Incorrect color name !!!' };
    }
  }
}
