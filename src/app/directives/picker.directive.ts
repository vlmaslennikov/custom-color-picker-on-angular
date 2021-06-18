import { Directive, HostListener, Output, EventEmitter } from '@angular/core';

@Directive({
  selector: '[appPicker]',
})
export class PickerDirective {
  @Output() setColor: EventEmitter<any> = new EventEmitter<string>();

  @HostListener('keydown.arrowdown', ['$event.target']) arrowDown(
    event: EventTarget
  ): void {
    let eventTarget = event as any;
    eventTarget.classList.remove('selected');
    if (eventTarget.cellIndex >= 9) {
      eventTarget.parentElement.cells[eventTarget.cellIndex - 9].classList.add(
        'selected'
      );
      eventTarget.parentElement.cells[eventTarget.cellIndex - 9].focus();
    } else {
      eventTarget.parentElement.cells[eventTarget.cellIndex + 3].classList.add(
        'selected'
      );
      eventTarget.parentElement.cells[eventTarget.cellIndex + 3].focus();
    }
  }

  @HostListener('keydown.arrowup', ['$event.target']) arrowUp(
    event: EventTarget
  ): void {
    let eventTarget = event as any;
    eventTarget.classList.remove('selected');
    if (eventTarget.cellIndex <= 2) {
      eventTarget.parentElement.cells[eventTarget.cellIndex + 9].classList.add(
        'selected'
      );
      eventTarget.parentElement.cells[eventTarget.cellIndex + 9].focus();
    } else {
      eventTarget.parentElement.cells[eventTarget.cellIndex - 3].classList.add(
        'selected'
      );
      eventTarget.parentElement.cells[eventTarget.cellIndex - 3].focus();
    }
  }

  @HostListener('keydown.arrowleft', ['$event.target']) arrowLeft(
    event: EventTarget
  ): void {
    let eventTarget = event as any;
    eventTarget.classList.remove('selected');
    if (eventTarget.cellIndex === 0) {
      eventTarget.parentElement.cells[
        eventTarget.parentElement.cells.length - 1
      ].classList.add('selected');
      eventTarget.parentElement.cells[
        eventTarget.parentElement.cells.length - 1
      ].focus();
    } else {
      eventTarget.parentElement.cells[eventTarget.cellIndex - 1].classList.add(
        'selected'
      );
      eventTarget.parentElement.cells[eventTarget.cellIndex - 1].focus();
    }
  }

  @HostListener('keydown.arrowright', ['$event.target']) arrowRight(
    event: EventTarget
  ): void {
    let eventTarget = event as any;
    eventTarget.classList.remove('selected');
    if (eventTarget.cellIndex === eventTarget.parentElement.cells.length - 1) {
      eventTarget.parentElement.cells[0].classList.add('selected');
      eventTarget.parentElement.cells[0].focus();
    } else {
      eventTarget.parentElement.cells[eventTarget.cellIndex + 1].classList.add(
        'selected'
      );
      eventTarget.parentElement.cells[eventTarget.cellIndex + 1].focus();
    }
  }

  @HostListener('click', ['$event.target']) addColorByCursor(
    event: EventTarget
  ): void {
    let eventTarget = event as any;
    Array.from(eventTarget.parentElement.cells).map((el: any) =>
      el.classList.remove('selected')
    );
    eventTarget.classList.add('selected');
    eventTarget.focus();
    this.setColor.emit(eventTarget.style.backgroundColor);
  }

  @HostListener('keydown.enter', ['$event.target']) addColorByEnter(
    event: EventTarget
  ): void {
    let eventTarget = event as any;
    this.setColor.emit(eventTarget.style.backgroundColor);
  }
}
