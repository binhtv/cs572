import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter',
  template: `<div class="counter">
    <input type="button" value="-" (click)= "adjust($event);" />
    <span class="number">{{counterValue}}</span>
    <input type="button" value="+"(click)= "adjust($event);" />
  </div>`,
  styles: [`
          .counter {
            padding: 15%;
            text-align: center;
          }
          .number {
            color: red;
            padding: 40px;
          }
          input[type=button] {
            font-size: 20px;
          }`]
})
export class CounterComponent implements OnInit {
  @Input() counter: number;
  @Output() counterChange: EventEmitter<number> = new EventEmitter();
  private counterValue: number;

  ngOnInit() {
    this.counterValue = this.counter;
  }

  adjust(e) {
    if (e.target.value === '-') {
      this.counterValue--;
    } else {
      this.counterValue++;
    }
    this.counter = this.counterValue;
    this.counterChange.emit(this.counterValue);
  }
}
