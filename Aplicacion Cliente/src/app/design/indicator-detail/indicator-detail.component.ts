import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-indicator-detail',
  templateUrl: './indicator-detail.component.html',
  styleUrls: ['./indicator-detail.component.css']
})
export class IndicatorDetailComponent implements OnInit {
  public data: any[];

  constructor() { 
    this.data = [{
      option: [
        {name: 'Barras'},{name: 'Líneas'},{name: 'Circular'}
      ]
    }];

  }

  ngOnInit() {
  }

}
