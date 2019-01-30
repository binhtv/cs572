import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() contacts = [{ name: 'Binh', age: 30 },
  { name: 'Martin', age: 29 },
  { name: 'Kelvin', age: 20 },
  { name: 'Alpha', age: 31 }];
  title = 'smart-and-dump';
}
