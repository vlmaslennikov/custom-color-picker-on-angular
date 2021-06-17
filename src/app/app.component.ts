import { Component } from '@angular/core';
import { FormBuilder, FormGroup , AbstractControl, ValidatorFn, Validators} from '@angular/forms';

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
  form!: FormGroup;
  constructor(
    private readonly formBuilder: FormBuilder,
  ){

  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      color:['',[ Validators.required, this.colorValidator()]]
    });
  }
  insertColor(value:string){
     this.selectedColor=value;
   }
  
  colorValidator(): ValidatorFn{
     return (
         control: AbstractControl
      ): {[key: string]: boolean } | null => {
        let colorRgEx: RegExp = /^[0-9]{20}(?!.)/ ;
        let valid = !control.value || colorRgEx.test(control.value);
        return valid ? null : { color: true }
      }
    }

}


