import { Directive, HostListener, ElementRef, Input } from '@angular/core';

@Directive({
  selector: '[appLoggable]'
})
export class LoggableDirective {

  constructor(private e: ElementRef) { }

  @Input('name') divName: string;
  @HostListener('dblclick') onDoubleClick() {
    console.log(`%c DIV '${this.divName}' element has been clicked doubly.`, 'font-weight: bold;');
  }
}
