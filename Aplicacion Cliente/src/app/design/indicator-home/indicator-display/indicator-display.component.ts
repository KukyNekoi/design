import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-indicator-display',
  templateUrl: './indicator-display.component.html',
  styleUrls: ['./indicator-display.component.css']
})
export class IndicatorDisplayComponent implements OnInit {
  @Input() public indicator: any;
  constructor() {
    console.log(this.indicator);
  }

  ngOnInit() {
  }

}
