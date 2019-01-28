import { Component, ViewChild } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  @ViewChild('appcounter') appCounter;
  private ComponentCounterValue = 10;
  title = 'counter-app';



  onCounterChange: (data: number) => void = (data: number) => {
    console.log(`counterValue is ${data}`);
    this.ComponentCounterValue = data;
    console.log(`set ComponentCounterValue to ${this.ComponentCounterValue}`);
    console.log(`counter is ${this.appCounter.counter}`);
  }
}
