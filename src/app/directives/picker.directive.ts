import { Directive, HostListener } from '@angular/core';

@Directive({
  selector: '[appPicker]'
})
export class PickerDirective {


  // @Output() setValue: EventEmitter<any> = new EventEmitter<string>();

  @HostListener('keydown.arrowdown', ['$event.target']) arrowDown(
    event: EventTarget
  ):void {
    let eventTarget = event as any;
    eventTarget.classList.remove('selected');
    if (eventTarget.cellIndex >=9) {////
      // this.setValue.emit(eventTarget.nextSibling.value);
      eventTarget.parentElement.cells[eventTarget.cellIndex-9].classList.add('selected');
      eventTarget.parentElement.cells[eventTarget.cellIndex-9].focus();
    } else {
      // this.setValue.emit(eventTarget.parentElement.firstElementChild.value);
      eventTarget.parentElement.cells[eventTarget.cellIndex+3].classList.add('selected');
      eventTarget.parentElement.cells[eventTarget.cellIndex+3].focus();
    }
  }


  @HostListener('keydown.arrowup', ['$event.target']) arrowUp(event: EventTarget):void {
    let eventTarget = event as any;
    eventTarget.classList.remove('selected');
    if (eventTarget.cellIndex <= 2) {
      // this.setValue.emit(eventTarget.previousSibling.value);
      eventTarget.parentElement.cells[eventTarget.cellIndex+9].classList.add('selected');
      eventTarget.parentElement.cells[eventTarget.cellIndex+9].focus();
    } else {
      // this.setValue.emit(eventTarget.parentElement.lastElementChild.value);
      eventTarget.parentElement.cells[eventTarget.cellIndex-3].classList.add('selected');
      eventTarget.parentElement.cells[eventTarget.cellIndex-3].focus();
    }
  }

  @HostListener('keydown.arrowleft', ['$event.target']) arrowLeft(
    event: EventTarget
  ):void {
    let eventTarget = event as any;
    eventTarget.classList.remove('selected');
    if (eventTarget.cellIndex === 0) {
      // this.setValue.emit(eventTarget.previousSibling.value);
      eventTarget.cellIndex[eventTarget.parentElement.cells.length-1].classList.add('selected');
      eventTarget.cellIndex[eventTarget.parentElement.cells.length-1].focus();
    } else {
      // this.setValue.emit(eventTarget.parentElement.lastElementChild.value);
      eventTarget.parentElement.cells[eventTarget.cellIndex-1].classList.add('selected');
      eventTarget.parentElement.cells[eventTarget.cellIndex-1].focus();
    }

  }

  @HostListener('keydown.arrowright', ['$event.target']) arrowRight(
    event: EventTarget
  ):void {
    let eventTarget = event as any;
    eventTarget.classList.remove('selected');
    if (eventTarget.cellIndex === eventTarget.parentElement.cells.length-1) {
      // this.setValue.emit(eventTarget.previousSibling.value);
      eventTarget.cellIndex[0].classList.add('selected');
      eventTarget.cellIndex[0].focus();
    } else {
      // this.setValue.emit(eventTarget.parentElement.lastElementChild.value);
      eventTarget.parentElement.cells[eventTarget.cellIndex+1].classList.add('selected');
      eventTarget.parentElement.cells[eventTarget.cellIndex+1].focus();
    }
  }

  @HostListener('click', ['$event.target']) addFocus(event: EventTarget):void {
    let eventTarget = event as any;
console.log('tghsrthwshswh');

    Array.from(eventTarget.parentElement.cells).map((el:any)=>el.classList.remove('selected'));
    eventTarget.classList.add('selected');
    eventTarget.focus();

   
  }


}
