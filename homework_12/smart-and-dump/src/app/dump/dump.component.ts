import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-dump',
  templateUrl: './dump.component.html',
  styleUrls: ['./dump.component.css']
})
export class DumpComponent implements OnInit {

  @Input() data: any[];
  constructor() { }

  ngOnInit() {
  }

}
